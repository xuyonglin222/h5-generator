import AsyncComponent from "components/AsyncComponent";
import { px2vw } from "../../utils/pxToVw";

const addStyle = name => `style.${name}`;

export default [
  //图片组件
  {
    type: "Image",
    baseType: "img",
    component: AsyncComponent(() => import("./Image")),
    schema: [
      {
        type: "number",
        id: "width",
        label: "宽度",
        toVW: true
      },
      { type: "upload", id: "src", label: "上传图片" },
      { type: "input", id: "src", label: "图片url" },
      {
        type: "number",
        id: "paddingTop",
        label: "上间距",
        toVW: true
      },
      {
        type: "number",
        id: "paddingBottom",
        label: "下间距",
        toVW: true
      },
      {
        type: "number",
        id: "paddingLeft",
        label: "左间距",
        toVW: true
      },
      {
        type: "number",
        id: "paddingRight",
        label: "右间距",
        toVW: true
      },
      {
        type: "number",
        id: "borderRadius",
        label: "图片圆角",
        props: { min: 0 }
      },
      {
        type: "select",
        id: "position",
        label: "排列方式",
        showNeedChange: { a: "fixed", b: "absolute" },
        config: [
          { value: "fixed", label: "相对整个页面偏移" },
          { value: "relative", label: "相对原位偏移" },
          { value: "static", label: "纵向排布" }
        ]
      },
      {
        type: "number",
        id: "top",
        label: "相对顶端偏移",
        toVW: true,
        kill: "bottom"
      },
      {
        type: "number",
        id: "bottom",
        label: "相对底端偏移",
        toVW: true,
        kill: "top"
      },
      {
        type: "number",
        id: "left",
        label: "相对左端偏移",
        toVW: true,
        kill: "right"
      },
      {
        type: "number",
        id: "right",
        label: "相对右端偏移",
        toVW: true,
        kill: "left"
      },
      { type: "number", id: "zIndex", label: "图层z" }
    ],
    data: {
      src: "https://i9.taou.com/maimai/p/26842/3155_103_41zjrMAdVdkcqMXX",
      style: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRigth: 0,
        top: 0,
        left: 0,
        bottom: "",
        right: "",
        borderRadius: 0,
        width: 750,
        zIndex: 1,
        //默认属性
        position: "relative"
      }
    },
    showData: {
      src: "https://i9.taou.com/maimai/p/26842/3155_103_41zjrMAdVdkcqMXX",
      style: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRigth: 0,
        top: 0,
        left: 0,
        bottom: "",
        right: "",
        borderRadius: 0,
        width: 750 / 2,
        zIndex: 1,
        //默认属性
        position: "relative"
      }
    },
    outData: {
      src: "https://i9.taou.com/maimai/p/26842/3155_103_41zjrMAdVdkcqMXX",
      style: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRigth: 0,
        top: 0,
        left: 0,
        bottom: "",
        right: "",
        borderRadius: 0,
        width: px2vw(750),
        zIndex: 1,
        //默认属性
        position: "relative"
      }
    }
  },

  //视频组件
  {
    type: "Video",
    baseType: "complexComponent",
    component: AsyncComponent(() => import("./Video")),
    schema: [
      {
        type: "number",
        id: "width",
        label: "宽度",
        toVW: true
      },
      { type: "video_upload", id: "src", label: "上传视频" },
      { type: "input", id: "src", label: "视频url" },
      { type: "input", id: "poster", label: "封面(默认首帧)" },
      {
        type: "number",
        id: "borderRadius",
        label: "图片圆角",
        props: { min: 0 }
      },
      {
        type: "select",
        id: "position",
        label: "排列方式",
        showNeedChange: { a: "fixed", b: "absolute" },
        config: [
          { value: "fixed", label: "相对整个页面偏移" },
          { value: "relative", label: "相对原位偏移" },
          { value: "static", label: "纵向排布" }
        ]
      },
      {
        type: "number",
        id: "top",
        label: "相对顶端偏移",
        toVW: true,
        kill: "bottom"
      },
      {
        type: "number",
        id: "bottom",
        label: "相对底端偏移",
        toVW: true,
        kill: "top"
      },
      {
        type: "number",
        id: "left",
        label: "相对左端偏移",
        toVW: true,
        kill: "right"
      },
      {
        type: "number",
        id: "right",
        label: "相对右端偏移",
        toVW: true,
        kill: "left"
      },
      { type: "number", id: "zIndex", label: "图层z" }
    ],
    data: {
      poster: "",
      src: "http://i9.taou.com/maimai/v/27626/3616_103_51aQXyQRL48W8NZZ",
      style: {
        top: 0,
        left: 0,
        bottom: "",
        right: "",
        borderRadius: 0,
        width: 750,
        zIndex: 1,
        //默认属性
        position: "relative"
      }
    },
    showData: {
      poster: "",
      src: "http://i9.taou.com/maimai/v/27626/3616_103_51aQXyQRL48W8NZZ",
      style: {
        top: 0,
        left: 0,
        bottom: "",
        right: "",
        borderRadius: 0,
        width: 750 / 2,
        zIndex: 1,
        //默认属性
        position: "relative"
      }
    },
    outData: {
      poster: "",
      src: "http://i9.taou.com/maimai/v/27626/3616_103_51aQXyQRL48W8NZZ",
      style: {
        top: 0,
        left: 0,
        bottom: "",
        right: "",
        borderRadius: 0,
        width: px2vw(750),
        zIndex: 1,
        //默认属性
        position: "relative"
      }
    }
  },

  //表单组件
  {
    type: "AdsForm",
    baseType: "complexComponent",
    component: AsyncComponent(() => import("./AdsForm")),
    schema: [
      {
        type: "number",
        id: "width",
        label: "宽度",
        toVW: true
      },
      {
        type: "number",
        id: "paddingTop",
        label: "表单距顶部距离",
        toVW: true
      },
      { type: "upload", id: "moduleBgImg", label: "模块背景图片" },
      { type: "color", id: "formBgColor", label: "表单背景色" },
      { type: "color", id: "btnColor", label: "按钮颜色" },
      { type: "input", id: "btnTxt", label: "按钮文字" },
      { type: "input", id: "okBtnTxt", label: "确认后按钮文字" },
      { type: "color", id: "txtColor", label: "按钮文字颜色" },
      {
        type: "select",
        id: "isBottom",
        label: "是否吸底",
        config: [
          {
            value: 1,
            label: "是"
          },
          {
            value: 0,
            label: "否"
          }
        ]
      },
      { type: "input", id: "fixedBottom", label: "吸底底部距离" },

      {
        type: "select",
        id: "formItems",
        label: "表单项",
        props: { mode: "multiple" },
        config: [
          { label: "姓名", value: "realname" },
          { label: "电话", value: "emobile" },
          { label: "性别", value: "gender" },
          { label: "邮编", value: "postcode" },
          { label: "公司全称", value: "company" },
          { label: "公司规模", value: "company_size" },
          { label: "一级行业", value: "profession" },
          { label: "职位", value: "position" },
          { label: "省份", value: "province" },
          { label: "城市", value: "city" },
          { label: "公司营业额", value: "revenue" }
        ]
      },

      {
        type: "input",
        id: "modalName",
        label: "授权弹框名称"
      },
      {
        type: "upload",
        id: "modalLogo",
        label: "授权弹框logo"
      },
      {
        type: "input",
        id: "text1",
        label: "授权弹框文案1"
      },
      {
        type: "input",
        id: "text2",
        label: "授权弹框文案2"
      }
    ],
    data: {
      width: 370,
      moduleBgImg: "",
      formBgColor: "#fff",
      txtColor: "#fff",
      btnColor: "#1436E2",
      borderRadius: "10",
      fixedBottom: 8,
      okBtnTxt: "您已报名成功~",
      formItems: ["realname"],
      btnTxt: "提交",
      style: {},
      isBottom: 1,
      modalName: "脉脉",
      modalLogo:
        "https://i9.taou.com/maimai/p/27122/141_12_31gmvQgnIGHxnnlc-a160",
      text1: "获得您的个人信息（姓名，公司名称，邮箱以及手机）",
      text2: "允许工作人员致电沟通相关事项",
      paddingTop: 0
    },
    showData: {
      width: 370,
      moduleBgImg: "",
      fixedBottom: 8,
      formBgColor: "#fff",
      isBottom: 1,
      txtColor: "#fff",
      btnColor: "#1436E2",
      okBtnTxt: "您已报名成功~",
      borderRadius: "10",
      formItems: ["realname"],
      btnTxt: "提交",
      style: {},
      modalName: "脉脉",
      modalLogo:
        "https://i9.taou.com/maimai/p/27122/141_12_31gmvQgnIGHxnnlc-a160",
      text1: "获得您的个人信息（姓名，公司名称，邮箱以及手机）",
      text2: "允许工作人员致电沟通相关事项",
      paddingTop: 0
    },
    outData: {
      width: 370,
      fixedBottom: 8,
      moduleBgImg: "",
      formBgColor: "#fff",
      okBtnTxt: "您已报名成功~",
      isBottom: 1,
      txtColor: "#fff",
      btnColor: "#1436E2",
      borderRadius: "10",
      formItems: ["realname"],
      btnTxt: "提交",
      style: {},
      modalName: "脉脉",
      modalLogo:
        "https://i9.taou.com/maimai/p/27122/141_12_31gmvQgnIGHxnnlc-a160",
      text1: "获得您的个人信息（姓名，公司名称，邮箱以及手机）",
      text2: "允许工作人员致电沟通相关事项",
      paddingTop: 0
    }
  },
  {
    type: "Button",
    baseType: "div",
    component: AsyncComponent(() => import("./Button")),
    schema: [
      {
        type: "select",
        id: "position",
        label: "排列方式",
        showNeedChange: { a: "fixed", b: "absolute" },
        config: [
          { value: "fixed", label: "相对整个页面偏移" },
          { value: "relative", label: "相对原位偏移" },
          { value: "static", label: "纵向排布" }
        ]
      },
      { type: "number", id: "zIndex", label: "图层z" },
      {
        type: "number",
        id: "top",
        label: "相对顶端偏移",
        toVW: true,
        kill: "bottom"
      },
      {
        type: "number",
        id: "bottom",
        label: "相对底端偏移",
        toVW: true,
        kill: "top"
      },
      {
        type: "number",
        id: "left",
        label: "相对左端偏移",
        toVW: true,
        kill: "right"
      },
      {
        type: "number",
        id: "right",
        label: "相对右端偏移",
        toVW: true,
        kill: "left"
      },
      {
        type: "number",
        id: "width",
        label: "按钮宽度",
        toVW: true
      },
      {
        type: "number",
        id: "height",
        label: "按钮高度",
        props: { min: 0 },
        toVW: true
      },

      {
        type: "number",
        id: "borderRadius",
        label: "圆角",
        props: { min: 0 },
        toVW: true
      },
      {
        type: "input",
        id: "children",
        label: "按钮文字",
        props: {
          maxLength: 20
        }
      },
      {
        type: "number",
        id: "fontSize",
        label: "文字大小",
        props: { min: 0 },
        toVW: true
      },
      { type: "color", id: "backgroundColor", label: "背景颜色" },
      { type: "color", id: "color", label: "文字颜色" }
      // {
      //   type: "select",
      //   id: "onClick",
      //   label: "点击时的交互",
      //   config: [
      //     { value: "openPage", label: "跳转" }
      //     // { value: "modal", label: "弹框" }
      //   ]
      // }
      // {
      //   type: "input",
      //   id: "btnHref",
      //   label: "跳转链接",
      //   logic: { key: "action", value: "link" }
      // }
    ],
    data: {
      children: "按钮",
      //scriptid: { onClick: { id: 'openPage', params: ['https://maimai.cn/ads/pages_template?webpid=E8zC15cn'] } },
      // scriptid: { onClick: "" },
      style: {
        top: 0,
        left: 200,
        bottom: "",
        right: "",
        color: "#fff",
        backgroundColor: "#3e20d1",
        fontSize: 32,
        width: 350,
        height: 80,
        borderRadius: 32,
        zIndex: 1,
        //默认属性
        position: "relative",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    },
    showData: {
      children: "按钮",
      // scriptid: { onClick: "" },
      style: {
        top: 0,
        left: 200 / 2,
        bottom: "",
        right: "",
        color: "#fff",
        backgroundColor: "#3e20d1",
        fontSize: 32 / 2,
        width: 350 / 2,
        height: 80 / 2,
        borderRadius: 32 / 2,
        zIndex: 1,
        //默认属性
        position: "relative",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    },
    outData: {
      children: "按钮",
      // scriptid: { onClick: "" },
      style: {
        top: 0,
        left: px2vw(200),
        bottom: "",
        right: "",
        color: "#fff",
        backgroundColor: "#3e20d1",
        fontSize: px2vw(16),
        width: px2vw(350),
        height: px2vw(80),
        borderRadius: px2vw(32),
        zIndex: 1,
        //默认属性
        position: "relative",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }
  },
  {
    type: "Slider",
    baseType: "complexComponent",
    component: AsyncComponent(() => import("./Slider")),
    schema: [
      {
        type: "upload",
        id: "imgs",
        label: "轮播图片",
        props: { mode: "multiple" }
      },
      {
        type: "number",
        id: "paginationBottom",
        label: "滑块位置偏移",
        props: {
          placeholder: "该值大于0，滑块在内部，小于0，滑块在外部。"
        }
      },
      { type: "number", id: "paginationWidth", label: "滑块大小" },
      { type: "color", id: "paginationActiveColor", label: "滑块激活颜色" },
      { type: "number", id: "speed", label: "轮播速度" },
      {
        type: "select",
        id: "loop",
        label: "是否循环",
        config: [
          {
            value: 1,
            label: "是"
          },
          {
            value: 0,
            label: "否"
          }
        ]
      },
      {
        type: "select",
        id: "isAutoplay",
        label: "是否自动播放",
        config: [
          {
            value: 1,
            label: "是"
          },
          {
            value: 0,
            label: "否"
          }
        ]
      },
      { type: "number", id: "insidePadding", label: "内边距" },
      { type: "number", id: "outsidePadding", label: "外边距" },
      { type: "color", id: "backgroundColor", label: "轮播背景" },
      { type: "color", id: "moduleColor", label: "模块背景色" },
      {
        type: "upload",
        id: "backgroundImage",
        label: "模块背景图片"
      }
    ],
    data: {
      isAutoplay: 1,
      paginationLocal: "inner",
      moduleColor: "#fff",
      paginationWidth: 8,
      paginationBottom: 0,
      paginationActiveColor: "#000",
      insidePadding: 0,
      outsidePadding: 0,
      imgs: [
        "https://i9.taou.com/maimai/p/26842/2708_103_61XY4yyZIGujKjjd",
        "https://i9.taou.com/maimai/p/26842/3080_103_8CtDKq2uQYx2WT",
        "https://i9.taou.com/maimai/p/26842/3102_103_11jJwtSbZdj0v7Fp",
        "https://i9.taou.com/maimai/p/26842/3112_103_1CpDiqyuZYc2rT",
        "https://i9.taou.com/maimai/p/26842/3137_103_62fvhmMITxhZmyLb",
        "https://i9.taou.com/maimai/p/26842/3155_103_41zjrMAdVdkcqMXX",
        "https://i9.taou.com/maimai/p/26842/3177_103_51HffGu9v49ap5RB",
        "https://i9.taou.com/maimai/p/26842/3205_103_417JaOY7xi5wqrn9"
      ],
      loop: 1,
      speed: 1,
      style: {
        backgroundColor: "#fff",
        backgroundImage: ""
      }
    },
    showData: {
      isAutoplay: 1,
      paginationLocal: "inner",
      moduleColor: "#fff",
      paginationBottom: 0,
      paginationWidth: 8,
      paginationActiveColor: "#000",
      insidePadding: 0,
      loop: 1,
      speed: 1,
      imgs: [
        "https://i9.taou.com/maimai/p/26842/2708_103_61XY4yyZIGujKjjd",
        "https://i9.taou.com/maimai/p/26842/3080_103_8CtDKq2uQYx2WT",
        "https://i9.taou.com/maimai/p/26842/3102_103_11jJwtSbZdj0v7Fp",
        "https://i9.taou.com/maimai/p/26842/3112_103_1CpDiqyuZYc2rT",
        "https://i9.taou.com/maimai/p/26842/3137_103_62fvhmMITxhZmyLb",
        "https://i9.taou.com/maimai/p/26842/3155_103_41zjrMAdVdkcqMXX",
        "https://i9.taou.com/maimai/p/26842/3177_103_51HffGu9v49ap5RB",
        "https://i9.taou.com/maimai/p/26842/3205_103_417JaOY7xi5wqrn9"
      ],
      outsidePadding: 0,
      style: {
        backgroundColor: "#fff",
        backgroundImage: ""
      }
    },
    outData: {
      isAutoplay: 1,
      paginationLocal: "inner",
      moduleColor: "#fff",
      paginationBottom: 0,
      paginationWidth: 8,
      imgs: [
        "https://i9.taou.com/maimai/p/26842/2708_103_61XY4yyZIGujKjjd",
        "https://i9.taou.com/maimai/p/26842/3080_103_8CtDKq2uQYx2WT",
        "https://i9.taou.com/maimai/p/26842/3102_103_11jJwtSbZdj0v7Fp",
        "https://i9.taou.com/maimai/p/26842/3112_103_1CpDiqyuZYc2rT",
        "https://i9.taou.com/maimai/p/26842/3137_103_62fvhmMITxhZmyLb",
        "https://i9.taou.com/maimai/p/26842/3155_103_41zjrMAdVdkcqMXX",
        "https://i9.taou.com/maimai/p/26842/3177_103_51HffGu9v49ap5RB",
        "https://i9.taou.com/maimai/p/26842/3205_103_417JaOY7xi5wqrn9"
      ],
      paginationActiveColor: "#000",
      insidePadding: 0,
      loop: 1,
      speed: 1,
      outsidePadding: 0,
      style: {
        backgroundColor: "#fff",
        backgroundImage: ""
      }
    }
  }
  // //输入框组件
  // {
  //   type: "Input",
  //   baseType: "input",
  //   component: AsyncComponent(() => import("./Input")),
  //   schema: [
  //     {
  //       type: "select",
  //       id: "position",
  //       label: "排列方式",
  //       config: [
  //         { value: "fixed", label: "相对整个页面偏移" },
  //         { value: "relative", label: "相对原位偏移" },
  //         { value: "static", label: "纵向排布" }
  //       ]
  //     },
  //     { type: "number", id: "zIndex", label: "图层z" },
  //     { type: "number", id: "top", label: "相对顶端的偏移", toVW: true, kill:"bottom" },
  //     { type: "number", id: "bottom", label: "相对底端的偏移", toVW: true, kill:"top" },
  //     { type: "number", id: "left", label: "相对左端的偏移", toVW: true, kill:"right" },
  //     { type: "number", id: "right", label: "相对右端的偏移", toVW: true, kill:"left"},
  //     { type: "number", id: "width", label: "宽度", toVW: true }
  //   ],
  //   data: {
  //     style: {
  //       top: 0,
  //       left: 0,
  //       width: 350,
  //       zIndex: 1,
  //       //默认属性
  //       position: "relative"
  //     }
  //   },
  //   showData: {
  //     style: {
  //       top: 0,
  //       left: 0,
  //       width: 350 / 2,
  //       zIndex: 1,
  //       //默认属性
  //       position: "relative"
  //     }
  //   },
  //   outData: {
  //     style: {
  //       top: 0,
  //       left: 0,
  //       width: px2vw(350),
  //       zIndex: 1,
  //       //默认属性
  //       position: "relative"
  //     }
  //   }
  // }
];
