import { observable, action, toJS } from "mobx";
import qs from "querystring";

class PageList {
  //所有组件配置
  @observable operator = "";
  @observable name = "";
  @observable page = 1;
  @observable paginator = {};
  @observable list = [
    // {
    //   webpid: "",
    //   name: "",
    //   updated_time: "",
    //   operator: "",
    //   created_time: "2021-02-08 16:50:49.252170",
    //   id: 2,
    // },
    // {
    //   webpid: "",
    //   name: "",
    //   updated_time: "",
    //   operator: "",
    //   created_time: "2021-02-08 17:03:11.301826",
    //   id: 3,
    // },
    // {
    //   webpid: "",
    //   name: "",
    //   updated_time: "",
    //   operator: "",
    //   created_time: "2021-02-08 17:03:48.004157",
    //   id: 4,
    // },
    // {
    //   webpid: "",
    //   name: "",
    //   updated_time: "",
    //   operator: "",
    //   created_time: "2021-02-08 17:11:25.432018",
    //   id: 5,
    // },
    // {
    //   webpid: "",
    //   name: "",
    //   updated_time: "",
    //   operator: "",
    //   created_time: "2021-02-08 17:58:48.492052",
    //   id: 6,
    // },
    // {
    //   webpid: "",
    //   name: "",
    //   updated_time: "",
    //   operator: "",
    //   created_time: "2021-02-08 17:59:30.359963",
    //   id: 7,
    // },
    // {
    //   webpid: "",
    //   name: "",
    //   updated_time: "",
    //   operator: "",
    //   created_time: "2021-02-09 18:41:55.732613",
    //   id: 8,
    // },
    // {
    //   webpid: "",
    //   name: "",
    //   updated_time: "",
    //   operator: "",
    //   created_time: "2021-02-09 19:23:49.126356",
    //   id: 9,
    // },
    // {
    //   webpid: "",
    //   name: "",
    //   updated_time: "",
    //   operator: "",
    //   created_time: "2021-02-09 19:27:10.340525",
    //   id: 10,
    // },
    // {
    //   webpid: "",
    //   name: "",
    //   updated_time: "",
    //   operator: "",
    //   created_time: "2021-02-10 11:18:34.816776",
    //   id: 11,
    // },
  ];

  @action
  get_list = async (operator = "", name = "", page = 1) => {
    this.operator = operator;
    this.name = name;
    this.page = page;
    let url =
      "/maiya/pages/get_page_list?" +
      qs.stringify({
        operator,
        name,
        page
      });
    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(res => {
        // console.log(res);
        this.list = res.data;
        this.paginator = res.paginator;
        // console.log(this.paginator);
      })
      .catch(e => {
        console.log(e);
      });
  };

  @action
  delete_page = async id => {
    let url =
      "/maiya/pages/delete?" +
      qs.stringify({
        page_id: id
      });
    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.get_list(this.operator, this.name, this.page);
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export default new PageList();
