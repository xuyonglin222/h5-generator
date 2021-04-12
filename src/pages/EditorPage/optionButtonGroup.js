import React, { Component } from "react";
import "./style.less";
import qs from "querystring";
import { observer, inject } from "mobx-react";
// import { toJS } from "mobx";
import { message } from "antd";
@inject("editor")
@observer
class ComponentSet extends Component {
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
      <div className="option-bottom">
        <h2 style={{ padding: 10 }}>页面操作:</h2>
        <div className="option-button-group">
          <div onClick={this.submit} className="button">
            保存页面
          </div>
          <div onClick={this.copy} className="button">
            复制页面
          </div>
          <div onClick={this.showLink} className="button">
            查看链接
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentSet;
