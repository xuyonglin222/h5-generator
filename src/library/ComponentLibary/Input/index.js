import React, { PureComponent } from "react";

// import "./index.less";

export default class Input extends PureComponent {
  render() {
    const { config = {} } = this.props;
    const { src, style } = config || {};
    return (
      <input
        type="text"
        className="inputText"
        placeholder={"请输入"}
        // value={this.state.value}
        // onChange={this.handleChange}
        style={{
          ...style
        }}
      />
    );
  }
}
