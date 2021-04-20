import React, { Component } from "react";
import ReactDOM from "react-dom";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { Layout, Menu, Dropdown, Icon, BackTop } from "antd";
import _ from "lodash";
import $ from "jquery";
// import J from "utils/standard";
// import { history } from "stores";
import "./style.css";

const SubMenu = Menu.SubMenu;

// side menu
const side_menu_data = [
  {
    category: "通用页配置",
    icon: "form",
    children: [
      { name: "新建/编辑页面", url: "/app/editorpage" },
      {
        name: "列表",
        url: "/app/page-list"
      }
    ]
  }
];

@observer
class SideMenu extends Component {
  componentDidMount() {
    // meStore.setStore(this.activeLevel1AndLevel2TabsAccordingToURL());
    // this.highlightButtonOnURLChange();
  }

  // Listen to URL change, and re-render again to highlight the
  // corresponding button to URL path
  // highlightButtonOnURLChange = () => {
  //   history.onURLChange(() => {
  //     meStore.setStore(this.activeLevel1AndLevel2TabsAccordingToURL());
  //   });
  // };

  // Calculate which level1 and level2 tabs should be highlighted, according
  // to first path in URL
  // activeLevel1AndLevel2TabsAccordingToURL = () => {
  //   // - Get first path in URL (Ex: site.com/a/b/c, path1 will be /a)
  //   const path1 = history.getFirstPathInUrl();
  //   // - If url is /, highlight first tab
  //   if (path1 === "/") {
  //     return {
  //       active_level1_tabs: [side_menu_data[0].category],
  //       active_level2_tabs: [side_menu_data[0].children[0].url]
  //     };
  //   }
  //   // - Otherwise, highlight the tab that has 2nd-level equals to first path in URL
  //   else {
  //     for (const level1 of side_menu_data) {
  //       for (const level2 of level1.children) {
  //         // if url matches a tab's url, OR matches tab's highlight_other_urls,
  //         // highlight that tab
  //         if (
  //           level2.url === path1 ||
  //           _.includes(level2.highlight_other_urls, path1)
  //         ) {
  //           return {
  //             active_level1_tabs: [level1.category],
  //             active_level2_tabs: [level2.url]
  //           };
  //         }
  //       }
  //     }
  //   }
  //   // - If URL doesn't match any menu, highlight nothing
  //   return {
  //     active_level1_tabs: [],
  //     active_level2_tabs: []
  //   };
  // };

  // Open current menu only (clicking on one menu causes other menus to be
  // // collapsed)
  // openCurrentMenuOnly = active_level1_tabs => {
  //   const latest_open_tab = active_level1_tabs.find(
  //     key => meStore.active_level1_tabs.indexOf(key) === -1
  //   );
  //   if (
  //     side_menu_data.map(level1 => level1.category).indexOf(latest_open_tab) ===
  //     -1
  //   ) {
  //     meStore.setStore({ active_level1_tabs });
  //   } else {
  //     meStore.setStore({
  //       active_level1_tabs: latest_open_tab ? [latest_open_tab] : []
  //     });
  //   }
  // };

  // // On select level2 tab
  // onSelectLevel2Tab = ({ key }) => {
  //   meStore.setStore({ active_level2_tabs: [key] });
  // };

  render() {
    const { history } = this.props;
    console.log(this.props);
    return (
      <Menu
        theme="dark"
        // mode="horizontal"
        mode="horizontal"
        // openKeys={toJS(meStore.active_level1_tabs)}
        // selectedKeys={toJS(meStore.active_level2_tabs)}
        // onOpenChange={this.openCurrentMenuOnly}
        // onSelect={this.onSelectLevel2Tab}
      >
        {_.map(side_menu_data, ({ category, icon, children }) => (
          <SubMenu
            key={category}
            title={
              <span>
                <Icon type={icon} />
                <span>{category}</span>
              </span>
            }
          >
            {_.map(children, ({ name, url }) => (
              <Menu.Item key={url} onClick={() => history.push(url)}>
                {name}
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    );
  }
}

// dropdown menu on right-side of topdown
const TopbarAccountMenu = ({ onClickLogout }) => (
  <Menu>
    <Menu.Item key="0" disabled>
      <Icon type="user" />
      个人中心
    </Menu.Item>
    <Menu.Item key="1" disabled>
      <Icon type="setting" />
      设置
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" onClick={onClickLogout}>
      <Icon type="logout" />
      退出登录
    </Menu.Item>
  </Menu>
);

@observer
class Dashboard extends Component {
  $p = () => $(ReactDOM.findDOMNode(this));

  state = {
    collapsed: false
  };

  toggle = () => {
    // meStore.setStore({ active_level1_tabs: [] });
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  // automatically collapse menu on screen smaller than ipad pro
  collapseMenuOnSmallScreen = () => {
    this.setState({
      collapsed: $(window).width() <= 1024
    });
  };

  componentDidMount() {
    $(window).on("resize", this.collapseMenuOnSmallScreen);
    this.collapseMenuOnSmallScreen();
  }

  componentWillUnmount() {
    $(window).off("resize", this.collapseMenuOnSmallScreen);
  }

  render() {
    const { children } = this.props;
    const { Header, Sider, Content, Footer } = Layout;
    // const { isLoggedIn, name, avatar, logout } = meStore;
    let isLoggedIn = false,
      name = "test",
      avatar = "";
    return (
      <>
        <Layout className="dashboard">
          <Sider
            width={256}
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo">
              <img src="/img/logo.svg" alt="logo" />
              <span className="text">脉芽</span>
            </div>
            <SideMenu collapsed={this.state.collapsed} />
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                id="collapse-menu"
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
              <div className="header-right">
                {isLoggedIn ? (
                  <Dropdown
                  // overlay={TopbarAccountMenu({
                  //   onClickLogout: () => logout(),
                  // })}
                  >
                    <div className="account">
                      <div
                        className="pic center-contained"
                        // style={J.bgUrl(
                        //   avatar ||
                        //     "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                        // )}
                      />
                      <span className="text">{name}</span>
                      <Icon type="down" />
                    </div>
                  </Dropdown>
                ) : (
                  <span
                    className="account"
                    // onClick={() => history.pushAndComeBackOnComplete("/login")}
                  >
                    <span className="click-to-login">点此登陆</span>
                  </span>
                )}
              </div>
            </Header>
            <Content>{children}</Content>
          </Layout>
        </Layout>
        {/* <SysNoti /> */}
        <BackTop />
      </>
    );
  }
}

export default Dashboard;
