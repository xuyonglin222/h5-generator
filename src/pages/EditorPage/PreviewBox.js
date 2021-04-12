import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { Form, Input } from "antd";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import { history } from "stores";
import componentMap from "library/ComponentLibary";
import ScriptMap from "library/ScriptLibary";
import DropHoc from "components/DropHoc";
import generateId from "utils/generateId";
import ToolBox from "./ToolBox";

// import { editor } from 'stores';
import "./style.less";

@inject("editor")
@Form.create({
  onValuesChange({ form, editor }, changedValues, allValues) {
    editor.updatePageName(changedValues);
  }
})
@DropTarget(
  "box",
  {
    drop: (props, monitor) => {
      //获取拖拽元素基于模拟器的偏移量
      let offset = monitor.getClientOffset();
      console.log("drag", offset);
      const { name } = monitor.getItem();
      const componentItem = {
        content: componentMap.find(({ type }) => name == type) || {},
        script: ScriptMap.find(({ type }) => "usualScript" == type) || {}
      };
      let tempid = generateId();
      componentItem.content.id = tempid;
      componentItem.script.id = tempid;
      //将当前拖动的元素插入
      props.editor.push(componentItem);
    }
  },
  connect => {
    return {
      connectDropTarget: connect.dropTarget()
    };
  }
)
@observer
class PreviewBox extends Component {
  componentDidMount() {
    const { editor } = this.props;
    const { id } = history.getQuery();
    id && editor.open_page(id);
  }
  render() {
    const { editor, connectDropTarget, form } = this.props;
    const { getFieldDecorator } = form;
    const { componentsData } = editor || {};
    return (
      <div className="box-container">
        <ToolBox />
        <div>
          页面id: {editor.webpid ? editor.webpid : "（页面还未保存，未生成id）"}
        </div>
        <Form.Item
          label={"页面名称"}
          labelCol={{
            xs: { span: 24 },
            sm: { span: 4 }
          }}
          wrapperCol={{
            xs: { span: 24 },
            sm: { span: 20 }
          }}
          style={{ marginBottom: 10 }}
        >
          {getFieldDecorator("page_name", {
            initialValue: editor.page_name
          })(<Input placeholder="请输入页面名称" />)}
        </Form.Item>

        <div className="tips">预览区域以iphoneX为标准：宽750px，高：1334px</div>
        <div className="absoluteOutWapper">
          {connectDropTarget(
            <div className="preview-box" style={{ overflowY: "scroll" }}>
              {componentsData.map(
                ({
                  content: { component, id, data, type, showData, baseType }
                }) => {
                  let Component = component;
                  if (!component) {
                    let ComponentItem =
                      componentMap.find(item => type == item.type) || {};
                    Component = ComponentItem.component;
                  }
                  return (
                    <DropHoc key={id} id={id} editor={editor}>
                      {Component && (
                        <Component
                          config={
                            // baseType === "complexComponent" ? data : showData
                            showData
                          }
                          preview
                        />
                      )}
                    </DropHoc>
                  );
                }
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PreviewBox;
