import React, { Component } from "react";
import { Icon } from "antd";
import { observer, inject } from "mobx-react";
import { UP, DOWN, DELETE } from "stores/const";

import "./style.less";

@inject("toolbox", "editor")
@observer
class ToolBox extends Component {
  toolClick = option => {
    const { editor, toolbox } = this.props;
    switch (option) {
      case DELETE:
        editor.delete(toolbox.moduleId);
        toolbox.hide();
        break;
      case UP:
        toolbox.up(editor.componentsData);
        break;
      case DOWN:
        toolbox.down(editor.componentsData);
        break;
      default:
        break;
    }
  };
  render() {
    const { toolbox } = this.props;
    const { tools = [], visible, style } = toolbox;
    return visible ? (
      <div className="toolbox-container" style={{ ...style }}>
        <div className="toolbox">
          {tools.map(icon => {
            console.log(icon);
            return (
              <div
                className="icon-wrapper"
                key={icon}
                onClick={() => {
                  this.toolClick(icon);
                }}
              >
                <Icon type={icon} twoToneColor="#000" />
              </div>
            );
          })}
        </div>
      </div>
    ) : null;
  }
}

export default ToolBox;
