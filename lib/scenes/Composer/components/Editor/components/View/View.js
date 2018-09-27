"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("./components/Container"));

var _Frame = _interopRequireDefault(require("./components/Frame"));

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

var View =
/** @class */
function (_super) {
  __extends(View, _super);

  function View() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.arrowHover = function (direction) {
      var frame = document.querySelectorAll('[kwframeid]')[0];

      if (!frame || !frame.contentWindow) {
        return;
      } // setInterval(function() {


      if (direction === 'up') {
        frame.contentWindow.scrollBy({
          top: -400,
          behavior: 'smooth'
        }); // frame.scroll({ top: -100, behavior: 'smooth' });
      } else {
        frame.contentWindow.scrollBy({
          top: 400,
          behavior: 'smooth'
        }); // frame.scroll({ top: 100, behavior: 'smooth' });
      } // }, 1);

    };

    return _this;
  }

  View.prototype.render = function () {
    var _this = this;

    var dragging = this.props.isThereSource;
    return React.createElement("div", {
      className: "composer-content-holder"
    }, React.createElement(_Frame.default, {
      componentsService: this.props.componentsService
    }, React.createElement("div", {
      onDragOver: function onDragOver() {
        return _this.arrowHover('up');
      },
      className: "composerArrow composerArrow__up  " + (dragging ? 'composerArrow__active' : '')
    }, "Scroll Up"), React.createElement(_Container.default, __assign({}, this.props, {
      container: this.props.content.id,
      content: this.props.content.content,
      removeContainer: this.props.removeContainer,
      lockContainer: this.props.lockContainer,
      layouts: this.props.layouts,
      locked: this.props.content.lock,
      context: this.props.context
    })), React.createElement("div", {
      onDragOver: function onDragOver() {
        return _this.arrowHover('down');
      },
      className: "composerArrow composerArrow__down " + (dragging ? 'composerArrow__active' : '')
    }, "Scroll Down")));
  };

  return View;
}(React.Component);

var _default = View;
exports.default = _default;