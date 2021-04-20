import React, { PureComponent } from "react";
import { Layout, Menu, Dropdown, Button, BackTop } from "antd";
import {
  Router,
  Route,
  browserHistory,
  withRouter,
  Redirect
} from "react-router";

import PageList from "../PageList";
import EditorPage from "../EditorPage";
import OptionButtonGroup from "./optionButtonGroup";

import "./index.less";

const { Header, Sider, Content, Footer } = Layout;

class App extends PureComponent {
  render() {
    console.log("prpps", window.location.href);
    return (
      <Layout className="dashboard">
        <BackTop />
        <Header style={{ background: "#fff", display: "flex" }}>
          {/* <Link to='/edit-page'>新增</Link> */}
          <div className="logo">
            <img
              style={{ width: 50 }}
              src="https://avatars.githubusercontent.com/u/23112531?v=4"
              alt=""
            />
            <h2>庚庚的小玩意儿</h2>
          </div>
          {window.location.href.includes("/app/page") && <OptionButtonGroup />}
        </Header>
        <Content>
          <Router history={browserHistory}>
            <Redirect from="/" to="/app/list" />
            <Route path="/app/list" component={PageList} />
            <Route path="/app/page" component={EditorPage} />
          </Router>
        </Content>
        <Footer style={{ textAlign: "center" }}>庚庚闹着玩</Footer>
      </Layout>
    );
  }
}

export default withRouter(App);
