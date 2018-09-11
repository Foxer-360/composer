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

var UserEditor =
/** @class */
function (_super) {
  __extends(UserEditor, _super);

  function UserEditor(props) {
    return _super.call(this, props) || this;
  }

  UserEditor.prototype.render = function () {
    var user = this.findUser();
    var name = user.id;

    if (user.name && user.name.length > 0) {
      name = user.name;
    }

    if (!name || name === null) {
      name = 'Undefined';
    } // let hasOwnIcon = false;
    // if (user.icon && user.icon.length > 0) {
    //   hasOwnIcon = true;
    // }


    return React.createElement("div", {
      title: name,
      className: "avatar"
    }); // return (
    //   <Tooltip title={name}>
    //     {hasOwnIcon ? <Avatar src={user.icon} /> : <Avatar icon="user" />}
    //   </Tooltip>
    // );
  };

  UserEditor.prototype.findUser = function () {
    var _this = this;

    if (!this.props.editors) {
      return {
        id: this.props.id
      };
    }

    var user = this.props.editors.find(function (e) {
      if (e.id === _this.props.id) {
        return true;
      }

      return false;
    });

    if (!user || user === null) {
      return {
        id: this.props.id
      };
    }

    return user;
  };

  return UserEditor;
}(React.Component);

var _default = UserEditor;
exports.default = _default;