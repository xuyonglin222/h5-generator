import React, { PureComponent } from "react";

import "./index.less";

export default class Button extends PureComponent {
  render() {
    const { config = {} } = this.props;
    const { style, children } = config;
    console.log(config);
    return (
      <div
        style={{
          ...style
        }}
      >
        {children}
      </div>
    );
  }
}
