import React, { PureComponent } from "react";

import "./index.less";

export default class Image extends PureComponent {
  render() {
    const { config = {} } = this.props;
    const { src, style } = config || {};
    return <img className="image" src={src} alt="" style={{ ...style }} />;
  }
}
