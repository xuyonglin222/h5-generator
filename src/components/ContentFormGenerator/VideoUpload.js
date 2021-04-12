import React, { Fragment, PureComponent } from "react";
import { Button, Upload, Icon, message } from "antd";
import { post } from "services";

class VideoUpload extends PureComponent {
  state = {
    fileList: [],
    imgSrc: this.props.value
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
            const videoSrc = "http://f9.taou.com/maimai/" + path;
            this.setState({
              fileList: [],
              videoSrc
            });
            this.changeImg(videoSrc);
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
    }, 600);
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <Upload
          fileList={fileList}
          showUploadList={false}
          beforeUpload={this.beforeUpload}
          onRemove={this.remove}
          onChange={this.handleUpload}
        >
          <Button>
            <Icon type="upload" /> 选择视频
          </Button>
        </Upload>
        {imgSrc && (
          <video style={{ width: "100%", marginTop: 8 }}>
            <source src={imgSrc} alt="" type="video/mp4" />
            您的浏览器不支持Video标签。
          </video>
        )}
      </div>
    );
  }
}

export default VideoUpload;
