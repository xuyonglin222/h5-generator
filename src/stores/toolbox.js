import { observable, action, toJS } from "mobx";
import { UP, DOWN, DELETE } from "stores/const";

const TOOL_MAP = {
  first: [DELETE, DOWN],
  intermediate: [UP, DELETE, DOWN],
  last: [UP, DELETE],
  only: [DELETE]
};
class ToolBox {
  @observable moduleId = "";
  @observable index = 0;
  @observable visible = false;
  @observable tools = [UP, DELETE, DOWN];
  @observable style = {
    height: 100,
    top: 50
  };

  @action
  show(id, componentsData) {
    let len = componentsData.length;
    let index = toJS(componentsData).findIndex(
      ({ content }) => content.id === id
    );
    let mode = "intermediate";
    if (index === 0) {
      mode = "first";
    }
    if (index === len - 1) {
      mode = "last";
    }

    if (len === 1) {
      mode = "only";
    }
    //计算toolbox的top和height
    let boxs = document.querySelectorAll(".drop-box");
    const header = document.querySelector(".ant-layout-header");
    const { height: headerHeight } = header.getBoundingClientRect();
    const { top, height } = boxs[index].getBoundingClientRect();
    const scrollTop1 = document.querySelector(".box-container").scrollTop;
    const scrollTop2 = document.querySelector(".preview-box").scrollTop;

    this.index = index;
    this.moduleId = id;
    this.visible = true;
    this.tools = TOOL_MAP[mode];
    this.style = {
      top: top + scrollTop1 + window.scrollY - headerHeight,
      height
    };
  }

  @action
  up(componentsData) {
    [componentsData[this.index], componentsData[this.index - 1]] = [
      componentsData[this.index - 1],
      componentsData[this.index]
    ];
    setTimeout(() => {
      this.show(this.moduleId, componentsData);
    }, 100);
  }

  @action
  down(componentsData) {
    [componentsData[this.index], componentsData[this.index + 1]] = [
      componentsData[this.index + 1],
      componentsData[this.index]
    ];
    setTimeout(() => {
      this.show(this.moduleId, componentsData);
    }, 100);
  }

  @action
  hide() {
    this.moduleId = "";
    this.visible = false;
    this.tools = [];
    this.style = {};
  }
}

export default new ToolBox();
