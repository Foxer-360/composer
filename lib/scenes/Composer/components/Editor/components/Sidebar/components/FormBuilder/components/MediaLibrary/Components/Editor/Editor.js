"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../../../../../../../../../../../utils");

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

var Editor =
/** @class */
function (_super) {
  __extends(Editor, _super);

  function Editor(props) {
    var _this = _super.call(this, props) || this; // tslint:disable:no-any


    _this.getImageInfo = function (image) {
      var mb = parseInt(image.size, 0) / 1048576;
      return '400 x 400' + ' - ' + mb.toFixed(4) + 'Mb ';
    };

    _this.state = {
      fileList: [],
      image64: null
    };
    return _this;
  }

  Editor.prototype.componentWillUnmount = function () {
    this.setState({
      fileList: null,
      image64: null
    });
  };

  Editor.prototype.render = function () {
    var _this = this;

    var uploadButton = React.createElement("div", null, React.createElement(_antd.Icon, {
      type: this.props.loading ? 'loading' : 'plus'
    }), React.createElement("div", {
      className: "ant-upload-text"
    }, this.props.loading ? 'Uploading...' : 'Upload', " "));
    var props = {
      beforeUpload: function beforeUpload(file) {
        getBase64(file, function (image64) {
          file.base64 = image64;

          _this.setState({
            fileList: [file]
          });
        });
        return false;
      },
      className: 'avatar-uploader',
      fileList: this.state.fileList,
      multiple: false,
      name: 'file',
      showUploadList: false
    };
    var image = this.props.image;
    var uploadedFile = this.state.fileList[0];
    var imageBase64 = uploadedFile && uploadedFile.base64;
    return React.createElement("div", {
      className: "mediaLibrary__editor"
    }, this.props.loading && React.createElement("div", {
      className: 'mediaLibrary__editor__spin'
    }, React.createElement(_antd.Spin, null)), !this.props.loading && React.createElement(React.Fragment, null, React.createElement(_antd.Row, null, React.createElement(_antd.Col, {
      span: 24
    }, React.createElement(_antd.Upload, __assign({}, props, {
      listType: 'picture-card'
    }), imageBase64 && React.createElement("img", {
      src: imageBase64,
      alt: "file"
    }), image && !imageBase64 && React.createElement("img", {
      src: (0, _utils.getImgUrl)(image),
      alt: "file"
    }), !imageBase64 && !image && uploadButton), React.createElement("p", {
      className: "imageInfo"
    }, !uploadedFile && image && this.getImageInfo(image), uploadedFile && this.getImageInfo(uploadedFile)), React.createElement("p", {
      className: "imageInfo"
    }, uploadedFile && uploadedFile.name, !uploadedFile && image && image.filename))), React.createElement("hr", {
      className: 'hSep'
    }), React.createElement(_antd.Row, null, React.createElement(_antd.Col, {
      span: 24
    }, React.createElement(_antd.Button, {
      type: 'primary',
      onClick: function onClick() {
        if (imageBase64) {
          if (_this.props.uploadImage) {
            _this.props.uploadImage(_this.state.fileList, image);
          }
        } else {
          if (_this.props.onChange) {
            _this.props.onChange({
              value: image,
              name: 'image'
            });
          }
        }
      },
      style: {
        marginRight: '16px'
      }
    }, "Place"), React.createElement(_antd.Button, {
      type: "danger",
      onClick: function onClick() {
        if (_this.props.closeEditor) {
          _this.props.closeEditor();
        }
      }
    }, "Close")))));
  };

  return Editor;
}(React.Component);

var _default = Editor;
exports.default = _default;