"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

var _FormBuilder = _interopRequireDefault(require("../FormBuilder"));

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

var FormEditor =
/** @class */
function (_super) {
  __extends(FormEditor, _super);

  function FormEditor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FormEditor.prototype.render = function () {
    var type = this.props.type || '';
    var resource = this.props.componentsService.getComponentResource(type) || null;
    var formResource = resource && resource.form ? resource.form : null;
    var Form = this.props.componentsService.getForm(type);
    var navigations = this.props.context.readProperty('navigations');
    return React.createElement("div", {
      className: 'formEditor'
    }, formResource ? React.createElement(_FormBuilder.default, {
      form: formResource,
      data: this.props.data,
      onChange: this.props.onChange,
      navigations: navigations
    }) : React.createElement(Form, {
      data: this.props.data,
      onChange: this.props.onChange,
      navigations: navigations
    }), React.createElement("hr", {
      style: {
        border: '0',
        borderTop: '1px solid #e6e6e6',
        marginBottom: '12px',
        marginTop: '24px'
      }
    }), React.createElement(_antd.Button, {
      type: "primary",
      onClick: this.props.onSave
    }, React.createElement(_antd.Icon, {
      type: "save"
    }), "Save Changes"), React.createElement(_antd.Button, {
      type: "danger",
      onClick: this.props.onCancel,
      style: {
        marginLeft: '5px'
      }
    }, "Cancel"));
  };

  return FormEditor;
}(React.Component);

var _default = FormEditor;
exports.default = _default;