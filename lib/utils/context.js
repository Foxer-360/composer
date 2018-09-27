"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;

var _ = require("./");

var _objectHash = _interopRequireDefault(require("object-hash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Context class. This is something like data stream used in Composer to
 * handle context data and plugin data, etc.
 */
var Context =
/** @class */
function () {
  function Context() {
    this.lastListenerId = 0;
    this.listeners = [];
    this.properties = [];
    this.storage = {};
  }
  /**
   * Add listener for some pattern (matching property)
   *
   * @param  {string} pattern which will match property
   * @param  {Listener} listener function
   * @return {string} id of created listener
   */


  Context.prototype.addListener = function (pattern, listener) {
    var listenerObject = {
      id: "#" + this.lastListenerId,
      listener: listener,
      pattern: pattern
    };
    this.listeners.push(listenerObject);
    this.lastListenerId++;
    return listenerObject.id;
  };
  /**
   * Remove listener
   *
   * @param  {string} id of listener, given from addListener method
   * @return {boolean} returns true if listeren was removed, otherwise false
   */


  Context.prototype.removeListener = function (id) {
    var found = false;
    var listeners = this.listeners.filter(function (item) {
      if (item.id === id) {
        found = true;
        return false;
      }

      return true;
    });
    this.listeners = listeners;
    return found;
  };
  /**
   * Just returns hash of given property or null, if property doesn't exists
   *
   * @param {string} property name
   * @return {string | null}
   */


  Context.prototype.getHashOfProperty = function (property) {
    if (!this.isPropertyExists(property)) {
      return null;
    }

    return this.storage[property].hash;
  };
  /**
   * Simple read data from given property. If property doesn't exists, returns
   * undefined.
   *
   * @param  {string} property name
   * @return {any} returns undefined if doesn't exists
   */


  Context.prototype.readProperty = function (property) {
    if (!this.isPropertyExists(property)) {
      return undefined;
    }

    return this.storage[property].data;
  };
  /**
   * Simply write property into storage. This property can be anything
   * (string, number, object, array)
   *
   * @param {string} property name
   * @param {any} data which you want to store
   * @return {void}
   */


  Context.prototype.writeProperty = function (property, data) {
    var hash = (0, _objectHash.default)(data);
    var storageProperty;

    if (!this.isPropertyExists(property)) {
      storageProperty = {
        data: data,
        hash: hash,
        name: property,
        updates: 0
      };
      this.properties.push(property);
    } else {
      storageProperty = this.storage[property];
      storageProperty.hash = hash;
      storageProperty.updates++;

      if (_typeof(data) === 'object') {
        storageProperty.data = (0, _.deepCopy)(data);
      } else if (Array.isArray(data)) {
        storageProperty.data = data.slice();
      } else {
        storageProperty.data = data;
      }
    }

    this.fireListeners(property);
    this.storage[property] = storageProperty;
  };
  /**
   * Check if given propery exists in context.
   *
   * @param {string} property name
   * @return {boolean} true if exists
   */


  Context.prototype.isPropertyExists = function (property) {
    var index = this.properties.indexOf(property);
    return index >= 0;
  };
  /**
   * Simply check if pattern match property
   *
   * @param  {string} pattern
   * @param  {string} property
   * @return {boolean} returns true if match
   */


  Context.prototype.isPatternMatch = function (pattern, property) {
    var regex = new RegExp("^" + pattern.replace('.', '\.').replace('*', '.*') + "$", 'gi');
    var result = regex.test(property);
    return result;
  };
  /**
   * Fire all listeners which patterns match given property
   *
   * @param {string} property [description]
   */


  Context.prototype.fireListeners = function (property) {
    var _this = this;

    this.listeners.forEach(function (listener) {
      if (_this.isPatternMatch(listener.pattern, property)) {
        listener.listener(property);
      }
    });
  };

  return Context;
}();

exports.Context = Context;