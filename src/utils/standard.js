/**
 * Contains a bunch of helper functions.
 *
 */

import $ from "jquery";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import numeral from "numeral";
import pinyin from "chinese-to-pinyin";
import { message } from "antd";
import UAParser from "ua-parser-js";

// export our module
const J = {};

// Default HTTP request configs
const HttpConfig = {
  baseURL: "/"
};

// add global HTTP headers
J.addGlobalHeaders = headers => {
  HttpConfig.headers = _.extend(HttpConfig.headers, headers);
};

// POST wrapper
J.post = async (
  url,
  payload = {},
  options = { ajaxBar: true, headers: {} }
) => {
  const method = "POST";
  let responseBody;
  let responseStatus;

  // log start
  const printedPayload =
    payload instanceof FormData
      ? J.formDataToJson(payload)
      : _.cloneDeep(payload);
  const sensitiveFields = ["password"];
  J.asteriskifyFields(printedPayload, sensitiveFields); // prevent sensitive info from printed out

  try {
    const { data, status } = await axios({
      method,
      url,
      data: payload,
      responseType: "json",
      withCredentials: true, // needed to send cookies with cross-origin ajax calls.
      crossDomain: true,
      ...HttpConfig,
      ...options,
      headers: { ...HttpConfig.headers, ...options.headers }
    });
    responseBody = data;
    responseStatus = status;
  } catch (e) {
    const { data, status } = e.response || {};
    const serverErrorMessage = data ? data.error : ""; // error message from server
    const axiosErrorMessage = e.message; // error message from browser
    const error = serverErrorMessage || axiosErrorMessage || "Error occured";
    responseBody = { error };
    responseStatus = status;
  }

  responseBody = responseBody || {};

  return responseBody; // ensure it's not empty, so deconstructing works without crash
};

// Post with form data
J.postFormData = (url, formdata, options = {}) => {
  return J.post(url, formdata, {
    headers: { "Content-Type": "multipart/form-data" },
    ajaxBar: true,
    ...options
  });
};

// Upload file (file_data is base64)
J.uploadFile = (
  { is_image, is_private, file_owner_uid, file_blob },
  options
) => {
  const formdata = new FormData();
  formdata.append("file_blob", file_blob);
  formdata.append(
    "json",
    JSON.stringify({
      is_image,
      is_private,
      file_owner_uid
    })
  );
  return J.postFormData("/upload", formdata, options);
};

window.J = J;

// wrapper for JSON.parse to catch exception
J.toJSON = (str, { suppressErrorLog = true } = {}) => {
  let result;
  try {
    result = JSON.parse(str);
  } catch (e) {
    if (!suppressErrorLog) console.error("J.toJSON err:", str);
  }
  return result;
};

// localstorage without JSON.parse() and JSON.stringify()
J.storeSet = (key, val) => localStorage.setItem(key, JSON.stringify(val));
J.storeGet = (key, default_value) =>
  J.toJSON(localStorage.getItem(key)) || default_value;
J.storeRemove = key => localStorage.removeItem(key);
J.storeClear = () => localStorage.clear();

// Custom localStorage methods
// Push to array
J.storePush = (key, val) =>
  J.storeSet(key, (J.storeGet(key) || []).concat(val));
// Remove from array (using predicate)
J.storePull = (key, ...args) => {
  const arr = J.storeGet(key) || [];
  _.remove(arr, ...args);
  return J.storeSet(key, arr);
};

// Simulate a fake request
J.fakeRequest = async (delay = 1000) => {
  await J.post("/init-data");
  return new Promise(resolve => {
    setTimeout(() => resolve(), delay);
  });
};

// Deep clone (use this instead of _.cloneDeep() to remove functions, date,
// unwrap mobx observable, etc, such that it becomes plain JSON)
J.deepClone = obj => {
  return JSON.parse(JSON.stringify(obj));
};

// Convert formdata into Json
J.formDataToJson = formdata => {
  const json = {};
  formdata.forEach((value, key) => {
    json[key] = value;
  });
  return json;
};

// Generate UUID (used as identifier for messaging)
J.uuid = () => {
  var d = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

// replace json values by asterisks
J.asteriskifyFields = (obj, arrOfKeys) => {
  arrOfKeys.forEach(key => {
    if (obj[key]) obj[key] = String(obj[key]).replace(/./g, "*");
  });
  return obj;
};

// add React-standard vendor prefix to a css property
J.vendorPrefixed = (property, value) => {
  const css = {};
  const Property = _.upperFirst(_.camelCase(property)); // CamelCaseProperty
  css[_.lowerFirst(Property)] = value;
  css["Webkit" + Property] = value;
  css["Moz" + Property] = value;
  css["Ms" + Property] = value;
  css["O" + Property] = value;
  return css;
};

// convert an arr to json, support an array of strings or objects
J.arrToJson = (arr, key = "_id") => {
  const json = {};
  _.each(arr, item => {
    if (_.isObject(item) && item[key]) json[item[key]] = item;
    else if (_.isString(item)) json[item] = true;
  });
  return json;
};

// add a list of docs to an existing list, if 2 docs have same <key>, update old doc by new doc
J.addDocs = (existing_docs, new_docs, key = "_id") => {
  const new_docs_hash = J.arrToJson(new_docs);
  const updated_docs_hash = {};
  // loop through old docs, if there's an updated version in the new docs, replace it
  existing_docs = _.map(existing_docs, doc => {
    const id = doc[key];
    const updated_doc = new_docs_hash[id];
    if (updated_doc) {
      updated_docs_hash[id] = updated_doc;
      return updated_doc;
    }
    return doc;
  });
  // then for each new doc that is not an update of the old doc, add it to the final array
  new_docs.forEach(doc => {
    const id = doc[key];
    if (!updated_docs_hash[id]) {
      existing_docs.push(doc);
    }
  });
  return existing_docs;
};

// check if <new_docs> have docs that <existing_docs> don't have
J.hasNewDocs = (existing_docs, new_docs, key = "_id") => {
  const existing_docs_hash = J.arrToJson(existing_docs);
  // loop through new docs, if there's a doc that doesn't exist in existing doc, return true
  for (let i = 0; i < new_docs.length; i++) {
    const id = new_docs[i][key];
    if (!existing_docs_hash[id]) return true;
  }
  return false;
};

// extend old docs with new docs, return extended docs
J.extendDocs = (existing_docs, new_docs, key = "_id") => {
  const new_docs_hash = J.arrToJson(new_docs);
  // loop through old docs, if there's an updated version in the new docs, extend it
  return _.map(existing_docs, doc => {
    const updated_doc = new_docs_hash[doc[key]];
    if (updated_doc) return _.extend(doc, updated_doc);
    else return doc;
  });
};

// round a number to n decimals, must return a number
// not only this can round, but it can remove machine imprecision
// ex: 2.75+36+4.31+2.99+3.61 = 49.660000000000004
//     J.round(2.75+36+4.31+2.99+3.61) = 49.66
J.round = (value, decimals = 2) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

// override default jQuery's .val(), ensure it returns string
const $originalVal = $.fn.val;
$.fn.val = function() {
  return $originalVal.call(this) || "";
};

// return true if div is scrolled to bottom
$.fn.scrolledToBottom = function(tolerance = 5) {
  if (
    this.scrollTop() + this.innerHeight() >=
    this.get(0).scrollHeight - tolerance
  ) {
    return true;
  } else return false;
};

// Get height of hidden elements
$.fn.getHeight = function() {
  var previousCss = this.attr("style");
  this.css({
    position: "absolute",
    visibility: "hidden",
    display: "block"
  });
  var optionHeight = this.height();
  this.attr("style", previousCss ? previousCss : "");
  return optionHeight;
};

// reset DOM element
$.fn.reset = function() {
  this.replaceWith(this.clone());
};

// Determine if element is visible in viewport
J.isVisibleInViewport = el => {
  if (typeof $ === "function" && el instanceof $) el = el[0];
  if (!el || !el.getBoundingClientRect) return;
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  );
};

// /** Get URL parameters. Ex: $.urlParam('id'); will output 6 */
// J.urlParam = (name, url) => {
//   url = url || window.location.href;
//   var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(url);
//   if (results === null) {
//     return null;
//   } else {
//     return results[1] || 0;
//   }
// };

// // update/add url query string
// // - not supplying a value will remove the parameter
// // - supplying one will add/update the parameter
// // - if no URL is supplied, it will be grabbed everything after domain
// J.setUrlParam = (key, value, url) => {
//   if (!url)
//     url =
//       window.location.pathname + window.location.search + window.location.hash;
//   var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
//     hash;

//   if (re.test(url)) {
//     if (typeof value !== "undefined" && value !== null)
//       return url.replace(re, "$1" + key + "=" + value + "$2$3");
//     else {
//       hash = url.split("#");
//       url = hash[0].replace(re, "$1$3").replace(/(&|\?)$/, "");
//       if (typeof hash[1] !== "undefined" && hash[1] !== null)
//         url += "#" + hash[1];
//       return url;
//     }
//   } else {
//     if (typeof value !== "undefined" && value !== null) {
//       var separator = url.indexOf("?") !== -1 ? "&" : "?";
//       hash = url.split("#");
//       url = hash[0] + separator + key + "=" + value;
//       if (typeof hash[1] !== "undefined" && hash[1] !== null)
//         url += "#" + hash[1];
//       return url;
//     } else return url;
//   }
// };

// // remove all keys with falsey values
// J.cleanJson = (json) => {
//   const omit = [null, undefined, ""];
//   return _.omitBy(json, (value) => _.includes(omit, value));
// };

// // compressed image URL from qiniu
// J.compressedImageUrl = (url) => {
//   return url + "-t480";
// };

// // original image URL from qiniu
// J.uncompressedImageUrl = (url) => {
//   return String(url).replace("-t480", "");
// };

// // return background-image url
J.bgUrl = url => (url ? { backgroundImage: `url(${url})` } : {});

// // convert all consecutive space/new lines into a single space, remove leading/trailing space/new lines.
// // essentially, we can only have a single space in between any 2 characters.
// J.trimAll = (s) =>
//   String(s || "")
//     .replace(/\s+/g, " ")
//     .replace(/^\s+|\s+$/g, "");

// // determine if string contains chinese/japanese
// J.hasChinese = (s) => {
//   return s && s.match(/[\u3400-\u9FBF]/);
// };

// // check if string only contains digits
// J.onlyContainsDigits = (s) => {
//   return parseInt(s, 10) + "" === s;
// };

// // check if a string is stringified integer, or is int
// J.isStringifiedInteger = (str) => {
//   return Number(str) + "" === String(str);
// };

// // format number
// J.formatNum = (n, opt) => {
//   return J.isStringifiedInteger(n) ? numeral(n).format(opt || "0,0") : n;
// };

// // Check if a string is valid date value
// J.isDateField = (database_field_name, database_field_value) => {
//   const possible_formats = ["YYYY-MM-DD HH:mm:ss", moment.ISO_8601];
//   return (
//     database_field_name.indexOf("time") >= 0 &&
//     moment(database_field_value, possible_formats, true).isValid()
//   );
// };

// // Sort docs by pinyin, so both Chinese and Western words are ordered alphabetically
// // Beware, this is slow!
// J.sortByPinyin = (docs, field) => {
//   return _.orderBy(
//     docs,
//     [(doc) => pinyin(doc[field], { noTone: true, filterChinese: true })],
//     ["asc"]
//   );
// };

// // Convert user agent to a readable string
// J.detectDevice = (user_agent) => {
//   if (!user_agent) {
//     return "";
//   }
//   const is_work_wechat = /wxwork/.test(user_agent);
//   const ua = UAParser(user_agent);
//   // Huawei MHA-AL00
//   const device = _.compact([ua.device.vendor, ua.device.model]).join(" ");
//   // Android 7.1
//   const os = _.compact([ua.os.name, ua.os.version]).join(" ");
//   // browser
//   const browser = _.compact([
//     ua.device.type,
//     is_work_wechat ? "企业微信" : ua.browser.name,
//   ]).join(" ");
//   // add all of them together, separated by commas, if anything is undefined then its removed
//   const result = _.reject([device, os, browser], _.isEmpty).join(" ");
//   return result;
// };

// // ---------- helper animate.css functions ----------------

// // show, 3rd argument can be option json or callback
$.fn.animatedShow = function(effect, duration, opts = {}) {
  const onComplete = _.isFunction(opts)
    ? opts
    : opts.onComplete || function() {};
  const durationClass = "animate_duration_" + (duration || "");
  const classes = "animated " + durationClass + " " + effect;
  this.addClass(classes)
    .show()
    .one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      () => {
        this.removeClass(classes);
        onComplete(this);
      }
    );
  return this;
};

// hide, 3rd argument can be option json or callback
$.fn.animatedHide = function(effect, duration, opts = {}) {
  const beforeHide = opts.beforeHide || function() {};
  const onComplete = _.isFunction(opts)
    ? opts
    : opts.onComplete || function() {};
  const durationClass = "animate_duration_" + (duration || "");
  const classes = "animated " + durationClass + " " + effect;
  this.addClass(classes).one(
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
    () => {
      beforeHide();
      this.hide().removeClass(classes);
      onComplete(this);
    }
  );
  return this;
};

// Disable mousewheel scrolling on `<input type=number>`
$(document).on("wheel", "input[type=number]", function(e) {
  $(this).blur();
});

// Patch message.error() message, so it doesn't crash on empty input
(() => {
  const fn = message.error;
  message.error = (content, ...rest) => {
    return fn(content || "错误发生", ...rest);
  };
})();

export default J;
