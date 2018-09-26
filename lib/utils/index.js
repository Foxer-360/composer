"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function get() {
    return _context.Context;
  }
});
exports.getImgUrl = exports.deepEqual = exports.deepCopy = void 0;

var _context = require("./context");

/**
 * Simple method to deep copy some object
 *
 * @param {ILooseObject} object which will be copied
 * @return {ILooseObject} copied object
 */
var deepCopy = function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
};
/**
 * Simple method to compare deeply two objects
 *
 * @param {ILooseObject} a first object
 * @param {ILooseObject} b second object
 * @return {boolean} true if these objects are the same
 */


exports.deepCopy = deepCopy;

var deepEqual = function deepEqual(a, b) {
  var aS = JSON.stringify(a);
  var bS = JSON.stringify(b);
  return aS === bS;
};
/**
 * !! DANGER !! This is method for Media Library, to get url of given image.
 * Move configuration of this address to some config file !
 *
 * @param {ILooseObject} data
 */


exports.deepEqual = deepEqual;

var getImgUrl = function getImgUrl(data) {
  var baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
  return baseUrl + data.category + data.hash + '_' + data.filename;
};

exports.getImgUrl = getImgUrl;