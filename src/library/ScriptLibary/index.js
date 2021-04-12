export default [
  //常规脚本
  {
    type: "usualScript",

    schema: [
      {
        type: "select",
        id: "openPage",
        label: "允许跳转",
        config: [
          { value: 1, label: "是" },
          { value: 0, label: "否" }
        ]
      },
      { type: "input", id: "jumpUrl", label: "跳转url" },
      { type: "number", id: "openPageTimeout", label: "跳转延时(ms)" },
      {
        type: "select",
        id: "toast",
        label: "弹出toast",
        config: [
          { value: 1, label: "是" },
          { value: 0, label: "否" }
        ]
      },
      { type: "input", id: "toastText", label: "toast文案" }
    ],

    data: {
      openPage: 0,
      jumpUrl: "https://maimai.cn/usual_page?webpid=XQddraYC",
      openPageTimeout: 0,
      toast: 0,
      toastText: "成功"
    }
  }
];
