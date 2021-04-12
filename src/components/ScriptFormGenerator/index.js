import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";
import { Form } from "antd";
import FormGenerator from "components/ContentFormGenerator/FormGenerator.js";

@inject("editor")
@Form.create({
  onValuesChange({ form, editor }, changedValues, allValues) {
    console.log("allValues", allValues);
    console.log("changedValues", changedValues);
    editor.updateScriptConfig(changedValues);
  }
})
@observer
class ConfigDrawer extends Component {
  render() {
    const { editor, form } = this.props;
    const { drawerScriptsFormConfig = {}, showForm } = editor || {};
    const { schema, data } = drawerScriptsFormConfig;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <Form {...formItemLayout}>
        {showForm && (
          <FormGenerator form={form} schema={toJS(schema)} data={toJS(data)} />
        )}
      </Form>
    );
  }
}

export default ConfigDrawer;
