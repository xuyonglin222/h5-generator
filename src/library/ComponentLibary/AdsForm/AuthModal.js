import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import "./index.less";

class AuthModal extends PureComponent {
  state = {
    modalLogo: "",
    text1: "",
    text2: "",
    modalName: ""
  };

  close = () => {
    const { onClose } = this.props;

    onClose && onClose();
  };

  ok = () => {
    const { onOk } = this.props;
    onOk && onOk();
  };

  render() {
    const { auth_info } = this.context;
    const { modalLogo, text1, text2, modalName } = this.props;

    return (
      <div id="company_interest_modal">
        <div className="modal-bg cursor-pointer" onClick={this.close}></div>
        <div className="modal-content">
          <p className="modal-content-title">
            {auth_info && auth_info.u > 0 && "脉脉"}授权
          </p>
          <img src={modalLogo} />
          <p className="modal-content-warn">
            <span id="modal-content-name">{modalName}</span>申请获得以下权限:
          </p>
          <p className="modal-warn-detial">{text1}</p>
          <p className="modal-warn-detial">{text2}</p>
          <div className="modal-content-btn">
            <span
              className="cursor-pointer"
              id="modal-content-refuse"
              onClick={this.close}
            >
              拒绝
            </span>
            <span
              className="cursor-pointer"
              id="modal-content-confirm"
              onClick={this.ok}
            >
              允许
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const wrapper = Component => {
  const container = document.createElement("div");
  const box = document.querySelector(".preview-box");
  const render = props => {
    console.log("props", props);
    const onClose = () => {
      hide();
      props.onClose && props.onClose();
    };
    return ReactDOM.render(
      <Component {...props} onClose={onClose} />,
      container
    );
  };
  const show = props => {
    box.appendChild(container);
    render(props);
  };

  const hide = () => {
    ReactDOM.unmountComponentAtNode(container);
    box.removeChild(container);
  };

  const update = render;
  return { show, hide, update };
};

export default wrapper(AuthModal);
