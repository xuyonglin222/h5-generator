import React, { Component } from "react";
import "./style.css";
// import LoadingPage from "components/loading-page";
import { observer, inject } from "mobx-react";
import { Card, Table, Divider, Button } from "antd";
import { toJS } from "mobx";
import { history } from "stores";
@inject("page_list", "editor")
@observer
class PageListView extends Component {
  state = {};
  componentDidMount() {
    const { page_list } = this.props;
    page_list.get_list("", "", 1);
    console.log(this.props);
  }

  openPage = id => {
    window.open(`/app/editorpage?id=${id}`, "_blank");
  };

  deletePage = id => {
    const { page_list } = this.props;
    page_list.delete_page(id);
  };

  renderList() {
    const { page_list } = this.props;
    const list = toJS(page_list.list);
    const paginator = toJS(page_list.paginator);
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "webpid",
        dataIndex: "webpid",
        key: "webpid"
      },
      {
        title: "页面名称",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "更新时间",
        dataIndex: "updated_time",
        key: "updated_time"
      },
      {
        title: "创建者",
        dataIndex: "operator",
        key: "operator"
      },
      {
        title: "创建时间",
        dataIndex: "created_time",
        key: "created_time"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <Button
              type="primary"
              onClick={() => {
                this.openPage(record.id);
              }}
            >
              打开
            </Button>
            <Divider type="vertical" />
            <Button
              type="danger"
              onClick={() => {
                this.deletePage(record.id);
              }}
            >
              删除
            </Button>
          </span>
        )
      }
    ];
    return (
      <Card
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>共{paginator.total_count}个页面配置</span>
          </div>
        }
      >
        <Button
          onClick={() => {
            window.open("/app/editorpage");
          }}
          style={{ marginBottom: 10 }}
        >
          新增页面
        </Button>
        <Table
          columns={columns}
          dataSource={list}
          pagination={{
            size: "small",
            total: page_list.paginator.total_count,
            // showSizeChanger:true,
            showQuickJumper: true,
            onChange: (page, pageSize) => {
              page_list.get_list("", "", page);
            }
          }}
          rowKey={doc => doc.id}
        />
      </Card>
    );
  }

  render() {
    return <div className="outerPadding">{this.renderList()}</div>;
  }
}

export default PageListView;
