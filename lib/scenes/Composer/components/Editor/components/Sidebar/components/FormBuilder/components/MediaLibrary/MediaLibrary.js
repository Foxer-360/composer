"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../../../../../../../../../utils");

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

var _Editor = _interopRequireDefault(require("./Components/Editor"));

var _Gallery = _interopRequireDefault(require("./Components/Gallery"));

var _UploadImage = _interopRequireDefault(require("./Components/MutationComponents/UploadImage"));

var _QueryComponents = _interopRequireDefault(require("./Components/QueryComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var MediaLibrary =
/** @class */
function (_super) {
  __extends(MediaLibrary, _super);

  function MediaLibrary(props) {
    var _this = _super.call(this, props) || this;

    _this.showDrawer = function (type) {
      _this.setState({
        drawerType: type,
        visible: true
      });
    };

    _this.closeDrawer = function () {
      _this.setState({
        visible: false
      });
    };

    _this.onClose = function () {
      _this.setState({
        visible: false
      });
    };

    _this.onChangeAlt = function (altValue) {
      var data = {
        value: __assign({}, _this.props.mediaData, {
          alt: altValue
        }),
        name: 'image'
      };

      _this.props.onChange(data);
    };

    _this.state = {
      drawerType: 'editor',
      visible: false
    };
    return _this;
  }

  MediaLibrary.prototype.dropImage = function () {
    this.props.onChange({
      value: null,
      name: 'image'
    });
  };

  MediaLibrary.prototype.render = function () {
    var _this = this;

    var mediaData = this.props.mediaData;
    return React.createElement("div", null, React.createElement("div", {
      className: 'ant-divider ant-divider-horizontal ant-divider-with-text-left'
    }, React.createElement("span", {
      className: 'ant-divider-inner-text'
    }, this.state.drawerType === 'editor' ? 'Media Editor' : 'Media Library')), mediaData && mediaData.filename && React.createElement("div", {
      className: 'ant-upload ant-upload-select ant-upload-select-picture-card',
      onClick: function onClick() {
        return _this.showDrawer('editor');
      },
      style: {
        margin: '32px auto',
        width: '100%',
        maxWidth: '250px'
      }
    }, React.createElement("span", {
      className: 'ant-upload'
    }, React.createElement("img", {
      style: {
        width: '100%'
      },
      src: (0, _utils.getImgUrl)(mediaData),
      alt: "file"
    }))), React.createElement(_antd.Row, {
      style: {
        margin: '0 0 24px'
      }
    }, React.createElement(_antd.Col, {
      span: 24
    }, React.createElement("label", null, "Image alt text "), React.createElement(_antd.Input, {
      onChange: function onChange(e) {
        return _this.onChangeAlt(e.target.value);
      },
      value: mediaData && mediaData.alt ? mediaData.alt : '',
      placeholder: 'Alt Text'
    }))), React.createElement(_antd.Row, {
      gutter: 6,
      style: {
        display: 'flex',
        justifyContent: 'left',
        padding: '0 3px'
      }
    }, React.createElement(_antd.Button, {
      onClick: function onClick() {
        return _this.showDrawer('editor');
      },
      style: {
        marginRight: '16px',
        minWidth: '105px'
      }
    }, React.createElement(_antd.Icon, {
      type: 'upload'
    }), " Upload"), React.createElement(_antd.Button, {
      type: "primary",
      icon: "search",
      onClick: function onClick() {
        return _this.showDrawer('gallery');
      },
      style: {
        minWidth: '105px',
        marginRight: '16px'
      }
    }, "Search"), mediaData && React.createElement(_antd.Popconfirm, {
      placement: "topLeft",
      title: 'Are you sure you want to delete the image?',
      okText: "Yes",
      onConfirm: function onConfirm() {
        return _this.dropImage();
      },
      cancelText: "No",
      icon: React.createElement(_antd.Icon, {
        type: "exclamation-circle",
        style: {
          color: 'red',
          fontSize: '16px'
        }
      })
    }, React.createElement(_antd.Button, {
      type: 'danger'
    }, React.createElement(_antd.Icon, {
      type: 'close-circle'
    })))), React.createElement(_antd.Drawer, {
      title: "Media Library",
      placement: "right",
      closable: true,
      onClose: this.onClose,
      visible: this.state.visible,
      width: 500,
      zIndex: 1,
      destroyOnClose: true
    }, this.state.drawerType === 'editor' ? React.createElement(_UploadImage.default, {
      closeEditor: function closeEditor() {
        return _this.closeDrawer();
      },
      onChange: this.props.onChange
    }, React.createElement(_Editor.default, {
      image: mediaData,
      onChange: function onChange(media) {
        _this.props.onChange(media);

        _this.closeDrawer();
      },
      closeEditor: function closeEditor() {
        return _this.closeDrawer();
      }
    })) : React.createElement(_QueryComponents.default, null, React.createElement(_Gallery.default, {
      placeImg: this.props.onChange,
      image: mediaData
    }))), React.createElement("hr", {
      className: 'hSep'
    }));
  };

  return MediaLibrary;
}(React.Component);

var _default = MediaLibrary;
exports.default = _default;