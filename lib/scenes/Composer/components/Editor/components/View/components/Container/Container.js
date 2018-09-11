"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Slot = _interopRequireDefault(require("../Slot"));

var _Wrapper = _interopRequireDefault(require("../Wrapper"));

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

var Container =
/** @class */
function (_super) {
  __extends(Container, _super);

  function Container(props) {
    return _super.call(this, props) || this;
  }

  Container.prototype.render = function () {
    var _this = this;

    var position = 0;
    var className = 'layout';

    if (this.props.layouts && this.props.container !== 'root') {
      className += ' active';
    }

    return React.createElement("div", {
      className: className
    }, this.props.layouts && React.createElement("div", {
      className: "containerEditor"
    }, React.createElement("button", {
      className: "antBtn black",
      onClick: function onClick() {
        return _this.props.removeContainer(_this.props.container ? _this.props.container : '');
      }
    }, "Remove"), React.createElement("button", {
      className: "antBtn " + (this.props.locked ? 'green' : 'red'),
      onClick: function onClick() {
        return _this.props.lockContainer(_this.props.container ? _this.props.container : '', !_this.props.locked);
      }
    }, this.props.locked ? 'Unlock' : 'Lock')), React.createElement(_Slot.default, {
      pos: position++,
      isThereSource: this.props.isThereSource,
      sourceData: this.props.sourceData,
      moveComponent: this.props.moveComponent,
      addComponent: this.props.addComponent,
      componentsService: this.props.componentsService,
      container: this.props.container,
      containerLocked: this.props.locked
    }), this.props.content && this.props.content.map(function (component, index) {
      if (component.type === 'container') {
        // It it's container
        return React.createElement(Container, __assign({}, _this.props, {
          container: component.id,
          content: component.content,
          removeContainer: _this.props.removeContainer,
          lockContainer: _this.props.lockContainer,
          layouts: _this.props.layouts,
          locked: component.lock
        }));
      } else {
        // If it's component
        return React.createElement("div", {
          key: index
        }, React.createElement(_Slot.default, {
          pos: position++,
          isThereSource: _this.props.isThereSource,
          sourceData: _this.props.sourceData,
          moveComponent: _this.props.moveComponent,
          addComponent: _this.props.addComponent,
          componentsService: _this.props.componentsService,
          container: _this.props.container,
          containerLocked: _this.props.locked
        }, React.createElement(_Wrapper.default, {
          content: _this.props.content,
          id: component.id,
          position: index,
          name: component.name,
          onEdit: _this.props.onEdit,
          onRemove: _this.props.onRemove,
          dragStart: _this.props.dragStart,
          dragEnd: _this.props.dragEnd,
          componentsService: _this.props.componentsService,
          editors: _this.props.editors,
          locks: _this.props.locks,
          me: _this.props.me
        })), React.createElement(_Slot.default, {
          pos: position++,
          isThereSource: _this.props.isThereSource,
          sourceData: _this.props.sourceData,
          moveComponent: _this.props.moveComponent,
          addComponent: _this.props.addComponent,
          componentsService: _this.props.componentsService,
          container: _this.props.container,
          containerLocked: _this.props.locked
        }));
      }
    }));
  };

  return Container;
}(React.Component);

var _default = Container;
exports.default = _default;