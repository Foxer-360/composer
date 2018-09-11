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

var MyCheckBox =
/** @class */
function (_super) {
  __extends(MyCheckBox, _super);

  function MyCheckBox() {
    var _this = _super !== null && _super.apply(this, arguments) || this; // tslint:disable-next-line:no-any


    _this.handleChange = function (e) {
      _this.props.onChange({
        target: {
          name: _this.props.name,
          value: e.target.checked
        }
      });
    };

    return _this;
  }

  MyCheckBox.prototype.render = function () {
    var _this = this;

    return React.createElement("div", {
      style: {
        paddingBottom: '5px'
      }
    }, React.createElement(_antd.Checkbox, {
      checked: this.props.value,
      // tslint:disable-next-line:no-any
      onChange: function onChange(e) {
        return _this.handleChange(e);
      }
    }, this.props.label));
  };

  return MyCheckBox;
}(React.Component);

var _default = MyCheckBox;
exports.default = _default;