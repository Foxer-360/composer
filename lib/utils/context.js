"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;

var _ = require("./");

var createHash = _interopRequireWildcard(require("object-hash"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Context class. This is something like data stream used in Composer to
 * handle context data and plugin data, etc.
 */
var Context =
/** @class */
function () {
  function Context() {
    this.properties = [];
    this.storage = {};
  }

  Context.prototype.addListener = function () {// ToDo
  };

  Context.prototype.removeListener = function () {// ToDo
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
    var hash = createHash(data);
    var storageProperty;

    if (!this.isPropertyExists(property)) {
      storageProperty = {
        hash: hash,
        name: property,
        updates: 0
      };
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

  return Context;
}();

exports.Context = Context;