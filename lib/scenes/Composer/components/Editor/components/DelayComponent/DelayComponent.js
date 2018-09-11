"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var DelayComponent =
/** @class */
function (_super) {
  __extends(DelayComponent, _super);

  function DelayComponent(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      hidden: true
    };
    return _this;
  }

  DelayComponent.prototype.componentWillMount = function () {
    var _this = this;

    if (!this.props.delay) {
      this.setState({
        hidden: false
      });
      return;
    }

    setTimeout(function () {
      _this.setState({
        hidden: false
      });
    }, this.props.delay);
  };

  DelayComponent.prototype.render = function () {
    var className = 'delay-component';

    if (this.state.hidden) {
      className += ' hide';
    }

    return React.createElement("div", {
      className: className
    }, this.props.children);
  };

  return DelayComponent;
}(React.Component);

var _default = DelayComponent;
exports.default = _default;