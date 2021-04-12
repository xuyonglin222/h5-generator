import React, { PureComponent, Fragment } from "react";
import { SketchPicker } from "react-color";

function rgba2Obj(rgba = "") {
  let reg = /rgba\((\d+),(\d+),(\d+),(\d+)\)/g;
  if (rgba.includes("#")) return rgba;
  let rgbaObj = { r: 0, g: 0, b: 0, a: 0 };

  rgba.replace(reg, (_m, r, g, b, a) => {
    rgbaObj = { r, g, b, a };
    return rgba;
  });
  return rgbaObj;
}

class ColorPicker extends PureComponent {
  state = {
    colorPickerVisible: false,
    color: rgba2Obj(this.props.value)
  };

  handleClick = () => {
    const { colorPickerVisible } = this.state;
    this.setState({ colorPickerVisible: !colorPickerVisible });
  };

  handleClose = () => {
    this.setState({ colorPickerVisible: false });
  };

  handleChange = (color, e) => {
    const { onChange } = this.props;
    console.log(color);
    this.setState({ color: color.rgb });

    onChange &&
      onChange(
        `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
      );
    e.stopPropagation();
  };

  render() {
    const { colorPickerVisible, color } = this.state;
    let renderColor = color;
    if (color.r) {
      renderColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    }
    return (
      <div>
        <div
          style={{
            padding: "8px",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: 5,
            cursor: "pointer"
          }}
          onClick={this.handleClick}
        >
          <div
            style={{
              height: "29px",
              borderRadius: "2px",
              background: renderColor
            }}
          />
        </div>
        {colorPickerVisible ? (
          <Fragment>
            <div
              style={{
                position: "absolute",
                zIndex: 2000
              }}
            >
              <SketchPicker color={color} onChange={this.handleChange} />
            </div>
            <div
              style={{
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                zIndex: 1000
              }}
              onClick={this.handleClose}
            />
          </Fragment>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
