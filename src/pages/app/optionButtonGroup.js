import React, { Component } from "react";
import qs from "querystring";
import { observer, inject } from "mobx-react";
// import { toJS } from "mobx";
import { message, Button } from "antd";

import "./index.less";

@inject("editor")
@observer
class OptionButtonGroup extends Component {
  submit = () => {
    const { editor } = this.props;
    const { page_id, page_name } = editor;
    if (!page_name) {
      message.error("请输入页面名称", 4);
      return;
    }
    if (page_id) {
      editor.update(page_id);
    } else {
      editor.submit();
    }
  };

  copy = () => {
    const { editor } = this.props;
    let { webpid, page_name } = editor;
    if (!webpid) {
      message.error("请先保存当前页面配置，或从列表打开一个页面配置", 4);
      return;
    }
    editor.copy();
  };

  showLink = () => {
    const { editor } = this.props;
    const { webpid } = editor || {};
    console.log(webpid);
    if (!webpid) {
      message.error("请先保存页面配置", 4);
      return;
    }
    let url =
      "https://maimai.cn/usual_page?" +
      qs.stringify({
        webpid: webpid
      });
    window.open(url, null);
  };

  render() {
    return (
      <div className="option-top">
        <Button onClick={this.submit} type="link" size="large">
          保存页面
        </Button>
        <Button onClick={this.copy} type="link" size="large">
          复制页面
        </Button>
        <Button onClick={this.showLink} type="link" size="large">
          预览
        </Button>
      </div>
    );
  }
}

export default OptionButtonGroup;
