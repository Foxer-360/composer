"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var ButtonGroup =
/** @class */
function (_super) {
  __extends(ButtonGroup, _super);

  function ButtonGroup(props) {
    var _this = _super.call(this, props) || this;

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  } // tslint:disable-next-line:no-any


  ButtonGroup.prototype.handleChange = function (e) {
    this.props.onChange({
      target: {
        name: this.props.name,
        value: e.target.value
      }
    });
  };

  ButtonGroup.prototype.render = function () {
    var options = this.props.options;

    if (!options) {
      return null;
    }

    return React.createElement("div", {
      style: {
        paddingBottom: '5px'
      }
    }, this.props.notitle && this.props.notitle === true ? null : React.createElement("div", null, React.createElement("label", null, this.props.label)), React.createElement(_antd.Radio.Group, {
      onChange: this.handleChange,
      defaultValue: this.props.value,
      buttonStyle: "solid"
    }, Object.keys(options).map(function (key, index) {
      return React.createElement(_antd.Radio.Button, {
        key: index,
        value: key
      }, options[key]);
    })));
  };

  return ButtonGroup;
}(React.Component);

var _default = ButtonGroup;
exports.default = _default;