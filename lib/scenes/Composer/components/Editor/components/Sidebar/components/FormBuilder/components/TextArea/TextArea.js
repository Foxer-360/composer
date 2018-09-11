"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TextArea = _interopRequireDefault(require("antd/es/input/TextArea"));

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

var MyTextArea =
/** @class */
function (_super) {
  __extends(MyTextArea, _super);

  function MyTextArea() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MyTextArea.prototype.render = function () {
    return React.createElement("div", {
      style: {
        paddingBottom: '5px'
      }
    }, this.props.notitle && this.props.notitle === true ? null : React.createElement("label", null, this.props.label), React.createElement(_TextArea.default, {
      name: this.props.name,
      defaultValue: this.props.value,
      placeholder: this.props.placeholder,
      rows: this.props.rows ? this.props.rows : 5,
      onChange: this.props.onChange
    }));
  };

  return MyTextArea;
}(React.Component);

var _default = MyTextArea;
exports.default = _default;