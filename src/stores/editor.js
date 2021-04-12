import { observable, action, toJS } from "mobx";
import qs from "querystring";
import { message } from "antd";
import { px2vw } from "../utils/pxToVw.js";
import componentMap from "library/ComponentLibary";
class Editor {
  //所有组件配置
  @observable componentsData = [];
  @observable configDrawerVisible = false;
  //当前选中的组件的值
  @observable drawerPropsFormConfig = {
    id: "",
    schema: [],
    data: {},
    showData: {},
    outData: {}
  };
  @observable drawerScriptsFormConfig = {
    id: "",
    schema: [],
    data: {}
  };
  @observable page_id = "";
  @observable webpid = "";
  @observable page_name = "";
  @observable showForm = true;

  @action
  push = component => {
    const tempData = [...this.componentsData];

    tempData.push(component);
    this.componentsData = tempData;
  };

  @action
  delete = componentId => {
    let index = this.componentsData.findIndex(
      ({ content: { id } }) => componentId === id
    );
    const data = [...this.componentsData];
    if (index > -1) {
      data.splice(index, 1);
    }
    this.componentsData = data;
    //关闭抽屉
    this.configDrawerVisible = false;
  };

  @action
  showDrawer = componentId => {
    if (
      componentId === this.drawerPropsFormConfig.id ||
      componentId === this.drawerScriptsFormConfig.id
    ) {
      return;
    }
    this.showForm = false;
    this.configDrawerVisible = true;
    this.drawerPropsFormConfig = this.componentsData.find(
      ({ content: { id } }) => id === componentId
    ).content;
    this.drawerScriptsFormConfig = this.componentsData.find(
      ({ script: { id } }) => id === componentId
    ).script;
    setTimeout(() => {
      this.showForm = true;
    }, 300);
  };

  @action
  updateComponentConfig(changes) {
    const { id, data, schema, showData, outData } = this.drawerPropsFormConfig;
    const { style } = data;
    const { style: outStyle } = outData;
    const { style: showStyle } = showData;
    const { style: changes_style } = changes;

    //style嵌套结构不能直接覆盖，且有单位转换
    console.log("changes_style", changes_style);
    if (changes_style) {
      //单位转换，pc上显示为实际px的一半
      let tempShowStyle = { ...changes_style };
      let tempOutStyle = { ...changes_style };
      let tempStyle = { ...changes_style };
      for (let i in changes_style) {
        let tempSchema = toJS(schema).find(({ id }) => id === i) || {};
        if (tempSchema.kill) {
          tempShowStyle[tempSchema.kill] = "";
          tempOutStyle[tempSchema.kill] = "";
          tempStyle[tempSchema.kill] = "";
        }
        if (tempSchema.showNeedChange) {
          if (tempSchema.showNeedChange.a === changes_style[i]) {
            tempShowStyle[i] = tempSchema.showNeedChange.b;
          }
        }
        if (tempSchema.toVW) {
          tempShowStyle[i] = changes_style[i] / 2;
          tempOutStyle[i] = px2vw(changes_style[i]);
        }
      }
      //输出数据赋值
      this.drawerPropsFormConfig.outData = {
        ...outData,
        style: { ...outStyle, ...tempOutStyle }
      };
      //展示数据赋值
      this.drawerPropsFormConfig.showData = {
        ...showData,
        style: { ...showStyle, ...tempShowStyle }
      };
      //保存数据赋值
      this.drawerPropsFormConfig.data = {
        ...data,
        style: { ...style, ...tempStyle }
      };
    }
    //非嵌套，props，应该没有单位转换
    else {
      //输出数据赋值
      this.drawerPropsFormConfig.outData = { ...outData, ...changes };
      //展示数据赋值
      this.drawerPropsFormConfig.showData = { ...showData, ...changes };
      //保存数据赋值
      this.drawerPropsFormConfig.data = { ...data, ...changes };
    }

    //存储config配置
    let componentsData = [...this.componentsData];
    // this.componentsData = componentsData.map((item) =>
    //   id === item.id ? { ...this.drawerPropsFormConfig } : item
    // );
    this.componentsData = [...componentsData];
  }

  @action
  updateScriptConfig(changes) {
    const { id, data } = this.drawerScriptsFormConfig;

    //保存数据赋值
    this.drawerScriptsFormConfig.data = { ...data, ...changes };

    //存储config配置
    let componentsData = [...this.componentsData];
    // this.componentsData = componentsData.map((item) =>
    //   id === item.id ? { ...this.drawerScriptsFormConfig } : item
    // );
    this.componentsData = [...componentsData];
  }

  @action
  updatePageName = changes => {
    this.page_name = changes.page_name;
  };

  translateConfig = (data = []) => {
    //console.log(temp);
    return data.map((itemout = {}) => {
      console.log(itemout);
      const { content: item = {}, script } = itemout;
      if (item.baseType === "complexComponent") {
        return {
          type: { complex_id: item.type },
          props: item.outData
        };
      } else {
        return {
          type: item.baseType,
          props: item.outData,
          children:
            typeof item.outData.children === "string"
              ? [item.outData.children]
              : item.outData.children,
          scriptid: {
            onClick: [
              {
                id: script.data.openPage ? "openPage" : "",
                params: [script.data.jumpUrl, script.data.openPageTimeout]
              },
              {
                id: script.data.toast ? "toast" : "",
                params: [script.data.toastText]
              }
            ]
          }
        };
      }
    });
  };

  @action
  submit = () => {
    let submitJsonArr = this.translateConfig(toJS(this.componentsData));
    let rootJson = {
      type: "div",
      props: {},
      children: submitJsonArr,
      scriptid: {}
    };
    //发送请求
    const url = "/maiya/pages/add?";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        page_name: this.page_name,
        jsx_config: rootJson,
        original_config: toJS(this.componentsData)
        // view_config:JSON.stringify(),
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log("成功", res);
        message.success("成功", 4);
        //{ webpid: 'hUQcb2vp', id: 47, result: 'ok' }
        this.page_id = res.res.id;
        this.webpid = res.res.webpid;
      })
      .catch(e => {
        console.log(e);
      });
  };

  @action
  copy = () => {
    this.page_name = this.page_name + "（复制）";
    this.submit();
  };

  @action
  update = id => {
    let submitJsonArr = this.translateConfig(toJS(this.componentsData));
    let rootJson = {
      type: "div",
      props: {},
      children: submitJsonArr,
      scriptid: {}
    };
    //发送请求
    const url = "/maiya/pages/update?";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        page_id: id,
        page_name: this.page_name,
        jsx_config: rootJson,
        original_config: toJS(this.componentsData)
        // view_config:JSON.stringify(),
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log("成功", res);
        message.success("成功", 4);
        //{ webpid: 'hUQcb2vp', id: 47, result: 'ok' }
        this.page_id = res.res.id;
        this.webpid = res.res.webpid;
      })
      .catch(e => {
        console.log(e);
      });
  };

  @action
  open_page = async id => {
    let url =
      "/maiya/pages/get?" +
      qs.stringify({
        page_id: id
      });
    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(res => {
        const { data } = res;
        const config = JSON.parse(data.original_config) || [];
        this.componentsData = config.map((item = {}) => {
          const { content } = item;
          const component = componentMap.find(
            ({ type }) => type === content.type
          );
          console.log("content", content.data);
          console.log("component", component.data);
          return {
            ...item,
            content: {
              ...content,
              schema: component.schema,
              data: { ...component.data, ...content.data }
            }
          };
        });
        this.configDrawerVisible = false;
        this.drawerPropsFormConfig = {
          id: "",
          schema: [],
          data: {},
          outData: {}
        };
        this.page_id = data.id;
        this.webpid = data.webpid;
        this.page_name = data.name;
        this.showForm = true;
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export default new Editor();
