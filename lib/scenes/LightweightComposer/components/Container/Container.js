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

var Container =
/** @class */
function (_super) {
  __extends(Container, _super);

  function Container(props) {
    return _super.call(this, props) || this;
  }

  Container.prototype.render = function () {
    var _this = this;

    if (!this.props.content || this.props.content.length < 1) {
      return null;
    }

    var MappedContent = this.props.content.map(function (node) {
      if (node.type === 'container') {
        return React.createElement(Container, {
          content: node.content,
          componentModule: _this.props.componentModule,
          context: _this.props.context,
          key: node.id
        });
      } else {
        var Comp = _this.props.componentModule.getComponent(node.name);

        var navigations = _this.props.context.readProperty('navigations');

        var languages = _this.props.context.readProperty('languages');

        return React.createElement(Comp, {
          data: node.data,
          navigations: navigations,
          languages: languages,
          key: node.id
        });
      }
    });
    return React.createElement("div", {
      className: "layout"
    }, MappedContent);
  };

  return Container;
}(React.Component);

var _default = Container;
exports.default = _default;