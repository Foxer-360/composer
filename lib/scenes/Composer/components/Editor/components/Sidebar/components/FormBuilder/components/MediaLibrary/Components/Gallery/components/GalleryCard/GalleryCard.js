"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../../../../../../../../../../../../../utils");

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var GalleryCard = function GalleryCard(_a) {
  var toggleEdit = _a.toggleEdit,
      placeImg = _a.placeImg,
      image = _a.image;
  return React.createElement("div", {
    className: 'ant-upload-list ant-upload-list-picture-card'
  }, React.createElement("div", {
    className: "ant-upload-list-item ant-upload-list-item-done"
  }, React.createElement("div", {
    className: "ant-upload-list-item-info"
  }, React.createElement("div", {
    className: 'mediaLibrary__gallery__img',
    style: {
      backgroundImage: "url(" + (0, _utils.getImgUrl)(image) + ")"
    }
  })), React.createElement("span", {
    className: 'ant-upload-list-item-actions'
  }, React.createElement(_antd.Icon, {
    type: "eye-o",
    onClick: function onClick() {
      return toggleEdit(image);
    },
    style: {
      cursor: 'pointer',
      fontSize: '24px',
      color: 'white',
      margin: '0 10px'
    }
  }))));
};

var _default = GalleryCard;
exports.default = _default;