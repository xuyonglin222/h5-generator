import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import moment from "moment";
import "moment/locale/zh-cn";
import { ConfigProvider } from "antd";
import zn_CN from "antd/lib/locale-provider/zh_CN";

import AsyncComponent from "components/AsyncComponent";
import * as stores from "stores";

// CSS
import "antd/dist/antd.css";
import "ui/ant-theme.css";
import "ui/standard.css";

// set momentJS locale
moment.locale("zh-cn");

const App = AsyncComponent(() => import("pages/app"));
ReactDOM.render(
  <Provider {...stores}>
    <ConfigProvider locale={zn_CN}>
      <App />
    </ConfigProvider>
  </Provider>,

  document.getElementById("root")
);
