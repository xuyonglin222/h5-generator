import _ from "lodash";
import { message } from "antd";
import { post } from "services";
import { auto } from "utils/mobx";
import { history } from "stores";
import init from "utils/init";
import J from "utils/standard";

@auto
class MeStore {
  // app configs (set on page initialization)
  app_config = {
    sso_sysid: "",
    work_wechat_corpid: "",
    work_wechat_agentid: ""
  };
  get sso_login_url() {
    return (
      "http://auth.in.taou.com/sso/login?sysid=" + this.app_config.sso_sysid
    );
  }
  get sso_logout_url() {
    return (
      "http://auth.in.taou.com/sso/logout?sysid=" + this.app_config.sso_sysid
    );
  }
  get work_wechat_login_url() {
    const current_url =
      window.location.protocol + "//" + window.location.hostname;
    return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.app_config.work_wechat_corpid}&redirect_uri=${current_url}&response_type=code&scope=snsapi_privateinfo&agentid=${this.app_config.work_wechat_agentid}&#wechat_redirect`;
  }

  // shared constants between server and client
  constants = {};

  // user data
  user_id = null;
  name = "";
  avatar = "";
  is_admin = false;

  active_level1_tabs = []; // highlighted 1st-level tab
  active_level2_tabs = []; // highlighted 2nd-level tab

  // am i currently logged in
  get isLoggedIn() {
    return !!this.user_id;
  }

  // am i inside work wechat
  inside_work_wechat = window.navigator.userAgent.indexOf("wxwork") >= 0;

  // fetch my user data + init data + global headers (to carry in all requests)
  fetch = async () => {
    const {
      user_doc,
      app_config = {},
      constants = {},
      global_headers,
      error
    } = await post("/init-data", {});
    if (error) message.error(error);
    // also, expose it to window object, because ueditor needs it...
    window.AXIOS_HEADERS = global_headers;
    // app config
    this.app_config = app_config;
    this.constants = constants;
    // user data
    if (user_doc) {
      this.user_id = user_doc.user_id;
      this.name = user_doc.user_name;
      this.avatar = user_doc.user_avatar;
    } else {
      console.log("not logged in");
    }
  };

  // Go to an URL that detects the currently user inside Work Wechat. This will
  // redirects to backs to our website with an extra param "code" in the URL,
  // which we use send to the back-end to fetch the identity of user.
  redirectToWorkWechatIdentityDetection = () => {
    window.location = this.work_wechat_login_url;
  };

  // Redirect to "scan-to-login" page
  redirectToQRCodeScan = () => {
    window.location = this.sso_login_url;
  };

  // Go to login page (different login strategy depending on client's platform)
  goToLoginPage = () => {
    // 1. If inside work wechat
    if (this.inside_work_wechat) {
      // If URL has code, perform login with that code.
      const code = (history.getCurrentLocation().query || {}).code;
      if (code) this.loginViaWorkWechatCode(code);
      // Otherwise, he needs to go through the automatic-login process.
      // So, go to the special URL that will redirect us back with a
      // "code" parameter in the URL.
      else this.redirectToWorkWechatIdentityDetection();
    }
    // 2. Otherwise, redirect to desktop's "scan-to-login" page
    else this.redirectToQRCodeScan();
  };

  // Perform login via code.
  loginViaWorkWechatCode = async code => {
    const { error } = await post("/login-via-work-wechat-code", { code });
    if (error) return message.error(error);
    this.onSuccessfulLogin();
  };

  // Perform login via SSO.
  loginViaSSO = async () => {
    const sso_token = (history.getCurrentLocation().query || {}).token;
    const { error } = await post("/login-sso", { sso_token });
    if (error) return message.error(error);
    this.onSuccessfulLogin();
  };

  // Upon successful login, re-initialize app again (to load some data that
  // are only available for logged-in user), and go to homepage.
  onSuccessfulLogin = async () => {
    await init();
    history.push("/");
  };

  // Logout.
  logout = async () => {
    await post("/logout");
    // If inside work wechat, logout is useless, so we simply refresh the page.
    if (this.inside_work_wechat) {
      window.location.reload();
    }
    // If in desktop, logout on SSO as well.
    else {
      window.location.href = this.sso_logout_url;
    }
  };

  // redirect user if he's not logged in (react-router middleware)
  ensureLoggedIn = (nextState, replace, callback) => {
    // If already logged in, proceed on open the intended page.
    if (this.isLoggedIn) return callback();
    // If not logged in, go to login page
    else this.goToLoginPage();
  };
}

export default new MeStore();
