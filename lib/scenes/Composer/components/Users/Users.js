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

var style = {
  listStyleType: 'none',
  margin: '0px',
  padding: '0px',
  width: '155px'
};

var Users =
/** @class */
function (_super) {
  __extends(Users, _super);

  function Users(props) {
    return _super.call(this, props) || this;
  }

  Users.prototype.render = function () {
    return React.createElement("ul", {
      style: style
    }, this.props.editors.map(function (e, i) {
      var name = e.id;

      if (e.name && e.name.length > 0) {
        name = e.name;
      }

      var hasOwnIcon = false;

      if (e.icon && e.icon.length > 0) {
        hasOwnIcon = true;
      }

      return React.createElement("li", {
        key: i,
        style: {
          display: 'inline-block'
        }
      }, React.createElement(_antd.Tooltip, {
        key: i,
        title: name
      }, React.createElement("div", {
        style: {
          display: 'inline',
          marginRight: '6px'
        }
      }, hasOwnIcon ? React.createElement(_antd.Avatar, {
        src: e.icon
      }) : React.createElement(_antd.Avatar, {
        icon: "user"
      }))));
    }));
  };

  return Users;
}(React.Component);

var _default = Users;
exports.default = _default;