import React, { PureComponent } from "react";
import { Button, Upload, Icon, message } from "antd";
import { post } from "services";

import "./index.less";
class ImgUpload extends PureComponent {
  // ?
  state = {
    fileList: [],
    imgSrc: this.props.value //mode === 'multiple' 时为数组
  };

  beforeUpload = file => {
    this.setState(state => ({
      fileList: [...state.fileList, file]
    }));
    return false;
  };

  changeImg = imgSrc => {
    const { onChange } = this.props;
    onChange && onChange(imgSrc);
  };

  deleteImg = index => {
    const { imgSrc } = this.state;
    const data = [...imgSrc];
    data.splice(index, 1);
    this.setState({
      imgSrc: data
    });
    this.changeImg(data);
  };

  handleUpload = () => {
    setTimeout(() => {
      const { fileList } = this.state;
      const formData = new FormData();
      formData.append("file", fileList[0]);

      post("/maiya/tool/upload", formData, {
        headers: { "Content-Type": "*/*" }
      }).then(
        data => {
          console.log("数据", data);
          const { path, result } = data || {};
          if (result == "ok") {
            const imgSrc = "http://f9.taou.com/maimai/" + path;

            this.setState({
              fileList: [],
              imgSrc
            });
            this.changeImg(imgSrc);
            message.success("上传成功");
          } else {
            this.setState({
              uploading: false
            });
            message.error("上传失败");
          }
        },
        () => {
          message.error("上传失败");
        }
      );
    }, 1000);
  };

  remove = file => {
    this.setState(state => {
      const index = state.fileList.indexOf(file);
      const newFileList = state.fileList.slice();
      newFileList.splice(index, 1);
      return {
        fileList: newFileList
      };
    });
  };
  render() {
    const { fileList, imgSrc } = this.state;
    return (
      <div>
        <Upload
          fileList={fileList}
          showUploadList={false}
          beforeUpload={this.beforeUpload}
          onRemove={this.remove}
          onChange={this.handleUpload}
        >
          <Button>
            <Icon type="upload" /> 选择图片
          </Button>
        </Upload>

        {Array.isArray(imgSrc) ? (
          <p className="tip">共{imgSrc.length}张图片</p>
        ) : (
          <img src={imgSrc} alt="xxx.png" style={{ width: "100%" }} />
        )}
        {Array.isArray(imgSrc) && (
          <div className="img-list">
            {imgSrc.map((img, index) => {
              return (
                img && (
                  <div key={img} className="img-preview-container">
                    <a
                      href={img}
                      className="img-a"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={img} alt="xxx.png" className="img-preview" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="img-name"
                      title="xxx.png"
                      href={img}
                    >
                      图片{index + 1}
                    </a>
                    <Icon
                      className="delete-icon"
                      type="delete"
                      onClick={() => {
                        this.deleteImg(index);
                      }}
                    />
                  </div>
                )
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default ImgUpload;
