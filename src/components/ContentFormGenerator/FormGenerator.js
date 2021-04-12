import React from "react";
import { Form, InputNumber, Input, Select } from "antd";
import ColorPicker from "./ColorPicker";
import ImgUpload from "./ImgUpload";
import VideoUpload from "./VideoUpload";
import { NUMBER, INPUT, SELECT, COLOR, UPLOAD, VIDEOUPLOAD } from "./const";

const { Option } = Select;

const FormItem = Form.Item;

function generateForm(type, props = {}, config = []) {
  const formMap = {
    [NUMBER]: <InputNumber style={{ width: "100%" }} {...props} />,
    [INPUT]: <Input {...props} />,
    [SELECT]: (
      <Select {...props}>
        {config &&
          config.map(({ label, value }) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
      </Select>
    ),
    [COLOR]: <ColorPicker {...props} />,
    [UPLOAD]: <ImgUpload {...props} />,
    [VIDEOUPLOAD]: <VideoUpload {...props} />
  };
  if (!formMap[type]) return <span>组件暂不存在</span>;
  return formMap[type];
}

function FormGenerator({ form, schema = [], data = {} }) {
  const { getFieldDecorator } = form;
  let { style = {} } = data;
  return (
    Array.isArray(schema) &&
    schema.map(item => {
      const { id, type, label, config, props, options, logic } = item;

      //props直接属性
      if (typeof data[id] !== "undefined") {
        return (
          <FormItem label={label} key={label}>
            {getFieldDecorator(id, { initialValue: data[id], ...options })(
              generateForm(type, props, config)
            )}
          </FormItem>
        );
      }
      //style结构
      else if (typeof style[id] !== "undefined") {
        return (
          <FormItem label={label} key={label}>
            {getFieldDecorator(`style[${id}]`, {
              initialValue: style[id],
              ...options
            })(generateForm(type, props, config))}
          </FormItem>
        );
      } else {
        return null;
      }
    })
  );
}

export default FormGenerator;
