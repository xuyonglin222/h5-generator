import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Drawer } from "antd";
import ContentFormGenerator from "components/ContentFormGenerator/index.js";
import ScriptFormGenerator from "components/ScriptFormGenerator/index.js";
import { Tabs } from "antd";
const { TabPane } = Tabs;
@inject("editor")
@observer
class ConfigDrawer extends Component {
  render() {
    const { editor } = this.props;
    const { configDrawerVisible } = editor || {};
    const DRAWER_WIDTH = 350;
    return (
      <div style={{ width: DRAWER_WIDTH + "px" }}>
        <Drawer
          // title="物料配置"
          placement="right"
          visible={configDrawerVisible}
          closable={false}
          mask={false}
          maskClosable={false}
          getContainer={false}
          width={DRAWER_WIDTH}
          style={{ position: "absolute", width: DRAWER_WIDTH + "px" }}
          drawerStyle={{ width: DRAWER_WIDTH + "px" }}
        >
          <Tabs defaultActiveKey="content">
            <TabPane tab="物料配置" key="content">
              <ContentFormGenerator />
            </TabPane>
            <TabPane tab="点击脚本" key="script">
              <ScriptFormGenerator />
            </TabPane>
          </Tabs>
        </Drawer>
      </div>
    );
  }
}

export default ConfigDrawer;
