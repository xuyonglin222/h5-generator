import React, { Component } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ComponentSet from "./ComponentSet";
import PreviewBox from "./PreviewBox";
import ConfigDrawer from "./ConfigDrawer";
import OptionButtonGroup from "./optionButtonGroup";

class EditorPage extends Component {
  componentDidMount() {
    // 收缩导航栏
    setTimeout(() => {
      const dom = document.querySelector("#collapse-menu");
      if (dom) {
        dom.click();
      }
    }, 200);
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="edit-container">
          <ComponentSet />
          <PreviewBox />
          <ConfigDrawer />
        </div>
        <OptionButtonGroup />
      </DndProvider>
    );
  }
}

export default EditorPage;
