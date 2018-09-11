"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

var _Editor = _interopRequireDefault(require("../Editor/Editor"));

var _UploadImage = _interopRequireDefault(require("../MutationComponents/UploadImage"));

var _GalleryCard = _interopRequireDefault(require("./components/GalleryCard"));

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

var Gallery =
/** @class */
function (_super) {
  __extends(Gallery, _super);

  function Gallery(props) {
    var _this = _super.call(this, props) || this;

    _this.showDrawer = function (image) {
      if (!image) {
        _this.setState({
          isDrawerVisible: true,
          selectedImage: null
        });
      } else {
        _this.setState({
          isDrawerVisible: true,
          selectedImage: image
        });
      }
    };

    _this.closeDrawer = function () {
      _this.setState({
        isDrawerVisible: false
      });
    };

    _this.onClose = function () {
      _this.setState({
        isDrawerVisible: false
      });
    };

    _this.state = {
      isDrawerVisible: false,
      selectedImage: null
    };
    return _this;
  }

  Gallery.prototype.render = function () {
    var _this = this;

    return React.createElement("div", {
      className: 'mediaLibrary__gallery'
    }, React.createElement(_antd.Row, {
      style: {
        marginBottom: '26px'
      }
    }, React.createElement(_antd.Col, {
      span: 24
    }, React.createElement(_antd.Input.Search, {
      placeholder: "Search and Image"
    }))), React.createElement("hr", {
      className: "hSep"
    }), React.createElement(_antd.Row, null, React.createElement(_antd.Col, {
      span: 24
    }, React.createElement("div", {
      className: 'mediaLibrary__gallery__row'
    }, this.props.images && this.props.images.map(function (item, index) {
      return React.createElement(_GalleryCard.default, {
        key: index,
        toggleEdit: _this.showDrawer,
        placeImg: _this.props.placeImg,
        image: item
      });
    })))), React.createElement("hr", {
      className: "hSep"
    }), React.createElement(_antd.Row, {
      justify: 'center'
    }, React.createElement(_antd.Col, {
      span: 24
    }, React.createElement(_antd.Pagination, {
      defaultCurrent: 1,
      total: 30
    }))), React.createElement(_antd.Drawer, {
      title: "Media Editor",
      placement: "right",
      closable: true,
      onClose: this.onClose,
      visible: this.state.isDrawerVisible,
      destroyOnClose: true,
      width: 500
    }, React.createElement(_UploadImage.default, {
      closeEditor: function closeEditor() {
        return _this.closeDrawer();
      },
      onChange: this.props.placeImg
    }, React.createElement(_Editor.default, {
      image: this.state.selectedImage,
      onChange: function onChange(media) {
        _this.props.placeImg(media);

        _this.closeDrawer();
      },
      closeEditor: function closeEditor() {
        return _this.closeDrawer();
      }
    }))));
  };

  return Gallery;
}(React.Component);

var _default = Gallery;
exports.default = _default;