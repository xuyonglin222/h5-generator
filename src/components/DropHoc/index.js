import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import "./index.less";

@inject("editor", "toolbox")
@observer
class DropHoc extends Component {
  clickComponent = () => {
    const { id, editor, toolbox } = this.props;
    const { componentsData } = editor || {};
    editor.showDrawer(id);
    toolbox.show(id, componentsData);
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className="drop-box"
        onClick={this.clickComponent}
        onContextMenu={this.rightClick}
        onMouseLeave={this.mouseLeave}
      >
        {children}
      </div>
    );
  }
}

export default DropHoc;
