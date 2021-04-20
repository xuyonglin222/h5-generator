import React, { PureComponent } from "react";
import { Spin } from 'antd';

const AsyncComponent = load => {
  return class extends PureComponent {
    constructor() {
      super();
      this.state = {
        component: null
      };
    }
    componentDidMount() {
      load().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const Com = this.state.component;
      return Com ? <Com {...this.props} /> : <Spin spinning>正在加载</Spin>;
    }
  };
};

export default AsyncComponent;
