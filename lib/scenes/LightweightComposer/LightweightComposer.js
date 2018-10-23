"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("./components/Container"));

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

var LightweightComposer =
/** @class */
function (_super) {
  __extends(LightweightComposer, _super);

  function LightweightComposer(props) {
    var _this = _super.call(this, props) || this;

    _this.pluginsInstances = [];
    props.plugins.forEach(function (name) {
      var Plugin = props.pluginModule.getPlugin(name);

      if (Plugin) {
        _this.pluginsInstances[name] = new Plugin(props.context, null, props.client);
        props.context.addListener(name, function () {
          _this.forceUpdate();
        });
      }
    });
    return _this;
  }

  LightweightComposer.prototype.render = function () {
    return React.createElement(_Container.default, {
      content: this.props.content.content,
      componentModule: this.props.componentModule,
      context: this.props.context
    });
  };

  return LightweightComposer;
}(React.Component);

var _default = LightweightComposer;
exports.default = _default;