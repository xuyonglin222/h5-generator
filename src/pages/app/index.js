import React, { PureComponent } from "react";
// import AjaxProgressUI from 'ui/ajax-progress';
import { history } from "stores";
import "./style.css";

/**
 * Wrapper around the entire application.
 *
 * Doing so has a number of benefits
 * 	- allowing you to detect React-Router URL change and store URL histories.
 *  - mount singleton components on the toppest level of hierarchy and allow
 *    other components to directly interact with them via their exposed API methods
 *
 */

class App extends PureComponent {
  // allow getting previous location with history.previousLocation
  // componentWillReceiveProps(nextProps){
  //     history.setLocations({ prev: this.props.location, curr: nextProps.location });
  // }

  render() {
    return (
      <div className="app">
        <div className="app-sys-noti" />
        {/* <AjaxProgressUI /> */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
