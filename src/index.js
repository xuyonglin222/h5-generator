import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Redirect } from "react-router";
import $ from "jquery";
import { historyDriver } from "stores/history";
import init from "utils/init";
import { Provider } from "mobx-react";

// plugins
import moment from "moment";
import "moment/locale/zh-cn";
import { ConfigProvider } from "antd";
import zn_CN from "antd/lib/locale-provider/zh_CN";
// data stores
import * as stores from "stores";

import App from "pages/app";
import Dashboard from "components/dashboard";
import AsyncComponent from "components/AsyncComponent";
// CSS
import "antd/dist/antd.css"; // Use Ant Design
import "ui/ant-theme.css"; // Customize Ant Design theme
import "ui/standard.css"; // Global CSS affecting all elements

// set momentJS locale
moment.locale("zh-cn");

const { goToLoginPage, loginViaSSO, ensureLoggedIn } = stores.meStore;

const routeMap = [
  {
    path: "/app/editorpage",
    component: AsyncComponent(() => import("pages/EditorPage"))
  },
  {
    path: "/app/page-list",
    component: AsyncComponent(() => import("pages/PageList"))
  }
];
init(() => {
  // 2) Render react
  ReactDOM.render(
    <Provider {...stores}>
      <ConfigProvider locale={zn_CN}>
        <Router history={historyDriver}>
          {/* App is the toppest-level component, wrapping our entire app. */}
          <Route component={App}>
            {/* If not logged in, redirect to login page */}
            <Route path="/login" onEnter={goToLoginPage} />
            <Route path="/login-via-sso" onEnter={loginViaSSO} />
            <Route path="/login-wechat" onEnter={loginViaSSO} />
            <Redirect from="/" to="/app/page-list" />

            {/* If logged in, show following pages. Each of them is a child of Dashboard component. */}
            <Route path="/app" onEnter={ensureLoggedIn} component={Dashboard}>
              {/* <IndexRoute component={ListPage} /> */}

              {routeMap.map(({ path, component }) => (
                <Route key={path} path={path} component={component} />
              ))}
            </Route>
          </Route>
        </Router>
      </ConfigProvider>
    </Provider>,

    document.getElementById("root"),
    () => {
      $("#app-loading-screen").animatedHide("fadeOut", 600);
    }
  );
});
