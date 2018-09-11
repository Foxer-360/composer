"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

var _Card = _interopRequireDefault(require("../Card"));

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

var ComponentSelector =
/** @class */
function (_super) {
  __extends(ComponentSelector, _super);

  function ComponentSelector() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ComponentSelector.prototype.render = function () {
    var _this = this;

    var data = this.props.componentsService.getAllowedTypes().sort();
    var desc = 'To add new component into content you can drag';
    desc += ' component from list below and drop it to position you want';
    return React.createElement(React.Fragment, null, this.props.layouts && React.createElement("div", {
      style: {
        marginBottom: '16px'
      }
    }, React.createElement(_antd.Button, {
      onClick: this.props.addContainer
    }, "Add Container")), React.createElement(_antd.Alert, {
      message: "Tip",
      description: desc,
      type: "info",
      style: {
        marginBottom: '18px'
      }
    }), React.createElement(_antd.List, {
      dataSource: data,
      renderItem: function renderItem(item) {
        return React.createElement(_antd.List.Item, {
          className: "selector-list-item"
        }, React.createElement("div", {
          onClick: function onClick() {
            return _this.props.onAdd(item);
          },
          style: {
            width: '100%'
          }
        }, React.createElement(_Card.default, {
          dragStart: _this.props.dragStart,
          dragEnd: _this.props.dragEnd,
          type: item
        })));
      }
    }));
  };

  return ComponentSelector;
}(React.Component);

var _default = ComponentSelector;
exports.default = _default;