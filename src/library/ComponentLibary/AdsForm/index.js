import React, { PureComponent } from "react";
import {
  FORM_TYPE,
  PROVINCE_CITY,
  KEY_LABEL,
  GENDER,
  PROFESSION,
  COMPANY_SIZE_CONFIG,
  COMPANY_REVENUE,
  INIT_SELECT_VALUE
} from "./const";
import { toJS } from "mobx";
import AuthModal from "./AuthModal";

import "./index.less";

export default class AdsForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      provinceConfig: Object.keys(PROVINCE_CITY) || [],
      cityConfig: [],
      realname: "",
      emobile: "",
      email: "",
      company: "",
      company_size: INIT_SELECT_VALUE,
      profession: INIT_SELECT_VALUE,
      position: "",
      province: INIT_SELECT_VALUE,
      city: "",
      postcode: "",
      gender: INIT_SELECT_VALUE,
      revenue: INIT_SELECT_VALUE
    };
  }

  componentWillReceiveProps(nextProps) {
    const { config } = nextProps;
    let isModalChange = false;
    ["modalLogo", "modalName", "text1", "text2"].every(key => {
      if (config[key] !== this.props.config[key]) {
        isModalChange = true;
        return false;
      }
      return true;
    });
    if (isModalChange) {
      AuthModal.show(config);
    }
  }
  changeOption = (e, key) => {
    const { value } = e.target || {};

    if (key === "province") {
      console.log("value", value);
      this.setState({
        province: value,
        cityConfig: PROVINCE_CITY[value] || [],
        city: INIT_SELECT_VALUE
      });
    } else {
      this.setState({
        [key]: value
      });
    }
  };

  renderOptions = key => {
    const { provinceConfig, cityConfig } = this.state;

    const SELECT_KEY_CONFIG = {
      gender: GENDER,
      revenue: COMPANY_REVENUE,
      province: provinceConfig,
      city: cityConfig,
      company_size: COMPANY_SIZE_CONFIG,
      profession: PROFESSION
    };

    return (
      Array.isArray(SELECT_KEY_CONFIG[key]) &&
      SELECT_KEY_CONFIG[key].map(item => {
        if (key === "profession") {
          return (
            <option value={item.code} key={item.code}>
              {item.name}
            </option>
          );
        } else {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        }
      })
    );
  };
  renderForm = (key, label) => {
    const { state } = this;
    if (FORM_TYPE[key] === "input") {
      return (
        <input
          className="form-input"
          name={key}
          value={state[key]}
          onChange={e => {
            this.changeOption(e, key);
          }}
          placeholder={"请输入" + label}
        />
      );
    } else if (FORM_TYPE[key] === "select") {
      return (
        <select
          className="form-select"
          name={key}
          value={state[key]}
          onChange={e => {
            this.changeOption(e, key);
          }}
        >
          <option value={INIT_SELECT_VALUE} disabled>
            请选择
          </option>
          {this.renderOptions(key)}
        </select>
      );
    }
  };

  submit = () => {
    const { config = {} } = this.props;
    const { text1, text2, modalLogo, modalName } = config;
    console.log("submit", AuthModal);
    AuthModal.show({
      text1,
      text2,
      modalLogo,
      modalName
    });
  };
  render() {
    const { config = {} } = this.props;
    const {
      width,
      moduleBgImg,
      formBgColor,
      txtColor,
      btnTxt,
      btnColor,
      formItems = [],
      paddingTop,
      isBottom,
      fixedBottom
    } = config;
    console.log(config);
    let aStyle = isBottom
      ? { position: "absolute", bottom: fixedBottom + "px", zIndex: 10 }
      : { position: "relative" };
    let bStyle = isBottom ? { padding: 0 } : {};
    return (
      <div
        className="form-pre-container"
        style={{
          backgroundImage: `url(${moduleBgImg})`,
          paddingTop,
          ...aStyle
        }}
      >
        <div
          className="try-container"
          style={{
            width: width + "px",
            backgroundColor: formBgColor,
            ...bStyle
          }}
        >
          {Array.isArray(toJS(formItems)) &&
            formItems.map(item => {
              return (
                <div className="form-item" key={item}>
                  <label>{KEY_LABEL[item]}</label>
                  {this.renderForm(item, KEY_LABEL[item])}
                </div>
              );
            })}
          <div
            className="submit-btn"
            style={{
              color: txtColor,
              backgroundColor: btnColor,
              marginTop: isBottom ? 0 : 20
            }}
            onClick={this.submit}
          >
            {btnTxt}
          </div>
        </div>
      </div>
    );
  }
}
