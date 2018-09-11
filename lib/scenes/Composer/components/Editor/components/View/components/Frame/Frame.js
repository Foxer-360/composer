"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactFrameComponent = _interopRequireDefault(require("react-frame-component"));

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

var FrameContentTemplate = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=0.5\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/frame.css\"><styles-template>  </head>\n  <body>\n    <div id=\"mountHere\"></div>\n  </body>\n</html>";
var EmptyFrameContent = FrameContentTemplate.replace('<styles-template>', '\n');
var simpleStyle = {
  border: 'none',
  height: 'calc(100% * 1.69)',
  transform: 'scale(0.59)',
  transformOrigin: '0 0',
  width: 'calc(100% * 1.7)'
};

var Frame =
/** @class */
function (_super) {
  __extends(Frame, _super);

  function Frame() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Frame.prototype.render = function () {
    var initContent = this.generateFrameContent();
    return React.createElement(_reactFrameComponent.default, {
      initialContent: initContent,
      mountTarget: "#mountHere",
      style: simpleStyle
    }, React.createElement("div", null, this.props.children ? this.props.children : null));
  };

  Frame.prototype.generateFrameContent = function () {
    if (!this.props.componentsService) {
      return EmptyFrameContent;
    } // tslint:disable-next-line:no-any


    var styles = this.props.componentsService.getStyles();

    if (styles.length < 1) {
      return EmptyFrameContent;
    }

    var generated = this.generateStyleLinks(styles);
    var content = FrameContentTemplate.replace('<styles-template>', generated);
    return content;
  };

  Frame.prototype.generateStyleLinks = function (styles) {
    var res = '\n';
    styles.forEach(function (style) {
      res += "    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + style + "\">\n";
    });
    return res;
  };

  return Frame;
}(React.Component);

var _default = Frame;
exports.default = _default;