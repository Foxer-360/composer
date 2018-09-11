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

var Card =
/** @class */
function (_super) {
  __extends(Card, _super);

  function Card(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      isDragging: false
    };
    _this.handleDragStart = _this.handleDragStart.bind(_this);
    _this.handleDragEnd = _this.handleDragEnd.bind(_this);
    return _this;
  }

  Card.prototype.handleDragStart = function (e) {
    var data = {
      index: -1,
      pos: -1,
      type: this.props.type
    };
    e.dataTransfer.setData('application/json', JSON.stringify(data));

    if (this.props.dragStart) {
      this.props.dragStart(data);
    }

    this.setState(__assign({}, this.state, {
      isDragging: true
    }));
  };

  Card.prototype.handleDragEnd = function (e) {
    if (this.props.dragEnd) {
      this.props.dragEnd();
    }

    this.setState(__assign({}, this.state, {
      isDragging: false
    }));
  };

  Card.prototype.render = function () {
    return React.createElement("div", {
      draggable: true,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd,
      style: {
        width: '100%'
      }
    }, React.createElement(_antd.List.Item.Meta, {
      avatar: React.createElement(_antd.Icon, {
        type: "credit-card",
        style: {
          fontSize: 24,
          width: '100%'
        }
      }),
      title: React.createElement("span", {
        style: {
          fontSize: '16px'
        }
      }, this.props.type)
    }));
  };

  return Card;
}(React.Component);

var _default = Card;
exports.default = _default;