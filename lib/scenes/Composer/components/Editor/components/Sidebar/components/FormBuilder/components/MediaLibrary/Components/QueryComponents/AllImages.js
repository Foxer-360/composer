"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var _axios = _interopRequireDefault(require("axios"));

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var AllImages =
/** @class */
function (_super) {
  __extends(AllImages, _super);

  function AllImages(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      images: []
    };
    return _this;
  }

  AllImages.prototype.componentDidMount = function () {
    var _this = this;

    (0, _axios.default)({
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      method: 'get',
      url: process.env.REACT_APP_MEDIA_LIBRARY_SERVER + "/find"
    }).then(function (response) {
      _this.setState({
        images: response.data.files
      });
    }).catch(function (response) {
      _antd.notification.error({
        description: 'There was an error fetching images',
        message: 'Error'
      });
    });
  };

  AllImages.prototype.render = function () {
    var _this = this;

    var children = React.Children.map(this.props.children, function (child, index) {
      // tslint:disable:no-any
      return React.cloneElement(child, {
        images: _this.state.images
      });
    });
    return React.createElement(React.Fragment, null, children);
  };

  return AllImages;
}(React.Component);

var _default = AllImages;
exports.default = _default;