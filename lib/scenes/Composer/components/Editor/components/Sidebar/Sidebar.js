"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _ComponentSelector = _interopRequireDefault(require("./components/ComponentSelector"));

var _FormEditor = _interopRequireDefault(require("./components/FormEditor"));

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

var Sidebar =
/** @class */
function (_super) {
  __extends(Sidebar, _super);

  function Sidebar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Sidebar.prototype.render = function () {
    var _this = this; // const isSelected = Number.isInteger(this.props.selectedComponent);


    var isSelected = this.props.selectedComponent ? true : false; // tslint:disable-next-line:no-console

    console.log('SIDEBAR', isSelected);
    return React.createElement("div", {
      style: {
        padding: '6px'
      }
    }, isSelected ? React.createElement(_FormEditor.default, {
      type: this.props.type,
      data: this.props.data,
      onCancel: this.props.onCancel,
      onChange: this.props.onChange,
      onSave: this.props.onSave,
      componentsService: this.props.componentsService
    }) : React.createElement(_ComponentSelector.default, {
      onAdd: function onAdd(name) {
        return _this.props.onAdd(name);
      },
      componentsService: this.props.componentsService,
      dragStart: this.props.dragStart,
      dragEnd: this.props.dragEnd,
      addContainer: this.props.addContainer,
      layouts: this.props.layouts
    }));
  };

  return Sidebar;
}(React.Component);

var _default = Sidebar;
exports.default = _default;