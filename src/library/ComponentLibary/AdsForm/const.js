export const INIT_SELECT_VALUE = "请选择";

export const KEY_LABEL = {
  realname: "姓名",
  emobile: "电话",
  email: "邮箱",
  company: "公司全称",
  company_size: "公司规模",
  profession: "行业",
  position: "职位",
  province: "省份",
  city: "城市",
  postcode: "邮编",
  revenue: "公司年营收",
  gender: "性别"
};

export const FORM_TYPE = {
  realname: "input",
  emobile: "input",
  email: "input",
  company: "input",
  company_size: "select",
  profession: "select",
  position: "input",
  province: "select",
  city: "select",
  postcode: "input",
  gender: "select",
  revenue: "select"
};

export const GENDER = ["男", "女"];

export const PROFESSION = [
  {
    code: "02",
    sub: [
      {
        code: "0201",
        name: "银行业",
        company_title: "单位",
        level: 2,
        position_title: "职务"
      },
      { code: "0203", name: "保险业", level: 2 },
      { code: "0202", name: "证券公司", level: 2 },
      { code: "0213", name: "小额贷款", level: 2 },
      {
        superiors: [
          {
            code: "01",
            explanation: "互联网|IT|游戏|软件",
            name: "IT/互联网",
            level: 1
          }
        ],
        code: "0215",
        is_link: true,
        name: "互联网金融",
        level: 2
      },
      {
        sub: [{ code: "0216", name: "汽车金融", level: 3 }],
        code: "0214",
        name: "消费金融",
        level: 2
      },
      { code: "0210", name: "会计师事务所", level: 2 },
      { code: "0220", name: "资产管理公司", level: 2 },
      { code: "0218", name: "金融信息咨询/服务", level: 2 },
      {
        sub: [
          { code: "021901", name: "第三方财富管理", level: 3 },
          { code: "021902", name: "第三方支付", level: 3 }
        ],
        code: "0219",
        name: "第三方金融服务",
        level: 2
      },
      { code: "0208", name: "风投/创业投资", level: 2 },
      { code: "0205", name: "期货公司", level: 2 },
      { code: "0204", name: "基金公司", level: 2 },
      { code: "0206", name: "信托公司", level: 2 },
      { code: "0207", name: "担保公司", level: 2 },
      { code: "0212", name: "金融租赁/融资租赁", level: 2 },
      { code: "0209", name: "投行", level: 2 },
      {
        code: "0221",
        explanation: "中国人民银行|银保监会|证监会",
        name: "金融监管机构",
        level: 2
      },
      { code: "0211", name: "拍卖/典当", level: 2 }
    ],
    level: 1,
    explanation: "银行|证券|保险|基金|股权投资",
    name: "金融业"
  },
  {
    code: "01",
    sub: [
      {
        code: "0103",
        explanation: "相机类|笔记类|输入法|地图|日历等软件",
        name: "工具软件",
        level: 2
      },
      { code: "0108", name: "企业级软件", level: 2 },
      { code: "0126", name: "IT系统集成/软件实施", level: 2 },
      { code: "0107", name: "云计算/大数据/人工智能", level: 2 },
      { code: "0104", name: "电子商务", level: 2 },
      { code: "0135", name: "新零售", level: 2 },
      { code: "0215", name: "互联网金融", level: 2 },
      { code: "0105", name: "游戏开发/运营", level: 2 },
      {
        superiors: [
          { code: "110406", name: "消费电子行业", level: 2 },
          {
            code: "11",
            explanation: "运营商|设备商|电子半导体|光电",
            name: "通信/电子/半导体",
            level: 1
          }
        ],
        code: "0117",
        is_link: true,
        name: "智能硬件",
        level: 3
      },
      { code: "0101", name: "社交网络", level: 2 },
      { code: "0132", name: "社区/论坛", level: 2 },
      { code: "0115", name: "新闻资讯/网媒/新媒体", level: 2 },
      { code: "0128", name: "网络/新媒体营销", level: 2 },
      { code: "0118", name: "在线旅游/酒店", level: 2 },
      { code: "0110", name: "O2O", level: 2 },
      { code: "011003", name: "互联网出行", level: 2 },
      { code: "0114", name: "视频网站/短视频/直播", level: 2 },
      {
        superiors: [
          { code: "1103", name: "手机/通信终端制造", level: 2 },
          {
            code: "11",
            explanation: "运营商|设备商|电子半导体|光电",
            name: "通信/电子/半导体",
            level: 1
          }
        ],
        code: "110301",
        is_link: true,
        name: "手机研发/制造",
        level: 3
      },
      { code: "0133", name: "音乐网站/云音乐", level: 2 },
      { code: "0116", name: "搜索引擎/分类导航", level: 2 },
      {
        superiors: [
          {
            code: "14",
            explanation: "教育机构|培训机构|科研机构",
            name: "教育/培训/科研",
            level: 1
          }
        ],
        code: "1411",
        is_link: true,
        name: "在线教育",
        level: 2
      },
      { code: "030114", name: "房产门户/交易网站", level: 2 },
      { code: "0120", name: "招聘网站/在线招聘", level: 2 },
      { code: "0111", name: "知识付费/内容变现", level: 2 },
      { code: "130502", name: "互联网医疗平台", level: 2 },
      { code: "0124", name: "信息/网络安全", level: 2 },
      { code: "0127", name: "IT软件外包", level: 2 },
      { code: "0125", name: "电信运营增值服务", level: 2 }
    ],
    level: 1,
    explanation: "互联网|IT|游戏|软件",
    name: "IT/互联网"
  },
  {
    code: "03",
    sub: [
      { code: "030101", name: "大型房地产集团", level: 2 },
      { code: "030102", name: "房地产开发", level: 2 },
      { code: "030110", name: "房地产中介/销售代理", level: 2 },
      { code: "030112", name: "房地产营销策划公司", level: 2 },
      { code: "030104", name: "物业管理公司", level: 2 },
      { code: "030211", name: "大型建筑集团", level: 2 },
      { code: "030201", name: "房屋工程建筑施工", level: 2 },
      {
        sub: [
          { code: "03020201", name: "铁路/公路/桥梁隧道建设", level: 3 },
          { code: "03020202", name: "水利/内河港口建设", level: 3 },
          { code: "03020203", name: "海洋工程建筑", level: 3 },
          { code: "03020204", name: "工矿工程建筑", level: 3 },
          { code: "03020205", name: "架线/管道工程建筑", level: 3 }
        ],
        code: "030202",
        name: "土木工程建筑施工",
        level: 2
      },
      { code: "0303", name: "园林绿化/园林建设", level: 2 },
      { code: "030208", name: "装修装饰公司/个体", level: 2 },
      {
        code: "030207",
        explanation: "水电|消防|电梯|室内管道等设备的安装",
        name: "建筑安装",
        level: 2
      },
      {
        superiors: [
          { code: "0810", name: "家具/家居行业", level: 2 },
          {
            code: "08",
            explanation: "服装|数码家电|家居百货|奢侈品",
            name: "耐用消费品",
            level: 1
          }
        ],
        code: "0307",
        is_link: true,
        name: "家居行业/全屋定制",
        level: 3
      },
      { code: "0308", name: "建材批发/零售", level: 2 },
      {
        superiors: [
          {
            code: "09",
            explanation: "机械|重工|材料|设备",
            name: "制造业",
            level: 1
          }
        ],
        code: "030206",
        is_link: true,
        name: "建筑材料制造",
        level: 2
      },
      { code: "0304", name: "钢结构行业", level: 2 },
      { code: "0305", name: "工程监理公司", level: 2 },
      {
        superiors: [
          { code: "0404", name: "咨询行业", level: 2 },
          {
            code: "04",
            explanation: "面向企业提供服务|法律|咨询|人力资源",
            name: "商务服务业",
            level: 1
          }
        ],
        code: "040402",
        is_link: true,
        name: "工程项目管理/咨询",
        level: 3
      },
      { code: "030204", name: "建筑招投标/工程造价", level: 2 },
      { code: "030203", name: "建筑勘察设计", level: 2 },
      { code: "030205", name: "建筑设备制造/租赁", level: 2 },
      { code: "030111", name: "房地产咨询/评估", level: 2 },
      { code: "030106", name: "商业地产开发/运营", level: 2 },
      { code: "030108", name: "产业地产/产业园区", level: 2 },
      { code: "030209", name: "互联网装修", level: 2 },
      {
        superiors: [
          {
            code: "01",
            explanation: "互联网|IT|游戏|软件",
            name: "IT/互联网",
            level: 1
          }
        ],
        code: "030114",
        is_link: true,
        name: "房产门户/交易网站",
        level: 2
      }
    ],
    level: 1,
    explanation: "开发商|物业中介|建筑施工|装修",
    name: "房地产业/建筑业"
  },
  {
    code: "04",
    sub: [
      {
        sub: [
          {
            superiors: [
              {
                code: "04",
                explanation: "面向企业提供服务|法律|咨询|人力资源",
                name: "商务服务业",
                level: 1
              }
            ],
            code: "0401",
            is_link: true,
            name: "企业管理/战略咨询公司",
            level: 2
          },
          {
            superiors: [
              {
                code: "04",
                explanation: "面向企业提供服务|法律|咨询|人力资源",
                name: "商务服务业",
                level: 1
              }
            ],
            code: "0403",
            is_link: true,
            name: "财务咨询/服务",
            level: 2
          },
          {
            superiors: [
              {
                code: "04",
                explanation: "面向企业提供服务|法律|咨询|人力资源",
                name: "商务服务业",
                level: 1
              }
            ],
            code: "0402",
            is_link: true,
            name: "法律咨询/服务",
            level: 2
          },
          {
            superiors: [
              {
                code: "04",
                explanation: "面向企业提供服务|法律|咨询|人力资源",
                name: "商务服务业",
                level: 1
              }
            ],
            code: "0410",
            is_link: true,
            name: "人力资源咨询/服务",
            level: 2
          },
          { code: "040402", name: "工程项目管理/咨询", level: 3 },
          { code: "040403", name: "科研/技术咨询公司", level: 3 },
          { code: "040404", name: "IT咨询公司", level: 3 },
          {
            superiors: [
              {
                code: "04",
                explanation: "面向企业提供服务|法律|咨询|人力资源",
                name: "商务服务业",
                level: 1
              }
            ],
            code: "0426",
            is_link: true,
            name: "商务信息咨询/代理",
            level: 2
          }
        ],
        code: "0404",
        name: "咨询行业",
        level: 2
      },
      {
        sub: [
          {
            superiors: [
              {
                code: "02",
                explanation: "银行|证券|保险|基金|股权投资",
                name: "金融业",
                level: 1
              }
            ],
            code: "0210",
            is_link: true,
            name: "会计师事务所",
            level: 2
          },
          { code: "040301", name: "代理记账公司", level: 3 }
        ],
        code: "0403",
        name: "财务咨询/服务",
        level: 2
      },
      {
        sub: [{ code: "040201", name: "律师事务所", level: 3 }],
        code: "0402",
        name: "法律咨询/服务",
        level: 2
      },
      {
        sub: [
          {
            superiors: [
              {
                code: "04",
                explanation: "面向企业提供服务|法律|咨询|人力资源",
                name: "商务服务业",
                level: 1
              }
            ],
            code: "0415",
            is_link: true,
            name: "猎头行业",
            level: 2
          },
          {
            superiors: [
              {
                code: "04",
                explanation: "面向企业提供服务|法律|咨询|人力资源",
                name: "商务服务业",
                level: 1
              }
            ],
            code: "0427",
            is_link: true,
            name: "外包/劳务派遣公司",
            level: 2
          }
        ],
        code: "0410",
        name: "人力资源咨询/服务",
        level: 2
      },
      { code: "0401", name: "企业管理/战略咨询公司", level: 2 },
      { code: "0415", name: "猎头行业", level: 2 },
      { code: "0427", name: "外包/劳务派遣公司", level: 2 },
      { code: "0420", name: "安保服务", level: 2 },
      { code: "0426", name: "商务信息咨询/代理", level: 2 },
      {
        superiors: [
          {
            code: "03",
            explanation: "开发商|物业中介|建筑施工|装修",
            name: "房地产业/建筑业",
            level: 1
          }
        ],
        code: "030110",
        is_link: true,
        name: "房地产中介/销售代理",
        level: 2
      },
      {
        superiors: [
          {
            code: "14",
            explanation: "教育机构|培训机构|科研机构",
            name: "教育/培训/科研",
            level: 1
          }
        ],
        code: "1414",
        is_link: true,
        name: "留学/移民中介",
        level: 2
      },
      { code: "0407", name: "市场调研服务", level: 2 },
      { code: "0416", name: "营销策划服务公司", level: 2 },
      { code: "0428", name: "企业培训服务", level: 2 },
      { code: "0409", name: "知识产权服务", level: 2 },
      { code: "0411", name: "检测认证服务", level: 2 },
      { code: "0419", name: "评估服务", level: 2 },
      { code: "0412", name: "会议展览服务", level: 2 },
      { code: "0417", name: "办公设备/办公服务", level: 2 },
      { code: "0421", name: "征信/信用服务公司", level: 2 },
      {
        superiors: [
          {
            code: "05",
            explanation: "餐饮|旅游酒店|生活服务|居民服务",
            name: "生活服务业",
            level: 1
          }
        ],
        code: "0503",
        is_link: true,
        name: "旅游业",
        level: 2
      },
      {
        superiors: [
          {
            code: "06",
            explanation: "文化|媒体|广告|娱乐|体育",
            name: "文化/传媒/广告",
            level: 1
          }
        ],
        code: "0602",
        is_link: true,
        name: "广告业",
        level: 2
      },
      {
        superiors: [
          {
            code: "16",
            explanation: "客运货运|航空海运|快递物流|仓储",
            name: "交通/物流/仓储",
            level: 1
          }
        ],
        code: "1606",
        is_link: true,
        name: "物流公司/货运",
        level: 2
      },
      {
        sub: [
          {
            superiors: [
              {
                code: "10",
                explanation: "汽车制造|新能源车|后汽车市场",
                name: "汽车制造/维修/零配件",
                level: 1
              }
            ],
            code: "1009",
            is_link: true,
            name: "汽车租赁",
            level: 2
          }
        ],
        code: "0424",
        name: "租赁行业",
        level: 2
      },
      {
        superiors: [
          {
            code: "03",
            explanation: "开发商|物业中介|建筑施工|装修",
            name: "房地产业/建筑业",
            level: 1
          }
        ],
        code: "030104",
        is_link: true,
        name: "物业管理公司",
        level: 2
      },
      { code: "0418", name: "翻译服务", level: 2 }
    ],
    level: 1,
    explanation: "面向企业提供服务|法律|咨询|人力资源",
    name: "商务服务业"
  },
  {
    code: "05",
    sub: [
      {
        sub: [{ code: "050101", name: "即时配送/送餐", level: 3 }],
        code: "0501",
        name: "餐饮业",
        level: 2
      },
      { code: "0502", name: "酒店/住宿业", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "05",
                explanation: "餐饮|旅游酒店|生活服务|居民服务",
                name: "生活服务业",
                level: 1
              }
            ],
            code: "0502",
            is_link: true,
            name: "酒店/住宿业",
            level: 2
          }
        ],
        code: "0503",
        name: "旅游业",
        level: 2
      },
      { code: "0506", name: "美发/美容/美甲服务", level: 2 },
      { code: "0505", name: "娱乐/休闲/游乐服务", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "07",
                explanation: "食品|烟酒饮品|个护化妆|粮油生鲜",
                name: "快速消费品",
                level: 1
              }
            ],
            code: "0711",
            is_link: true,
            name: "营养保健品行业",
            level: 2
          }
        ],
        code: "0512",
        name: "按摩/保健/养生服务",
        level: 2
      },
      { code: "0511", name: "洗浴服务", level: 2 },
      { code: "0507", name: "运动健身服务", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "05",
                explanation: "餐饮|旅游酒店|生活服务|居民服务",
                name: "生活服务业",
                level: 1
              }
            ],
            code: "0509",
            is_link: true,
            name: "摄影服务",
            level: 2
          }
        ],
        code: "0508",
        name: "婚庆服务",
        level: 2
      },
      { code: "0509", name: "摄影服务", level: 2 },
      {
        superiors: [
          {
            code: "16",
            explanation: "客运货运|航空海运|快递物流|仓储",
            name: "交通/物流/仓储",
            level: 1
          }
        ],
        code: "1607",
        is_link: true,
        name: "快递/配送行业",
        level: 2
      },
      {
        superiors: [
          {
            code: "16",
            explanation: "客运货运|航空海运|快递物流|仓储",
            name: "交通/物流/仓储",
            level: 1
          }
        ],
        code: "1606",
        is_link: true,
        name: "物流公司/货运",
        level: 2
      },
      {
        superiors: [
          {
            code: "16",
            explanation: "客运货运|航空海运|快递物流|仓储",
            name: "交通/物流/仓储",
            level: 1
          }
        ],
        code: "1610",
        is_link: true,
        name: "出租车行业",
        level: 2
      },
      {
        superiors: [
          {
            code: "16",
            explanation: "客运货运|航空海运|快递物流|仓储",
            name: "交通/物流/仓储",
            level: 1
          }
        ],
        code: "1612",
        is_link: true,
        name: "互联网用车",
        level: 2
      },
      { code: "1418", name: "驾校/陪练行业", level: 2 },
      { code: "0525", name: "代驾服务", level: 2 },
      {
        superiors: [
          {
            code: "10",
            explanation: "汽车制造|新能源车|后汽车市场",
            name: "汽车制造/维修/零配件",
            level: 1
          }
        ],
        code: "1009",
        is_link: true,
        name: "汽车租赁",
        level: 2
      },
      {
        superiors: [
          {
            code: "03",
            explanation: "开发商|物业中介|建筑施工|装修",
            name: "房地产业/建筑业",
            level: 1
          }
        ],
        code: "030104",
        is_link: true,
        name: "物业管理公司",
        level: 2
      },
      { code: "0527", name: "保安/停车场服务", level: 2 },
      { code: "0504", name: "家政保洁服务", level: 2 },
      {
        superiors: [
          {
            code: "03",
            explanation: "开发商|物业中介|建筑施工|装修",
            name: "房地产业/建筑业",
            level: 1
          }
        ],
        code: "030208",
        is_link: true,
        name: "装修装饰公司/个体",
        level: 2
      },
      { code: "0528", name: "电梯/水电/物业维修", level: 2 },
      { code: "0520", name: "家电维修", level: 2 },
      {
        superiors: [
          { code: "1004", name: "汽车售后/维修/养护", level: 2 },
          {
            code: "10",
            explanation: "汽车制造|新能源车|后汽车市场",
            name: "汽车制造/维修/零配件",
            level: 1
          }
        ],
        code: "100402",
        is_link: true,
        name: "汽车修理厂",
        level: 3
      },
      { code: "0513", name: "洗衣/剪裁/皮革护理", level: 2 },
      {
        superiors: [
          {
            code: "08",
            explanation: "服装|数码家电|家居百货|奢侈品",
            name: "耐用消费品",
            level: 1
          }
        ],
        code: "0802",
        is_link: true,
        name: "服装服饰行业",
        level: 2
      },
      {
        superiors: [
          {
            code: "13",
            explanation: "医院|医药器械|医疗整形美容|体检",
            name: "医疗/医药",
            level: 1
          }
        ],
        code: "1313",
        is_link: true,
        name: "心理咨询行业",
        level: 2
      },
      {
        superiors: [
          { code: "0602", name: "广告业", level: 2 },
          {
            code: "06",
            explanation: "文化|媒体|广告|娱乐|体育",
            name: "文化/传媒/广告",
            level: 1
          }
        ],
        code: "0514",
        is_link: true,
        name: "图文快印/打印/复印服务",
        level: 3
      },
      { code: "0516", name: "搬家/搬运服务", level: 2 },
      { code: "0517", name: "亲子/托儿服务", level: 2 },
      { code: "0518", name: "宠物服务", level: 2 },
      { code: "0522", name: "其他维修", level: 2 },
      { code: "0523", name: "殡葬服务", level: 2 }
    ],
    level: 1,
    explanation: "餐饮|旅游酒店|生活服务|居民服务",
    name: "生活服务业"
  },
  {
    code: "06",
    sub: [
      {
        sub: [
          { code: "060201", name: "4A广告公司", level: 3 },
          { code: "060202", name: "广告创意/设计", level: 3 },
          { code: "060702", name: "楼宇/电梯/户外广告", level: 3 },
          { code: "060203", name: "广告装饰/物料制作", level: 3 },
          { code: "0514", name: "图文快印/打印/复印服务", level: 3 }
        ],
        code: "0602",
        name: "广告业",
        level: 2
      },
      { code: "0603", name: "公关公司", level: 2 },
      { code: "0601", name: "广播电视媒体", level: 2 },
      { code: "0612", name: "报纸/杂志媒体", level: 2 },
      {
        superiors: [
          {
            code: "01",
            explanation: "互联网|IT|游戏|软件",
            name: "IT/互联网",
            level: 1
          }
        ],
        code: "0115",
        is_link: true,
        name: "新闻资讯/网媒/新媒体",
        level: 2
      },
      { code: "0613", name: "自媒体/自由撰稿人", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "09",
                explanation: "机械|重工|材料|设备",
                name: "制造业",
                level: 1
              }
            ],
            code: "0919",
            is_link: true,
            name: "印刷包装行业",
            level: 2
          }
        ],
        code: "0606",
        name: "图书出版/发行",
        level: 2
      },
      {
        sub: [
          { code: "060701", name: "院线/电影放映", level: 3 },
          { code: "060703", name: "影视设备销售/租赁", level: 3 }
        ],
        code: "0607",
        name: "影视制作/发行",
        level: 2
      },
      {
        sub: [
          {
            superiors: [
              {
                code: "06",
                explanation: "文化|媒体|广告|娱乐|体育",
                name: "文化/传媒/广告",
                level: 1
              }
            ],
            code: "0615",
            is_link: true,
            name: "公共文化场馆",
            level: 2,
            explanation: "博物馆|图书馆|美术馆|剧院"
          },
          { code: "060901", name: "演艺设备销售/租赁", level: 3 }
        ],
        code: "0609",
        name: "演出/演艺/经纪行业",
        level: 2
      },
      { code: "0616", name: "音乐产业", level: 2 },
      {
        code: "0615",
        explanation: "博物馆|图书馆|美术馆|剧院",
        name: "公共文化场馆",
        level: 2
      },
      { code: "0614", name: "艺术品/美术品/画廊", level: 2 },
      { code: "0608", name: "文创产品/文化IP", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "05",
                explanation: "餐饮|旅游酒店|生活服务|居民服务",
                name: "生活服务业",
                level: 1
              }
            ],
            code: "0507",
            is_link: true,
            name: "运动健身服务",
            level: 2
          }
        ],
        code: "0610",
        name: "体育产业",
        level: 2
      },
      {
        superiors: [
          {
            code: "08",
            explanation: "服装|数码家电|家居百货|奢侈品",
            name: "耐用消费品",
            level: 1
          }
        ],
        code: "0815",
        is_link: true,
        name: "文教办公用品",
        level: 2
      },
      {
        superiors: [
          {
            code: "05",
            explanation: "餐饮|旅游酒店|生活服务|居民服务",
            name: "生活服务业",
            level: 1
          }
        ],
        code: "0505",
        is_link: true,
        name: "娱乐/休闲/游乐服务",
        level: 2
      },
      {
        superiors: [
          {
            code: "04",
            explanation: "面向企业提供服务|法律|咨询|人力资源",
            name: "商务服务业",
            level: 1
          }
        ],
        code: "0412",
        is_link: true,
        name: "会议展览服务",
        level: 2
      },
      {
        superiors: [
          {
            code: "05",
            explanation: "餐饮|旅游酒店|生活服务|居民服务",
            name: "生活服务业",
            level: 1
          }
        ],
        code: "0508",
        is_link: true,
        name: "婚庆服务",
        level: 2
      },
      {
        superiors: [
          {
            code: "05",
            explanation: "餐饮|旅游酒店|生活服务|居民服务",
            name: "生活服务业",
            level: 1
          }
        ],
        code: "0509",
        is_link: true,
        name: "摄影服务",
        level: 2
      },
      {
        superiors: [
          { code: "0602", name: "广告业", level: 2 },
          {
            code: "06",
            explanation: "文化|媒体|广告|娱乐|体育",
            name: "文化/传媒/广告",
            level: 1
          }
        ],
        code: "0514",
        is_link: true,
        name: "图文快印/打印/复印服务",
        level: 3
      },
      {
        superiors: [
          {
            code: "09",
            explanation: "机械|重工|材料|设备",
            name: "制造业",
            level: 1
          }
        ],
        code: "0919",
        is_link: true,
        name: "印刷包装行业",
        level: 2
      }
    ],
    level: 1,
    explanation: "文化|媒体|广告|娱乐|体育",
    name: "文化/传媒/广告"
  },
  {
    code: "07",
    sub: [
      {
        sub: [
          { code: "070101", name: "肥皂/清洁/洗涤剂", level: 3 },
          { code: "070102", name: "洗发护发", level: 3 },
          { code: "070103", name: "皮肤清洁/护肤品", level: 3 },
          { code: "070104", name: "化妆品行业", level: 3 },
          { code: "070105", name: "牙膏/口腔护理品", level: 3 },
          { code: "070106", name: "香水/香料/香精", level: 3 }
        ],
        code: "0701",
        name: "个护清洁/化妆品行业",
        level: 2
      },
      {
        sub: [
          {
            superiors: [
              {
                code: "07",
                explanation: "食品|烟酒饮品|个护化妆|粮油生鲜",
                name: "快速消费品",
                level: 1
              }
            ],
            code: "0710",
            is_link: true,
            name: "生鲜食品行业",
            level: 2,
            explanation: "水果|蔬菜|肉类|水产"
          },
          {
            superiors: [
              {
                code: "07",
                explanation: "食品|烟酒饮品|个护化妆|粮油生鲜",
                name: "快速消费品",
                level: 1
              }
            ],
            code: "0709",
            is_link: true,
            name: "方便食品/速食品行业",
            level: 2
          },
          {
            superiors: [
              {
                code: "07",
                explanation: "食品|烟酒饮品|个护化妆|粮油生鲜",
                name: "快速消费品",
                level: 1
              }
            ],
            code: "0718",
            is_link: true,
            name: "面包糕点烘焙",
            level: 2
          }
        ],
        code: "0702",
        name: "食品生产/加工行业",
        level: 2
      },
      { code: "0707", name: "乳制品行业", level: 2 },
      { code: "0704", name: "酒类行业", level: 2 },
      { code: "0703", name: "饮品/饮料行业", level: 2 },
      { code: "0709", name: "方便食品/速食品行业", level: 2 },
      { code: "0718", name: "面包糕点烘焙", level: 2 },
      {
        code: "0710",
        explanation: "水果|蔬菜|肉类|水产",
        name: "生鲜食品行业",
        level: 2
      },
      { code: "0712", name: "粮油行业", level: 2 },
      { code: "0708", name: "调味品行业", level: 2 },
      { code: "0711", name: "营养保健品行业", level: 2 },
      { code: "0705", name: "茶叶行业", level: 2 },
      { code: "0706", name: "烟草业", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "07",
                explanation: "食品|烟酒饮品|个护化妆|粮油生鲜",
                name: "快速消费品",
                level: 1
              }
            ],
            code: "0707",
            is_link: true,
            name: "乳制品行业",
            level: 2
          }
        ],
        code: "0715",
        name: "母婴用品",
        level: 2
      },
      { code: "0713", name: "制糖业", level: 2 },
      { code: "0714", name: "计生用品", level: 2 },
      {
        superiors: [
          { code: "1202", name: "零售业", level: 2 },
          {
            code: "12",
            explanation: "批发|零售商超|进出口|网店",
            name: "贸易/批发/零售",
            level: 1
          }
        ],
        code: "120202",
        is_link: true,
        name: "超市行业",
        level: 3
      },
      {
        superiors: [
          { code: "1201", name: "批发业", level: 2 },
          {
            code: "12",
            explanation: "批发|零售商超|进出口|网店",
            name: "贸易/批发/零售",
            level: 1
          }
        ],
        code: "120101",
        is_link: true,
        name: "食品饮料烟酒批发",
        level: 3
      },
      {
        superiors: [
          { code: "1202", name: "零售业", level: 2 },
          {
            code: "12",
            explanation: "批发|零售商超|进出口|网店",
            name: "贸易/批发/零售",
            level: 1
          }
        ],
        code: "120204",
        is_link: true,
        name: "食品饮料烟酒零售",
        level: 3
      },
      { code: "0716", name: "宠物食品/用品", level: 2 },
      {
        superiors: [
          {
            code: "09",
            explanation: "机械|重工|材料|设备",
            name: "制造业",
            level: 1
          }
        ],
        code: "0918",
        is_link: true,
        name: "造纸与纸制品业",
        level: 2
      }
    ],
    level: 1,
    explanation: "食品|烟酒饮品|个护化妆|粮油生鲜",
    name: "快速消费品"
  },
  {
    code: "08",
    sub: [
      {
        sub: [
          { code: "080201", name: "男装/女装行业", level: 3 },
          { code: "080202", name: "童装行业", level: 3 },
          { code: "080203", name: "内衣服饰行业", level: 3 },
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0820",
            is_link: true,
            name: "体育/运动服饰装备",
            level: 2
          },
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0803",
            is_link: true,
            name: "制鞋业",
            level: 2
          },
          {
            superiors: [
              { code: "1201", name: "批发业", level: 2 },
              {
                code: "12",
                explanation: "批发|零售商超|进出口|网店",
                name: "贸易/批发/零售",
                level: 1
              }
            ],
            code: "120104",
            is_link: true,
            name: "服装/箱包/鞋帽批发",
            level: 3
          },
          {
            superiors: [
              { code: "1202", name: "零售业", level: 2 },
              {
                code: "12",
                explanation: "批发|零售商超|进出口|网店",
                name: "贸易/批发/零售",
                level: 1
              }
            ],
            code: "120206",
            is_link: true,
            name: "服装/箱包/鞋帽零售",
            level: 3
          }
        ],
        code: "0802",
        name: "服装服饰行业",
        level: 2
      },
      { code: "0803", name: "制鞋业", level: 2 },
      { code: "0804", name: "皮具箱包行业", level: 2 },
      {
        sub: [
          { code: "080101", name: "冰箱/冷柜/酒柜", level: 3 },
          { code: "080102", name: "电视机行业", level: 3 },
          { code: "080103", name: "空调行业", level: 3 },
          { code: "080104", name: "新风/空气净化器", level: 3 },
          { code: "080105", name: "厨卫电器/厨房家电", level: 3 },
          { code: "080204", name: "灯具/照明电器", level: 3 },
          { code: "080108", name: "洗衣机行业", level: 3 }
        ],
        code: "0801",
        name: "家用电器行业",
        level: 2
      },
      {
        sub: [
          { code: "081001", name: "家具行业", level: 3 },
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0811",
            is_link: true,
            name: "家纺用品行业",
            level: 2
          },
          { code: "0307", name: "家居行业/全屋定制", level: 3 },
          {
            superiors: [
              { code: "0801", name: "家用电器行业", level: 2 },
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "080204",
            is_link: true,
            name: "灯具/照明电器",
            level: 3
          },
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0812",
            is_link: true,
            name: "智能家居",
            level: 2
          }
        ],
        code: "0810",
        name: "家具/家居行业",
        level: 2
      },
      { code: "0812", name: "智能家居", level: 2 },
      { code: "0811", name: "家纺用品行业", level: 2 },
      {
        sub: [
          {
            superiors: [
              { code: "0801", name: "家用电器行业", level: 2 },
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "080105",
            is_link: true,
            name: "厨卫电器/厨房家电",
            level: 3
          }
        ],
        code: "0813",
        name: "厨房炊具/卫浴洁具",
        level: 2
      },
      { code: "0814", name: "日用小商品", level: 2 },
      { code: "0817", name: "奢侈品/首饰/珠宝行业", level: 2 },
      {
        superiors: [
          { code: "1202", name: "零售业", level: 2 },
          {
            code: "12",
            explanation: "批发|零售商超|进出口|网店",
            name: "贸易/批发/零售",
            level: 1
          }
        ],
        code: "120201",
        is_link: true,
        name: "百货商场/卖场/购物中心",
        level: 3
      },
      { code: "0823", name: "工艺品/礼品行业", level: 2 },
      {
        superiors: [
          { code: "1103", name: "手机/通信终端制造", level: 2 },
          {
            code: "11",
            explanation: "运营商|设备商|电子半导体|光电",
            name: "通信/电子/半导体",
            level: 1
          }
        ],
        code: "110301",
        is_link: true,
        name: "手机研发/制造",
        level: 3
      },
      { code: "0808", name: "电脑/电脑配件生产制造", level: 2 },
      { code: "0806", name: "数码/影音产品", level: 2 },
      {
        superiors: [
          { code: "110406", name: "消费电子行业", level: 2 },
          {
            code: "11",
            explanation: "运营商|设备商|电子半导体|光电",
            name: "通信/电子/半导体",
            level: 1
          }
        ],
        code: "0117",
        is_link: true,
        name: "智能硬件",
        level: 3
      },
      { code: "0824", name: "钟表行业", level: 2 },
      { code: "0825", name: "眼镜行业", level: 2 },
      { code: "0818", name: "玩具行业", level: 2 },
      { code: "0815", name: "文教办公用品", level: 2 },
      { code: "0820", name: "体育/运动服饰装备", level: 2 },
      { code: "0816", name: "乐器制造", level: 2 }
    ],
    level: 1,
    explanation: "服装|数码家电|家居百货|奢侈品",
    name: "耐用消费品"
  },
  {
    code: "09",
    sub: [
      {
        sub: [
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0802",
            is_link: true,
            name: "服装服饰行业",
            level: 2
          },
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0811",
            is_link: true,
            name: "家纺用品行业",
            level: 2
          },
          { code: "090101", name: "棉、麻、毛、丝纺织", level: 3 },
          { code: "0903", name: "化纤行业", level: 3 }
        ],
        code: "0901",
        name: "纺织业",
        level: 2
      },
      { code: "0904", name: "橡胶和塑料制品业", level: 2 },
      {
        sub: [
          { code: "090501", name: "化工原材料制造", level: 3 },
          { code: "090502", name: "化肥制造", level: 3 },
          { code: "090503", name: "农药制造", level: 3 },
          { code: "090504", name: "涂料、油墨、颜料制造", level: 3 },
          { code: "090505", name: "合成材料制造", level: 3 },
          { code: "090506", name: "专用化学产品制造", level: 3 },
          { code: "090507", name: "炸药/火工/焰火制造", level: 3 },
          { code: "090508", name: "日用化学产品制造", level: 3 },
          { code: "090509", name: "其他化学原料制品", level: 3 }
        ],
        code: "0905",
        name: "化工原料/材料/制品",
        level: 2
      },
      {
        sub: [
          { code: "090601", name: "钢铁行业", level: 3 },
          { code: "090602", name: "有色金属/合金行业", level: 3 },
          { code: "090603", name: "金属铸造", level: 3 },
          { code: "090604", name: "金属压延加工", level: 3 },
          { code: "090606", name: "贵金属冶炼", level: 3 },
          { code: "090607", name: "其他冶金行业", level: 3 }
        ],
        code: "0906",
        name: "冶金行业",
        level: 2
      },
      { code: "0907", name: "金属/五金制品业", level: 2 },
      {
        sub: [
          { code: "091401", name: "锅炉/发动机/发电机制造", level: 3 },
          { code: "091402", name: "金属加工机械制造", level: 3 },
          { code: "091403", name: "起重/搬运/电梯设备制造", level: 3 },
          { code: "091404", name: "泵/阀门/压缩机机械制造", level: 3 },
          { code: "091405", name: "轴承/齿轮/传动部件制造", level: 3 },
          { code: "091406", name: "烘炉/风机/衡器/包装设备制造", level: 3 },
          { code: "091407", name: "文化、办公用机械制造", level: 3 },
          { code: "091408", name: "通用零部件制造", level: 3 },
          { code: "091409", name: "其他通用设备制造业", level: 3 }
        ],
        code: "0914",
        name: "通用机械设备制造",
        level: 2
      },
      {
        sub: [
          {
            code: "091501",
            name: "采矿、冶金、建筑专用设备制造",
            level: 3
          },
          {
            code: "091502",
            name: "化工、木材、非金属加工专用设备制造",
            level: 3
          },
          {
            code: "091503",
            name: "食品、饮料、烟草及饲料生产专用设备制造",
            level: 3
          },
          {
            code: "091504",
            name: "印刷、制药 、日化及日用品生产专用设备制造",
            level: 3
          },
          {
            code: "091505",
            name: "纺织、服装和皮革加工专用设备制造",
            level: 3
          },
          { code: "091506", name: "电子和电工机械专用设备制造", level: 3 },
          { code: "091507", name: "农、林、牧、渔专用机械制造", level: 3 },
          { code: "091508", name: "医疗仪器设备及器械制造", level: 3 },
          {
            code: "091509",
            name: "环保、社会公共服务及其他专用设备制造",
            level: 3
          }
        ],
        code: "0915",
        name: "专用机械设备制造",
        level: 2
      },
      { code: "0916", name: "机械修理/维修/金属修理", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0810",
            is_link: true,
            name: "家具/家居行业",
            level: 2
          }
        ],
        code: "0920",
        name: "木材加工/木、竹、草制品",
        level: 2
      },
      {
        sub: [
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0803",
            is_link: true,
            name: "制鞋业",
            level: 2
          }
        ],
        code: "0921",
        name: "皮、革、羽毛制造",
        level: 2
      },
      {
        sub: [
          {
            superiors: [
              {
                code: "09",
                explanation: "机械|重工|材料|设备",
                name: "制造业",
                level: 1
              }
            ],
            code: "0927",
            is_link: true,
            name: "水泥制造/混凝土生产",
            level: 2
          },
          {
            superiors: [
              {
                code: "09",
                explanation: "机械|重工|材料|设备",
                name: "制造业",
                level: 1
              }
            ],
            code: "0909",
            is_link: true,
            name: "玻璃制造",
            level: 2
          },
          {
            superiors: [
              {
                code: "09",
                explanation: "机械|重工|材料|设备",
                name: "制造业",
                level: 1
              }
            ],
            code: "0910",
            is_link: true,
            name: "陶瓷制造",
            level: 2
          }
        ],
        code: "030206",
        name: "建筑材料制造",
        level: 2
      },
      { code: "0927", name: "水泥制造/混凝土生产", level: 2 },
      { code: "0909", name: "玻璃制造", level: 2 },
      { code: "0910", name: "陶瓷制造", level: 2 },
      { code: "150503", name: "电力电气设备制造", level: 2 },
      { code: "0913", name: "仪器仪表制造", level: 2 },
      { code: "0928", name: "工业自动化", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "10",
                explanation: "汽车制造|新能源车|后汽车市场",
                name: "汽车制造/维修/零配件",
                level: 1
              }
            ],
            code: "1001",
            is_link: true,
            name: "汽车生产制造",
            level: 2
          },
          {
            superiors: [
              {
                code: "10",
                explanation: "汽车制造|新能源车|后汽车市场",
                name: "汽车制造/维修/零配件",
                level: 1
              }
            ],
            code: "1002",
            is_link: true,
            name: "汽车零配件",
            level: 2
          },
          { code: "091703", name: "铁路设备制造", level: 3 },
          { code: "091704", name: "造船业", level: 3 },
          { code: "091705", name: "航空航天制造", level: 3 },
          { code: "091706", name: "摩托车制造", level: 3 },
          { code: "091707", name: "自行车/电动自行车制造", level: 3 },
          { code: "091708", name: "其他交通设备制造", level: 3 }
        ],
        code: "0917",
        name: "交通设备制造",
        level: 2
      },
      {
        sub: [
          { code: "091101", name: "计算机制造", level: 3 },
          { code: "091102", name: "通信设备制造", level: 3 },
          { code: "091103", name: "广播电视设备制造", level: 3 },
          { code: "091104", name: "视听影音设备制造", level: 3 },
          {
            superiors: [
              {
                code: "11",
                explanation: "运营商|设备商|电子半导体|光电",
                name: "通信/电子/半导体",
                level: 1
              }
            ],
            code: "1104",
            is_link: true,
            name: "电子/半导体行业",
            level: 2
          },
          { code: "091106", name: "其他TMT制造", level: 3 }
        ],
        code: "0911",
        name: "计算机/电子/通信设备制造",
        level: 2
      },
      { code: "0918", name: "造纸与纸制品业", level: 2 },
      { code: "0919", name: "印刷包装行业", level: 2 },
      { code: "0902", name: "石油化工行业", level: 2 },
      {
        superiors: [
          { code: "1302", name: "医药行业", level: 2 },
          {
            code: "13",
            explanation: "医院|医药器械|医疗整形美容|体检",
            name: "医疗/医药",
            level: 1
          }
        ],
        code: "130201",
        is_link: true,
        name: "医药制造业",
        level: 3
      },
      { code: "0922", name: "废弃资源利用", level: 2 },
      {
        superiors: [],
        code: "07",
        is_link: true,
        name: "快速消费品",
        level: 1,
        explanation: "食品|烟酒饮品|个护化妆|粮油生鲜"
      },
      {
        superiors: [],
        code: "08",
        is_link: true,
        name: "耐用消费品",
        level: 1,
        explanation: "服装|数码家电|家居百货|奢侈品"
      }
    ],
    level: 1,
    explanation: "机械|重工|材料|设备",
    name: "制造业"
  },
  {
    code: "10",
    sub: [
      {
        sub: [
          {
            superiors: [
              {
                code: "10",
                explanation: "汽车制造|新能源车|后汽车市场",
                name: "汽车制造/维修/零配件",
                level: 1
              }
            ],
            code: "1002",
            is_link: true,
            name: "汽车零配件",
            level: 2
          },
          {
            superiors: [
              {
                code: "10",
                explanation: "汽车制造|新能源车|后汽车市场",
                name: "汽车制造/维修/零配件",
                level: 1
              }
            ],
            code: "1013",
            is_link: true,
            name: "互联网造车",
            level: 2
          }
        ],
        code: "1001",
        name: "汽车生产制造",
        level: 2
      },
      { code: "1002", name: "汽车零配件", level: 2 },
      {
        sub: [
          { code: "100301", name: "汽车批发/外贸", level: 3 },
          { code: "100303", name: "汽车经销商", level: 3 },
          { code: "100304", name: "4S店", level: 3 }
        ],
        code: "1003",
        name: "汽车销售/批发/外贸",
        level: 2
      },
      {
        sub: [
          {
            superiors: [
              { code: "1003", name: "汽车销售/批发/外贸", level: 2 },
              {
                code: "10",
                explanation: "汽车制造|新能源车|后汽车市场",
                name: "汽车制造/维修/零配件",
                level: 1
              }
            ],
            code: "100304",
            is_link: true,
            name: "4S店",
            level: 3
          },
          { code: "100402", name: "汽车修理厂", level: 3 },
          { code: "100403", name: "汽车美容店/快修店/服务店", level: 3 }
        ],
        code: "1004",
        name: "汽车售后/维修/养护",
        level: 2
      },
      { code: "1011", name: "汽车用品制造", level: 2 },
      { code: "1005", name: "二手车交易", level: 2 },
      { code: "1009", name: "汽车租赁", level: 2 },
      { code: "1013", name: "互联网造车", level: 2 },
      {
        superiors: [
          { code: "0214", name: "消费金融", level: 2 },
          {
            code: "02",
            explanation: "银行|证券|保险|基金|股权投资",
            name: "金融业",
            level: 1
          }
        ],
        code: "0216",
        is_link: true,
        name: "汽车金融",
        level: 3
      },
      { code: "1008", name: "汽车保险", level: 2 },
      { code: "1006", name: "汽车IT/车联网/自动驾驶", level: 2 },
      { code: "1010", name: "汽车文化产业/车友会", level: 2 }
    ],
    level: 1,
    explanation: "汽车制造|新能源车|后汽车市场",
    name: "汽车制造/维修/零配件"
  },
  {
    code: "11",
    sub: [
      {
        sub: [{ code: "110101", name: "宽带运营商", level: 3 }],
        code: "1101",
        name: "电信运营商",
        level: 2
      },
      { code: "1102", name: "通信/网络设备商", level: 2 },
      {
        sub: [
          { code: "110301", name: "手机研发/制造", level: 3 },
          { code: "110302", name: "电话/对讲机", level: 3 },
          { code: "110303", name: "卫星电话", level: 3 },
          { code: "110304", name: "其他通信终端", level: 3 }
        ],
        code: "1103",
        name: "手机/通信终端制造",
        level: 2
      },
      { code: "1105", name: "通信系统集成商", level: 2 },
      { code: "1107", name: "通信设计院", level: 2 },
      { code: "1106", name: "通信软件研发", level: 2 },
      { code: "1109", name: "通信工程设计/施工", level: 2 },
      { code: "1108", name: "通信基础设施建设", level: 2 },
      {
        sub: [
          { code: "110401", name: "电子元器件生产", level: 3 },
          { code: "110402", name: "半导体材料制造", level: 3 },
          { code: "110403", name: "集成电路/芯片", level: 3 },
          { code: "110404", name: "电子组装/制造/代工", level: 3 },
          { code: "110407", name: "其他电子/半导体", level: 3 }
        ],
        code: "1104",
        name: "电子/半导体行业",
        level: 2
      },
      {
        sub: [
          { code: "111301", name: "光纤/光通信行业", level: 3 },
          { code: "111302", name: "液晶/光电显示行业", level: 3 },
          { code: "111303", name: "LED/OLED行业", level: 3 },
          { code: "111304", name: "光学行业", level: 3 },
          {
            superiors: [
              { code: "1507", name: "新能源产业/新能源发电", level: 2 },
              {
                code: "15",
                explanation: "煤炭石油|电力电气|采矿|环保",
                name: "能源/矿产/电力",
                level: 1
              }
            ],
            code: "150701",
            is_link: true,
            name: "光伏/太阳能产业",
            level: 3
          },
          { code: "111305", name: "光存储行业", level: 3 },
          { code: "111306", name: "激光/红外行业", level: 3 }
        ],
        code: "1113",
        name: "光电子行业",
        level: 2
      },
      {
        sub: [
          {
            superiors: [
              { code: "1103", name: "手机/通信终端制造", level: 2 },
              {
                code: "11",
                explanation: "运营商|设备商|电子半导体|光电",
                name: "通信/电子/半导体",
                level: 1
              }
            ],
            code: "110301",
            is_link: true,
            name: "手机研发/制造",
            level: 3
          },
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0801",
            is_link: true,
            name: "家用电器行业",
            level: 2
          },
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0806",
            is_link: true,
            name: "数码/影音产品",
            level: 2
          },
          { code: "0117", name: "智能硬件", level: 3 },
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0808",
            is_link: true,
            name: "电脑/电脑配件生产制造",
            level: 2
          },
          {
            superiors: [
              {
                code: "08",
                explanation: "服装|数码家电|家居百货|奢侈品",
                name: "耐用消费品",
                level: 1
              }
            ],
            code: "0812",
            is_link: true,
            name: "智能家居",
            level: 2
          }
        ],
        code: "110406",
        name: "消费电子行业",
        level: 2
      },
      { code: "1116", name: "精密元器件/模具", level: 2 },
      { code: "1117", name: "广电网络/设备", level: 2 },
      { code: "1110", name: "5G技术", level: 2 }
    ],
    level: 1,
    explanation: "运营商|设备商|电子半导体|光电",
    name: "通信/电子/半导体"
  },
  {
    code: "12",
    sub: [
      {
        sub: [
          { code: "120104", name: "服装/箱包/鞋帽批发", level: 3 },
          { code: "120101", name: "食品饮料烟酒批发", level: 3 },
          { code: "120103", name: "生鲜/水果/农副/粮油批发", level: 3 },
          { code: "120122", name: "种子/化肥/农药/饲料批发", level: 3 },
          { code: "120102", name: "日用百货/小商品批发", level: 3 },
          { code: "120107", name: "个护化妆/日化用品批发", level: 3 },
          { code: "120115", name: "家具/家居/家纺/照明灯饰批发", level: 3 },
          { code: "120218", name: "厨具/厨卫电器/卫浴洁具批发", level: 3 },
          { code: "120114", name: "五金/建材批发", level: 3 },
          { code: "120105", name: "家电/数码/手机批发", level: 3 },
          { code: "120108", name: "电工/电气/电子元器件批发", level: 3 },
          { code: "120121", name: "医疗器械/医药批发", level: 3 },
          { code: "120110", name: "文体办公用品批发", level: 3 },
          { code: "120111", name: "工艺礼品批发", level: 3 },
          { code: "120219", name: "奢侈品/珠宝/首饰批发", level: 3 },
          { code: "120116", name: "矿产/化工/工业原料批发", level: 3 },
          { code: "120118", name: "机械设备批发", level: 3 },
          { code: "120119", name: "汽车/零配件批发", level: 3 },
          { code: "120220", name: "自行车/电动自行车批发", level: 3 },
          { code: "120117", name: "母婴用品/童装批发", level: 3 },
          { code: "120112", name: "音像图书批发", level: 3 },
          { code: "120221", name: "玩具批发", level: 3 },
          { code: "120222", name: "茶叶批发", level: 3 },
          { code: "120223", name: "眼镜批发", level: 3 },
          { code: "120120", name: "其他批发业", level: 3 }
        ],
        code: "1201",
        name: "批发业",
        level: 2
      },
      {
        sub: [
          { code: "120201", name: "百货商场/卖场/购物中心", level: 3 },
          { code: "120202", name: "超市行业", level: 3 },
          { code: "120203", name: "便利店/小商店", level: 3 },
          {
            superiors: [
              {
                code: "01",
                explanation: "互联网|IT|游戏|软件",
                name: "IT/互联网",
                level: 1
              }
            ],
            code: "0135",
            is_link: true,
            name: "新零售",
            level: 2
          },
          { code: "120206", name: "服装/箱包/鞋帽零售", level: 3 },
          { code: "120224", name: "奢侈品/珠宝/首饰零售", level: 3 },
          { code: "120204", name: "食品饮料烟酒零售", level: 3 },
          { code: "120230", name: "生鲜/水果/农副零售", level: 3 },
          { code: "120213", name: "个护化妆/日化用品零售", level: 3 },
          { code: "120207", name: "家电/数码/手机零售", level: 3 },
          {
            code: "120211",
            name: "五金建材/家具/家居/照明灯饰零售",
            level: 3
          },
          { code: "120205", name: "日用百货/小商品零售", level: 3 },
          { code: "120225", name: "厨具/厨卫电器/卫浴洁具零售", level: 3 },
          { code: "120208", name: "文体办公用品零售", level: 3 },
          { code: "120226", name: "自行车/电动自行车零售", level: 3 },
          { code: "120210", name: "汽车/零配件零售", level: 3 },
          {
            superiors: [
              { code: "1302", name: "医药行业", level: 2 },
              {
                code: "13",
                explanation: "医院|医药器械|医疗整形美容|体检",
                name: "医疗/医药",
                level: 1
              }
            ],
            code: "130203",
            is_link: true,
            name: "医药零售/药店",
            level: 3
          },
          { code: "120214", name: "母婴用品/童装零售", level: 3 },
          { code: "120216", name: "工艺礼品零售", level: 3 },
          { code: "120215", name: "音像图书零售", level: 3 },
          { code: "120227", name: "茶叶零售", level: 3 },
          { code: "120228", name: "眼镜零售", level: 3 },
          { code: "120229", name: "玩具零售", level: 3 },
          { code: "120217", name: "其他零售业", level: 3 }
        ],
        code: "1202",
        name: "零售业",
        level: 2
      },
      { code: "1203", name: "进出口贸易", level: 2 },
      { code: "1204", name: "贸易代理公司", level: 2 },
      {
        superiors: [
          {
            code: "01",
            explanation: "互联网|IT|游戏|软件",
            name: "IT/互联网",
            level: 1
          }
        ],
        code: "0104",
        is_link: true,
        name: "电子商务",
        level: 2
      },
      { code: "1209", name: "淘宝店/微商", level: 2 },
      { code: "1210", name: "个体批发零售", level: 2 },
      {
        superiors: [
          {
            code: "09",
            explanation: "机械|重工|材料|设备",
            name: "制造业",
            level: 1
          }
        ],
        code: "0919",
        is_link: true,
        name: "印刷包装行业",
        level: 2
      }
    ],
    level: 1,
    explanation: "批发|零售商超|进出口|网店",
    name: "贸易/批发/零售"
  },
  {
    code: "13",
    sub: [
      {
        sub: [
          { code: "13010101", name: "综合医院", level: 3 },
          { code: "13010104", name: "专科医院", level: 3 },
          { code: "13010102", name: "中医医院", level: 3 },
          { code: "13010103", name: "中西医结合医院", level: 3 },
          { code: "13010105", name: "民营医院", level: 3 }
        ],
        code: "130101",
        name: "医院",
        level: 2
      },
      { code: "130102", name: "社区医疗/卫生院", level: 2 },
      { code: "130103", name: "诊所/门诊部", level: 2 },
      {
        sub: [
          {
            sub: [
              { code: "13020101", name: "化学药品制造", level: 4 },
              { code: "13020102", name: "中成药制造", level: 4 },
              { code: "13020103", name: "兽用药品制造", level: 4 },
              {
                superiors: [
                  { code: "1302", name: "医药行业", level: 2 },
                  {
                    code: "13",
                    explanation: "医院|医药器械|医疗整形美容|体检",
                    name: "医疗/医药",
                    level: 1
                  }
                ],
                code: "130205",
                is_link: true,
                name: "生物工程制药",
                level: 3
              },
              { code: "13020107", name: "药用辅料/包装材料制造", level: 4 }
            ],
            code: "130201",
            name: "医药制造业",
            level: 3
          },
          { code: "130202", name: "医药批发/贸易", level: 3 },
          { code: "130203", name: "医药零售/药店", level: 3 },
          { code: "130205", name: "生物工程制药", level: 3 }
        ],
        code: "1302",
        name: "医药行业",
        level: 2
      },
      {
        sub: [
          { code: "130301", name: "医疗器械制造", level: 3 },
          { code: "130302", name: "医疗器械批发/零售", level: 3 }
        ],
        code: "1303",
        name: "医疗器械",
        level: 2
      },
      { code: "1308", name: "医疗美容/整形", level: 2 },
      { code: "1306", name: "健康体检", level: 2 },
      { code: "130104", name: "妇幼保健院", level: 2 },
      { code: "130106", name: "疾病预防控制中心", level: 2 },
      { code: "1312", name: "第三方医学检验", level: 2 },
      { code: "1313", name: "心理咨询行业", level: 2 },
      { code: "1307", name: "医疗医药科研/基因工程", level: 2 },
      { code: "1305", name: "医疗信息化/互联网医疗", level: 2 },
      { code: "1311", name: "康复中心/疗养院", level: 2 }
    ],
    level: 1,
    explanation: "医院|医药器械|医疗整形美容|体检",
    name: "医疗/医药"
  },
  {
    code: "14",
    sub: [
      { code: "140101", name: "幼儿园/早教机构", level: 2 },
      { code: "140102", name: "小学", level: 2 },
      { code: "140103", name: "初中", level: 2 },
      { code: "140104", name: "高中", level: 2 },
      { code: "140201", name: "大学/公办高校", level: 2 },
      { code: "140202", name: "民办高校", level: 2 },
      { code: "1403", name: "职业学校/中专/技校", level: 2 },
      { code: "1405", name: "成人学历教育机构", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "14",
                explanation: "教育机构|培训机构|科研机构",
                name: "教育/培训/科研",
                level: 1
              }
            ],
            code: "1411",
            is_link: true,
            name: "在线教育",
            level: 2
          }
        ],
        code: "1406",
        name: "k12教育培训/辅导",
        level: 2
      },
      { code: "1411", name: "在线教育", level: 2 },
      { code: "140803", name: "技能/资格认证培训", level: 2 },
      { code: "140807", name: "外语培训机构", level: 2 },
      { code: "1420", name: "艺术/体育培训机构", level: 2 },
      { code: "1414", name: "留学/移民中介", level: 2 },
      { code: "1415", name: "国际学校", level: 2 },
      { code: "140806", name: "MBA/商学院/管理培训", level: 2 },
      {
        code: "1409",
        name: "科研机构",
        company_title: "单位",
        level: 2,
        position_title: "职务"
      },
      { code: "1410", name: "科研成果转化", level: 2 },
      { code: "1416", name: "特殊教育学校/机构", level: 2 },
      { code: "1417", name: "兴趣辅导机构", level: 2 },
      { code: "1407", name: "教材/教辅资料", level: 2 },
      {
        superiors: [
          {
            code: "05",
            explanation: "餐饮|旅游酒店|生活服务|居民服务",
            name: "生活服务业",
            level: 1
          }
        ],
        code: "1418",
        is_link: true,
        name: "驾校/陪练行业",
        level: 2
      }
    ],
    level: 1,
    explanation: "教育机构|培训机构|科研机构",
    name: "教育/培训/科研"
  },
  {
    code: "15",
    sub: [
      {
        sub: [
          {
            superiors: [
              { code: "150501", name: "发电厂/电力生产", level: 3 },
              { code: "1505", name: "电力/电气行业", level: 2 },
              {
                code: "15",
                explanation: "煤炭石油|电力电气|采矿|环保",
                name: "能源/矿产/电力",
                level: 1
              }
            ],
            code: "15050101",
            is_link: true,
            name: "煤电/火力发电",
            level: 4
          }
        ],
        code: "1501",
        name: "煤炭行业",
        level: 2
      },
      { code: "1502", name: "石油行业", level: 2 },
      { code: "1503", name: "天然气/燃气行业", level: 2 },
      {
        sub: [
          {
            sub: [
              { code: "15050101", name: "煤电/火力发电", level: 4 },
              { code: "15050102", name: "水力发电", level: 4 },
              {
                superiors: [
                  {
                    code: "15",
                    explanation: "煤炭石油|电力电气|采矿|环保",
                    name: "能源/矿产/电力",
                    level: 1
                  }
                ],
                code: "1504",
                is_link: true,
                name: "核电/核能产业",
                level: 2
              },
              {
                superiors: [
                  { code: "1507", name: "新能源产业/新能源发电", level: 2 },
                  {
                    code: "15",
                    explanation: "煤炭石油|电力电气|采矿|环保",
                    name: "能源/矿产/电力",
                    level: 1
                  }
                ],
                code: "150702",
                is_link: true,
                name: "风力发电/风能产业",
                level: 3
              },
              {
                superiors: [
                  { code: "1507", name: "新能源产业/新能源发电", level: 2 },
                  {
                    code: "15",
                    explanation: "煤炭石油|电力电气|采矿|环保",
                    name: "能源/矿产/电力",
                    level: 1
                  }
                ],
                code: "150701",
                is_link: true,
                name: "光伏/太阳能产业",
                level: 3
              }
            ],
            code: "150501",
            name: "发电厂/电力生产",
            level: 3
          },
          { code: "150502", name: "电网/输配电", level: 3 },
          {
            superiors: [
              {
                code: "09",
                explanation: "机械|重工|材料|设备",
                name: "制造业",
                level: 1
              }
            ],
            code: "150503",
            is_link: true,
            name: "电力电气设备制造",
            level: 2
          },
          { code: "150504", name: "电力建设/电气安装", level: 3 },
          { code: "150505", name: "电力研究/设计", level: 3 }
        ],
        code: "1505",
        name: "电力/电气行业",
        level: 2
      },
      { code: "1504", name: "核电/核能产业", level: 2 },
      {
        sub: [
          { code: "150701", name: "光伏/太阳能产业", level: 3 },
          { code: "150702", name: "风力发电/风能产业", level: 3 },
          { code: "150703", name: "地热能行业", level: 3 },
          { code: "150704", name: "生物能源行业", level: 3 }
        ],
        code: "1507",
        name: "新能源产业/新能源发电",
        level: 2
      },
      { code: "1506", name: "电池行业", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "15",
                explanation: "煤炭石油|电力电气|采矿|环保",
                name: "能源/矿产/电力",
                level: 1
              }
            ],
            code: "1501",
            is_link: true,
            name: "煤炭行业",
            level: 2
          },
          { code: "150801", name: "铁矿/黑色金属矿产", level: 3 },
          { code: "150802", name: "有色金属矿产", level: 3 },
          { code: "150803", name: "石材/非金属矿产", level: 3 }
        ],
        code: "1508",
        name: "采矿业",
        level: 2
      },
      {
        sub: [
          {
            superiors: [
              { code: "150501", name: "发电厂/电力生产", level: 3 },
              { code: "1505", name: "电力/电气行业", level: 2 },
              {
                code: "15",
                explanation: "煤炭石油|电力电气|采矿|环保",
                name: "能源/矿产/电力",
                level: 1
              }
            ],
            code: "15050102",
            is_link: true,
            name: "水力发电",
            level: 4
          },
          { code: "150901", name: "水利建设", level: 3 }
        ],
        code: "1509",
        name: "水利行业",
        level: 2
      },
      { code: "1510", name: "热力行业", level: 2 },
      { code: "1512", name: "供水/水务行业", level: 2 },
      { code: "1514", name: "环保治理/环境监测", level: 2 },
      {
        superiors: [
          {
            code: "09",
            explanation: "机械|重工|材料|设备",
            name: "制造业",
            level: 1
          }
        ],
        code: "0906",
        is_link: true,
        name: "冶金行业",
        level: 2
      }
    ],
    level: 1,
    explanation: "煤炭石油|电力电气|采矿|环保",
    name: "能源/矿产/电力"
  },
  {
    code: "16",
    sub: [
      { code: "1601", name: "铁路运输业", level: 2 },
      { code: "1603", name: "航空运输业", level: 2 },
      { code: "1604", name: "水路航运业", level: 2 },
      { code: "1605", name: "管道运输业", level: 2 },
      { code: "1618", name: "货运代理/报关", level: 2 },
      {
        sub: [
          { code: "1602", name: "公路货物运输", level: 3 },
          {
            superiors: [
              {
                code: "16",
                explanation: "客运货运|航空海运|快递物流|仓储",
                name: "交通/物流/仓储",
                level: 1
              }
            ],
            code: "1620",
            is_link: true,
            name: "仓储服务/仓储管理",
            level: 2
          },
          {
            superiors: [
              {
                code: "16",
                explanation: "客运货运|航空海运|快递物流|仓储",
                name: "交通/物流/仓储",
                level: 1
              }
            ],
            code: "1617",
            is_link: true,
            name: "装卸搬运/吊装",
            level: 2
          }
        ],
        code: "1606",
        name: "物流公司/货运",
        level: 2
      },
      { code: "1623", name: "供应链管理", level: 2 },
      { code: "1607", name: "快递/配送行业", level: 2 },
      { code: "1611", name: "公交/客运公司", level: 2 },
      { code: "1609", name: "地铁/轻轨", level: 2 },
      { code: "1610", name: "出租车行业", level: 2 },
      { code: "1612", name: "互联网用车", level: 2 },
      {
        sub: [
          {
            superiors: [
              {
                code: "16",
                explanation: "客运货运|航空海运|快递物流|仓储",
                name: "交通/物流/仓储",
                level: 1
              }
            ],
            code: "1617",
            is_link: true,
            name: "装卸搬运/吊装",
            level: 2
          }
        ],
        code: "1620",
        name: "仓储服务/仓储管理",
        level: 2
      },
      { code: "1617", name: "装卸搬运/吊装", level: 2 },
      { code: "1608", name: "高速公路运营管理", level: 2 },
      {
        superiors: [
          {
            code: "09",
            explanation: "机械|重工|材料|设备",
            name: "制造业",
            level: 1
          }
        ],
        code: "0917",
        is_link: true,
        name: "交通设备制造",
        level: 2
      },
      { code: "1614", name: "交通设施", level: 2 },
      { code: "1615", name: "交通规划设计", level: 2 },
      { code: "1619", name: "客票代理", level: 2 },
      { code: "1621", name: "邮政业", level: 2 }
    ],
    level: 1,
    explanation: "客运货运|航空海运|快递物流|仓储",
    name: "交通/物流/仓储"
  },
  {
    code: "17",
    sub: [
      {
        sub: [
          { code: "170101", name: "谷物/粮食种植", level: 3 },
          { code: "170102", name: "豆类/油料/薯类种植", level: 3 },
          { code: "170104", name: "蔬菜/菌类种植", level: 3 },
          { code: "170404", name: "花卉/园艺种植", level: 3 },
          { code: "170105", name: "水果种植", level: 3 },
          { code: "170106", name: "坚果/含油果/香料/茶种植", level: 3 },
          { code: "170103", name: "棉/麻/糖料/烟草种植", level: 3 },
          { code: "170107", name: "中药材种植", level: 3 },
          { code: "170405", name: "种子行业", level: 3 },
          {
            superiors: [
              {
                code: "17",
                explanation: "农业|林业|畜牧业|渔业",
                name: "农林牧渔",
                level: 1
              }
            ],
            code: "1713",
            is_link: true,
            name: "农业/农机合作社",
            level: 2
          },
          {
            superiors: [
              {
                code: "17",
                explanation: "农业|林业|畜牧业|渔业",
                name: "农林牧渔",
                level: 1
              }
            ],
            code: "1709",
            is_link: true,
            name: "农业生产服务/技术服务",
            level: 2
          }
        ],
        code: "1701",
        name: "农业",
        level: 2
      },
      {
        sub: [
          { code: "170201", name: "林木育种育苗", level: 3 },
          { code: "170203", name: "森林经营管护/造林", level: 3 },
          {
            superiors: [
              {
                code: "03",
                explanation: "开发商|物业中介|建筑施工|装修",
                name: "房地产业/建筑业",
                level: 1
              }
            ],
            code: "0303",
            is_link: true,
            name: "园林绿化/园林建设",
            level: 2
          },
          { code: "170204", name: "木材/竹材/林产品采运", level: 3 },
          {
            superiors: [
              {
                code: "09",
                explanation: "机械|重工|材料|设备",
                name: "制造业",
                level: 1
              }
            ],
            code: "0920",
            is_link: true,
            name: "木材加工/木、竹、草制品",
            level: 2
          },
          { code: "170407", name: "林业局", level: 3 },
          { code: "170408", name: "国有林场", level: 3 },
          {
            superiors: [
              {
                code: "17",
                explanation: "农业|林业|畜牧业|渔业",
                name: "农林牧渔",
                level: 1
              }
            ],
            code: "1714",
            is_link: true,
            name: "林业/苗木合作社",
            level: 2
          }
        ],
        code: "1702",
        name: "林业/苗木",
        level: 2
      },
      {
        sub: [
          { code: "170301", name: "牲畜饲养", level: 3 },
          { code: "170302", name: "家禽饲养", level: 3 },
          { code: "170406", name: "养蜂业", level: 3 },
          {
            superiors: [
              {
                code: "17",
                explanation: "农业|林业|畜牧业|渔业",
                name: "农林牧渔",
                level: 1
              }
            ],
            code: "1715",
            is_link: true,
            name: "养殖/畜牧合作社",
            level: 2
          },
          {
            superiors: [
              {
                code: "17",
                explanation: "农业|林业|畜牧业|渔业",
                name: "农林牧渔",
                level: 1
              }
            ],
            code: "1708",
            is_link: true,
            name: "饲料生产加工",
            level: 2
          }
        ],
        code: "1703",
        name: "畜牧业",
        level: 2
      },
      {
        sub: [
          { code: "170401", name: "水产养殖", level: 3 },
          { code: "170402", name: "水产捕捞", level: 3 },
          {
            superiors: [
              {
                code: "17",
                explanation: "农业|林业|畜牧业|渔业",
                name: "农林牧渔",
                level: 1
              }
            ],
            code: "1716",
            is_link: true,
            name: "渔业/水产合作社",
            level: 2
          },
          {
            superiors: [
              {
                code: "17",
                explanation: "农业|林业|畜牧业|渔业",
                name: "农林牧渔",
                level: 1
              }
            ],
            code: "1717",
            is_link: true,
            name: "渔具钓具行业",
            level: 2
          }
        ],
        code: "1704",
        name: "渔业/水产",
        level: 2
      },
      {
        superiors: [
          {
            code: "03",
            explanation: "开发商|物业中介|建筑施工|装修",
            name: "房地产业/建筑业",
            level: 1
          }
        ],
        code: "0303",
        is_link: true,
        name: "园林绿化/园林建设",
        level: 2
      },
      { code: "1708", name: "饲料生产加工", level: 2 },
      {
        superiors: [
          { code: "0905", name: "化工原料/材料/制品", level: 2 },
          {
            code: "09",
            explanation: "机械|重工|材料|设备",
            name: "制造业",
            level: 1
          }
        ],
        code: "090502",
        is_link: true,
        name: "化肥制造",
        level: 3
      },
      {
        superiors: [
          { code: "0905", name: "化工原料/材料/制品", level: 2 },
          {
            code: "09",
            explanation: "机械|重工|材料|设备",
            name: "制造业",
            level: 1
          }
        ],
        code: "090503",
        is_link: true,
        name: "农药制造",
        level: 3
      },
      {
        superiors: [
          {
            code: "07",
            explanation: "食品|烟酒饮品|个护化妆|粮油生鲜",
            name: "快速消费品",
            level: 1
          }
        ],
        code: "0712",
        is_link: true,
        name: "粮油行业",
        level: 2
      },
      { code: "1706", name: "生鲜行业", level: 2 },
      {
        superiors: [
          {
            code: "07",
            explanation: "食品|烟酒饮品|个护化妆|粮油生鲜",
            name: "快速消费品",
            level: 1
          }
        ],
        code: "0707",
        is_link: true,
        name: "乳制品行业",
        level: 2
      },
      {
        superiors: [
          {
            code: "07",
            explanation: "食品|烟酒饮品|个护化妆|粮油生鲜",
            name: "快速消费品",
            level: 1
          }
        ],
        code: "0713",
        is_link: true,
        name: "制糖业",
        level: 2
      },
      { code: "1713", name: "农业/农机合作社", level: 2 },
      { code: "1714", name: "林业/苗木合作社", level: 2 },
      { code: "1715", name: "养殖/畜牧合作社", level: 2 },
      { code: "1716", name: "渔业/水产合作社", level: 2 },
      {
        superiors: [
          {
            code: "09",
            explanation: "机械|重工|材料|设备",
            name: "制造业",
            level: 1
          }
        ],
        code: "0920",
        is_link: true,
        name: "木材加工/木、竹、草制品",
        level: 2
      },
      { code: "1717", name: "渔具钓具行业", level: 2 },
      { code: "1709", name: "农业生产服务/技术服务", level: 2 },
      { code: "1711", name: "畜禽技术服务", level: 2 },
      { code: "1718", name: "水产/渔业技术服务", level: 2 },
      { code: "1719", name: "农民工", level: 2 }
    ],
    level: 1,
    explanation: "农业|林业|畜牧业|渔业",
    name: "农林牧渔"
  },
  {
    code: "18",
    name: "政府/机构/组织",
    level: 1,
    explanation: "政府机关|社会团体|非营利组织",
    company_title: "单位",
    position_title: "职务",
    type: 2,
    sub: [
      { code: "1801", type: 2, name: "中国共产党机关", level: 2 },
      { code: "1802", type: 2, name: "国务院/地方各级政府", level: 2 },
      { code: "1803", type: 2, name: "各部委及下属厅、局", level: 2 },
      { code: "1810", type: 2, name: "公安机关/派出所", level: 2 },
      { code: "1804", type: 2, name: "法院/检察院", level: 2 },
      { code: "180706", type: 2, name: "居委会/村委会", level: 3 },
      { code: "1811", type: 2, name: "街道办事处", level: 2 },
      { code: "1805", type: 2, name: "人民政协/民主党派", level: 2 },
      {
        code: "1807",
        sub: [
          { code: "180701", type: 2, name: "共青团", level: 3 },
          { code: "180702", type: 2, name: "工会", level: 3 },
          { code: "180704", type: 2, name: "基金会/公益组织", level: 3 },
          { code: "180707", type: 2, name: "非营利机构", level: 3 },
          { code: "180708", type: 2, name: "宗教组织", level: 3 }
        ],
        level: 2,
        type: 2,
        name: "社会团体/组织"
      },
      { code: "1808", type: 2, name: "国际机构/组织", level: 2 },
      { code: "1806", type: 2, name: "事业单位", level: 2 }
    ]
  },
  {
    code: "19",
    name: "学生",
    company_title: "学校",
    level: 1,
    position_title: "专业",
    type: 1
  }
];
//公司规模配置数据
export const COMPANY_SIZE_CONFIG = [
  "50人以内",
  "50-100人",
  "100-500人",
  "500-1000人",
  "1000-10000人",
  "1万人以上"
];

//公司盈利配置数据
export const COMPANY_REVENUE = [
  "5千万元以下",
  "5千万～3亿元",
  "3亿～10亿元",
  "10亿元以上"
];

//省份城市配置数据
export const PROVINCE_CITY = {
  黑龙江: ["佳木斯", "牡丹江", "齐齐哈尔", "绥化", "哈尔滨", "大庆"],
  吉林: ["白城", "四平", "长春", "松原", "通化", "吉林", "白山", "延边"],
  辽宁: [
    "鞍山",
    "盘锦",
    "辽阳",
    "大连",
    "朝阳",
    "沈阳",
    "本溪",
    "锦州",
    "营口",
    "葫芦岛",
    "阜新",
    "丹东",
    "抚顺"
  ],
  内蒙古: [
    "乌海",
    "呼和浩特",
    "通辽",
    "呼伦贝尔",
    "鄂尔多斯",
    "锡林郭勒",
    "巴彦淖尔",
    "乌兰察布",
    "兴安",
    "包头",
    "赤峰"
  ],
  福建: ["龙岩", "南平", "泉州", "莆田", "福州", "三明", "漳州", "厦门"],
  浙江: [
    "嘉兴",
    "宁波",
    "金华",
    "衢州",
    "台州",
    "温州",
    "绍兴",
    "杭州",
    "湖州",
    "丽水"
  ],
  北京: ["北京"],
  河北: [
    "保定",
    "秦皇岛",
    "沧州",
    "廊坊",
    "邢台",
    "衡水",
    "唐山",
    "承德",
    "邯郸",
    "石家庄",
    "张家口"
  ],
  天津: ["天津"],
  江苏: [
    "苏州",
    "镇江",
    "宿迁",
    "常州",
    "连云港",
    "泰州",
    "扬州",
    "南京",
    "盐城",
    "无锡",
    "南通",
    "淮安",
    "徐州"
  ],
  上海: ["上海"],
  广东: [
    "东莞",
    "珠海",
    "惠州",
    "清远",
    "揭阳",
    "中山",
    "梅州",
    "茂名",
    "江门",
    "肇庆",
    "韶关",
    "汕头",
    "深圳",
    "阳江",
    "潮州",
    "河源",
    "佛山",
    "广州",
    "云浮",
    "湛江"
  ],
  海南: ["海口"],
  广西: [
    "钦州",
    "玉林",
    "柳州",
    "河池",
    "梧州",
    "来宾",
    "北海",
    "桂林",
    "南宁",
    "百色",
    "贺州",
    "贵港"
  ],
  四川: [
    "凉山",
    "巴中",
    "内江",
    "广安",
    "泸州",
    "南充",
    "宜宾",
    "德阳",
    "成都",
    "广元",
    "达州",
    "乐山",
    "资阳",
    "自贡",
    "雅安",
    "绵阳",
    "攀枝花",
    "遂宁",
    "眉山"
  ],
  西藏: ["林芝", "拉萨"],
  重庆: ["重庆"],
  安徽: [
    "宣城",
    "宿州",
    "铜陵",
    "合肥",
    "滁州",
    "淮南",
    "黄山",
    "安庆",
    "蚌埠",
    "六安",
    "池州",
    "淮北",
    "芜湖",
    "阜阳",
    "马鞍山",
    "亳州"
  ],
  山东: [
    "烟台",
    "日照",
    "泰安",
    "东营",
    "青岛",
    "枣庄",
    "淄博",
    "临沂",
    "滨州",
    "德州",
    "潍坊",
    "菏泽",
    "威海",
    "济宁",
    "聊城",
    "济南"
  ],
  甘肃: [
    "陇南",
    "平凉",
    "天水",
    "酒泉",
    "白银",
    "庆阳",
    "兰州",
    "金昌",
    "定西",
    "武威",
    "张掖"
  ],
  宁夏: ["石嘴山", "固原", "银川", "吴忠"],
  青海: ["西宁"],
  新疆: [
    "伊犁",
    "阿克苏",
    "乌鲁木齐",
    "省直辖",
    "昌吉",
    "哈密",
    "阿勒泰",
    "喀什",
    "巴音郭楞",
    "克拉玛依"
  ],
  贵州: [
    "六盘水",
    "铜仁",
    "毕节",
    "黔东南",
    "黔南",
    "遵义",
    "黔西南",
    "贵阳",
    "安顺"
  ],
  云南: [
    "红河",
    "玉溪",
    "文山",
    "大理",
    "昭通",
    "德宏州",
    "丽江",
    "临沧",
    "普洱",
    "楚雄",
    "保山",
    "昆明",
    "西双版纳",
    "曲靖"
  ],
  山西: [
    "长治",
    "晋中",
    "运城",
    "忻州",
    "晋城",
    "临汾",
    "太原",
    "阳泉",
    "吕梁",
    "大同",
    "朔州"
  ],
  陕西: [
    "咸阳",
    "西安",
    "宝鸡",
    "渭南",
    "汉中",
    "榆林",
    "安康",
    "铜川",
    "商洛",
    "延安"
  ],
  江西: [
    "抚州",
    "赣州",
    "鹰潭",
    "九江",
    "景德镇",
    "上饶",
    "宜春",
    "新余",
    "萍乡",
    "南昌",
    "吉安"
  ],
  湖南: [
    "岳阳",
    "邵阳",
    "衡阳",
    "湘西",
    "怀化",
    "张家界",
    "湘潭",
    "郴州",
    "株洲",
    "益阳",
    "永州",
    "常德",
    "长沙",
    "娄底"
  ],
  湖北: [
    "荆门",
    "襄阳",
    "宜昌",
    "恩施",
    "咸宁",
    "黄冈",
    "武汉",
    "十堰",
    "黄石",
    "荆州",
    "随州",
    "孝感",
    "湖北省省直辖"
  ],
  河南: [
    "濮阳",
    "鹤壁",
    "南阳",
    "焦作",
    "商丘",
    "周口",
    "开封",
    "安阳",
    "新乡",
    "信阳",
    "许昌",
    "漯河",
    "洛阳",
    "郑州",
    "三门峡",
    "驻马店",
    "平顶山"
  ]
};
