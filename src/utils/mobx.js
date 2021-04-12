/**
 * Default MobX class with @auto, all stores should use this.
 * It automagically turn class into observable, and add a bunch
 * of helper functions.
 *
 */

import _ from "lodash";
import { classDecorator } from "decorating";
import {
  action,
  toJS,
  configure,
  decorate,
  computed,
  observable,
  runInAction
} from "mobx";

// Do not force use of @action and runInAction()
configure({ enforceActions: "never" });

// Extract all getters and methods defined on prototype of a class
const extractGettersAndPrototypeMethods = clas => {
  const getters = []; // getter fields
  const prototypes = []; // name of methods defined on prototype. A prototype function is do(){}, and NOT do = () => {}
  const fns = _.omit(
    Object.getOwnPropertyDescriptors(clas.prototype),
    "constructor"
  ); // contains both together
  _.each(fns, (descriptor, key) => {
    // separate these two
    if (descriptor.get) getters.push(key);
    else prototypes.push(key);
  });
  return { getters, prototypes };
};

// Automatically decorate all properties of a class
// - field: @observable
// - getter: @computed
// - function: @action
const auto = classDecorator(clas => {
  return (...args) => {
    // create a temporary object, in order to read off
    // all the properties of the class
    const tmp = new clas(...args);
    const types = {};
    const { getters, prototypes } = extractGettersAndPrototypeMethods(clas);
    // getters, i.e. get do(){}
    for (const getter of getters) {
      types[getter] = computed;
    }
    // methods defined on prototypes, i.e. do(){}
    for (const fn of prototypes) {
      types[fn] = action;
    }
    _.each(tmp, (v, k) => {
      // methods defined locally, i.e. do = () => {}
      if (_.isFunction(v)) types[k] = action;
      // value fields, i.e. name = 'peter'
      else types[k] = observable;
    });
    decorate(clas, types);
    // create our new store
    const store = new clas(...args);
    // Furthermore, we add 2 helper methods:
    // 1. this.setStore(): set any arbitrary values
    store.setStore = async json => {
      return await runInAction(() => {
        _.extend(store, json);
      });
    };
    // 2. this.reset(): reset store to initial state
    store.reset = async () => {
      const clone = JSON.parse(JSON.stringify(tmp));
      // remove clone's functions, because refer they clone's properties, and not current properties
      _.each(clone, (v, k) => {
        if (_.isFunction(v)) delete clone[k];
      });
      await runInAction(() => {
        _.extend(store, clone);
      });
    };
    return store;
  };
});

// export @auto decorator
export { auto };
