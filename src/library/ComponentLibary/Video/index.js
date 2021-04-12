import React, { PureComponent } from "react";

import "./index.less";

export default class Video extends PureComponent {
  render() {
    const { config = {} } = this.props;
    const { src, style, poster } = config || {};
    // return <img className="image" src={src} alt="" style={{ ...style }} />;

    return (
      <video
        controls
        style={{ ...style }}
        poster={poster ? poster : src + "?vframe/jpg/offset/1"}
      >
        <source src={src} type="video/mp4" />
        {/* <source src="movie.ogg" type="video/ogg" /> */}
        您的浏览器不支持Video标签。
      </video>
    );
  }
}
