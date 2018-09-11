"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup"));

var _CheckBox = _interopRequireDefault(require("../CheckBox"));

var _Input = _interopRequireDefault(require("../Input"));

var _MediaLibrary = _interopRequireDefault(require("../MediaLibrary"));

var _RadioGroup = _interopRequireDefault(require("../RadioGroup"));

var _Select = _interopRequireDefault(require("../Select"));

var _TextArea = _interopRequireDefault(require("../TextArea"));

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

var InputRenderer =
/** @class */
function (_super) {
  __extends(InputRenderer, _super);

  function InputRenderer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  InputRenderer.prototype.render = function () {
    if (!this.props.type) {
      return null;
    }

    switch (this.props.type.toLowerCase()) {
      case 'text':
      case 'string':
      case 'phone':
      case 'email':
      case 'password':
      case 'number':
        return React.createElement(_Input.default, {
          type: this.props.type,
          label: this.props.title ? this.props.title : '',
          name: this.props.name,
          placeholder: this.props.placeholder,
          value: this.props.value,
          onChange: this.props.onChange
        });

      case 'checkbox':
      case 'boolean':
        return React.createElement(_CheckBox.default, {
          label: this.props.title ? this.props.title : '',
          name: this.props.name,
          value: this.props.value && this.props.value.toString() === 'true' ? true : false,
          onChange: this.props.onChange
        });

      case 'enum':
      case 'select':
      case 'multiselect':
        return React.createElement(_Select.default, {
          label: this.props.title ? this.props.title : '',
          name: this.props.name,
          placeholder: this.props.placeholder,
          options: this.props.options ? this.props.options : [],
          value: this.props.value,
          onChange: this.props.onChange
        });

      case 'textarea':
        return React.createElement(_TextArea.default, {
          label: this.props.title ? this.props.title : '',
          notitle: this.props.notitle,
          name: this.props.name,
          rows: this.props.rows,
          value: this.props.value,
          onChange: this.props.onChange
        });

      case 'radiogroup':
        return React.createElement(_RadioGroup.default, {
          label: this.props.title ? this.props.title : '',
          notitle: this.props.notitle,
          name: this.props.name,
          options: this.props.options ? this.props.options : [],
          value: this.props.value,
          onChange: this.props.onChange
        });

      case 'buttongroup':
        return React.createElement(_ButtonGroup.default, {
          label: this.props.title ? this.props.title : '',
          notitle: this.props.notitle,
          name: this.props.name,
          options: this.props.options ? this.props.options : [],
          value: this.props.value,
          onChange: this.props.onChange
        });

      case 'image':
        return React.createElement(_MediaLibrary.default, {
          name: this.props.name,
          mediaData: this.props.value,
          onChange: this.props.mediaLibraryChange
        });

      default:
        return null;
    }
  };

  return InputRenderer;
}(React.Component);

var _default = InputRenderer;
exports.default = _default;