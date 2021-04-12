/*
 * An abstraction layer on top of react-router.
 *
 * It exposes an API to navigate histories.
 * It's written using MobX observable to allow component to
 * react to URL changes.
 *
 */

import _ from "lodash";
import J from "utils/standard";
import { browserHistory } from "react-router";
import { auto } from "utils/mobx";

@auto
class History {
  driver = browserHistory; // history strategy
  onURLChange = this.driver.listen; // provide a way to listen on url changes
  historyStack = 0; // history stack
  previousLocation = {}; // keep track of previous location object
  currentLocation = this.driver.getCurrentLocation(); // keep track of current location object, make it observable

  constructor() {
    // update history stack whether go back/forth in history, to determine if user
    // can go back in history
    this.driver.listen(e => {
      if (e.action === "PUSH") this.historyStack++;
      else if (e.action === "POP") this.historyStack--;
      if (this.historyStack < 0) this.historyStack = 0;
    });
  }

  // @deprecated, replaced by onURLChange()!
  // set previous location object (written in pages/app/index.js)
  // if a component's render() contains "currentLocation", this allows
  // that component to re-render based on URL changes
  setLocations = ({ prev, curr }) => {
    this.previousLocation = prev;
    this.currentLocation = curr;
  };

  // ------------ copy native methods ------------

  getCurrentLocation = this.driver.getCurrentLocation;
  push = this.driver.push;
  replace = this.driver.replace;
  go = this.driver.go;
  goForward = this.driver.goForward;
  setRouteLeaveHook = this.driver.setRouteLeaveHook;
  createPath = this.driver.createPath;
  createHref = this.driver.createHref;
  isActive = this.driver.isActive;

  // same as native goBack(), but user can provide an optional fallback url, in case
  // browser has no previous history
  goBack(fallbackUrl) {
    if (this.canGoBack()) {
      this.driver.goBack();
    } else {
      if (fallbackUrl) {
        console.log("no previous path, going to fallbackUrl", fallbackUrl);
        this.driver.replace(fallbackUrl);
      } else {
        console.log(
          "no previous path, and no fallbackUrl provided, going back blindly..."
        );
        this.driver.goBack();
      }
    }
  }

  // --------------- custom methods ---------------

  // check whether user can go back in history
  canGoBack() {
    return this.historyStack >= 1;
  }

  // get current URL's query params
  // ex: { foo: 'bar' }
  getQuery(optionalField) {
    const json = history.getCurrentLocation().query || {};
    if (optionalField) return json[optionalField];
    else return json;
  }

  // add query
  // - can either replace current URL, or push as new URL
  // - ex: history.addQuery({ paintRed: 1 })
  addQuery(query, { push = false } = {}) {
    const location = Object.assign({}, this.getCurrentLocation());
    Object.assign(location.query, query);
    if (push) this.driver.push(location);
    else this.driver.replace(location);
  }

  // set query
  setQuery(query, { push = false } = {}) {
    const location = Object.assign({}, this.getCurrentLocation());
    location.query = query;
    if (push) this.driver.push(location);
    else this.driver.replace(location);
  }

  // remove query
  // - can either replace current URL, or push as new URL
  // - support array or string as query name(s) to be removed
  // - ex: history.removeQuery('paintRed')
  removeQuery(queryNames, { push = false } = {}) {
    const location = Object.assign({}, this.getCurrentLocation());
    queryNames = _.isArray(queryNames) ? queryNames : [queryNames];
    queryNames.forEach(q => delete location.query[q]);
    if (push) this.driver.push(location);
    else this.driver.replace(location);
  }

  // get current redirect param
  getRedirect() {
    return J.urlParam("redirect_url");
  }

  // add redirect param to a given url
  addRedirect(url, param) {
    return J.setUrlParam("redirect_url", param, url);
  }

  // copy current redirect param to a given url
  keepRedirect(url) {
    return J.setUrlParam("redirect_url", this.getRedirect(), url);
  }

  // go to <url>, then upon completion, go back to current page
  // so, internally it adds redirect_url to the url, then on that page, it must
  // write logic that makes user go back upon completion
  pushAndComeBackOnComplete(url, useReplace) {
    var goTo = this.addRedirect(url, this.getCurrentLocation().pathname);
    if (useReplace) this.driver.replace(goTo);
    else this.driver.push(goTo);
  }

  // check if previous url starts with a particular pathname, ex: /meal
  previousLocationStartsWith(pathname) {
    return (
      _.isObject(this.previousLocation) &&
      _.isString(this.previousLocation.pathname) &&
      "/" + this.previousLocation.pathname.split("/")[1] === pathname
    );
  }

  getFirstPathInUrl() {
    return "/" + this.getCurrentLocation().pathname.split("/")[1];
  }
}

const history = new History(); // history store
const historyDriver = history.driver;

window.his = history;

export default history;
export { historyDriver };
