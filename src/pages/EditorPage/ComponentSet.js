import React, { Component } from "react";

import ImagePoster from "library/ComponentLibary/Image/template.js";
import ButtonPoster from "library/ComponentLibary/Button/template.js";
import FormPoster from "library/ComponentLibary/AdsForm/template.js";
import VideoPoster from "library/ComponentLibary/Video/template.js";
import SliderPoster from "library/ComponentLibary/Slider/template.js";

import DragHoc from "components/DragHoc";
import "./style.less";

import { observer, inject } from "mobx-react";

@inject("editor")
@observer
class ComponentSet extends Component {
  render() {
    const posterMap = [
      ImagePoster,
      ButtonPoster,
      FormPoster,
      VideoPoster,
      SliderPoster
    ];
    return (
      <div className="components-container">
        <h2 style={{ padding: 10 }}>物料集合</h2>
        <div className="poster-container">
          {posterMap.map(({ name, poster, type, h }) => (
            <DragHoc key={name} name={type} h={h}>
              <div className="poster-card">
                <div className="poster-img-container">
                  <img src={poster} alt="" />
                </div>
                <span>{name}</span>
              </div>
            </DragHoc>
          ))}
        </div>
      </div>
    );
  }
}

export default ComponentSet;
