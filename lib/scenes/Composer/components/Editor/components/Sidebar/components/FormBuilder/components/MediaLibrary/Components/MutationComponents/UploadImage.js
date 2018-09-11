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

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var UploadImage =
/** @class */
function (_super) {
  __extends(UploadImage, _super);

  function UploadImage(props) {
    var _this = _super.call(this, props) || this;

    _this.uploadImage = function (fileList, mediaData) {
      var formData = new FormData(); // tslint:disable:no-any

      fileList.forEach(function (file) {
        formData.append('file', file);
        formData.append('category', 'others');
      });

      _this.setState({
        loading: true
      });

      (0, _axios.default)({
        data: formData,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data'
        },
        method: 'post',
        url: process.env.REACT_APP_MEDIA_LIBRARY_SERVER + "/upload"
      }).then(function (response) {
        _this.setState({
          loading: false
        });

        var file = response.data.createFile ? response.data.createFile : response.data.file;

        var image = __assign({}, mediaData, {
          value: file,
          name: 'image'
        });

        if (response.data.createFile) {
          _antd.notification.success({
            description: 'Image uploaded succesfuly',
            message: 'Success'
          });
        } else {
          _antd.notification.success({
            description: 'Image updated',
            message: 'Success'
          });
        }

        if (_this.props.onChange) {
          _this.props.onChange(image);
        }

        if (_this.props.closeEditor) {
          _this.props.closeEditor();
        }
      }).catch(function () {
        _this.setState({
          loading: false
        });

        _antd.notification.error({
          description: 'Could not upload image',
          message: 'Error'
        });
      });
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  UploadImage.prototype.render = function () {
    var _this = this;

    var children = React.Children.map(this.props.children, function (child, index) {
      // tslint:disable:no-any
      return React.cloneElement(child, {
        loading: _this.state.loading,
        uploadImage: _this.uploadImage
      });
    });
    return React.createElement(React.Fragment, null, children);
  };

  return UploadImage;
}(React.Component);

var _default = UploadImage;
exports.default = _default;