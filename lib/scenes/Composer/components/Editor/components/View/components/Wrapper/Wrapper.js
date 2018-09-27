"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../../../../../../../utils");

var React = _interopRequireWildcard(require("react"));

var _UserEditor = _interopRequireDefault(require("./components/UserEditor"));

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

var RenderErrorCatcher =
/** @class */
function (_super) {
  __extends(RenderErrorCatcher, _super);

  function RenderErrorCatcher(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      error: null,
      errorInfo: null,
      hasError: false
    };
    return _this;
  }

  RenderErrorCatcher.prototype.componentWillReceiveProps = function () {
    this.setState({
      hasError: false
    });
  };

  RenderErrorCatcher.prototype.componentDidMount = function () {
    this.setState({
      hasError: false
    });
  };

  RenderErrorCatcher.prototype.render = function () {
    if (this.state.hasError) {
      return React.createElement("div", {
        className: "composer-error-render"
      }, React.createElement("h2", null, "Component Render Failed !"), React.createElement("details", null, this.state.error && this.state.error.toString(), React.createElement("br", null), this.state.errorInfo.componentStack));
    }

    return this.props.children;
  }; // tslint:disable-next-line:no-any


  RenderErrorCatcher.prototype.componentDidCatch = function (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
      hasError: true
    });
  };

  return RenderErrorCatcher;
}(React.Component);
/**
 * Component that wrap component in Composer content and
 * drive all component behiever, like editing or re-rendering
 */


var Wrapper =
/** @class */
function (_super) {
  __extends(Wrapper, _super);

  function Wrapper(props) {
    var _this = _super.call(this, props) || this; // Get component content and save it


    var content = __assign({}, props.content[props.position]);

    _this.state = {
      componentContent: (0, _utils.deepCopy)(content),
      isDragging: false
    };
    _this.contextPropertiesHashes = {
      'list': ''
    }; // Bind this for some functions

    _this.handleEdit = _this.handleEdit.bind(_this);
    _this.handleRemove = _this.handleRemove.bind(_this);
    _this.handleDragStart = _this.handleDragStart.bind(_this);
    _this.handleDragEnd = _this.handleDragEnd.bind(_this);
    return _this;
  }

  Wrapper.prototype.componentWillReceiveProps = function (nextProps) {
    // Get component content and save it if it's different
    var content = __assign({}, nextProps.content[nextProps.position]);

    if (!(0, _utils.deepEqual)(__assign({}, content), __assign({}, this.state.componentContent))) {
      this.setState({
        componentContent: (0, _utils.deepCopy)(content)
      });
    }
  };

  Wrapper.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    // Component should update only if data will change. Otherwise re-render is
    // no neccessary
    if (this.contextPropertiesHashes.list !== nextProps.context.getHashOfProperty('list')) {
      return true;
    } // If component is dragging


    if (this.state.isDragging !== nextState.isDragging) {
      return true;
    } // Position of component was changed


    if (this.props.position !== nextProps.position) {
      return true;
    } // Content of component was changed


    var content = nextProps.content[nextProps.position];

    if (!(0, _utils.deepEqual)(__assign({}, content), __assign({}, this.state.componentContent))) {
      return true;
    } // If locked is changed


    if (!this.props.locks && nextProps.locks) {
      return true;
    }

    if (this.props.locks && nextProps.locks) {
      var id_1 = this.props.id;

      var predicate = function predicate(l) {
        if (l.id === id_1) {
          return true;
        }

        return false;
      };

      var f1 = nextProps.locks.find(predicate);
      var f2 = this.props.locks.find(predicate);

      if (f1 !== f2) {
        return true;
      }
    } // Otherwise re-render is no neccessary


    return false;
  };

  Wrapper.prototype.handleEdit = function () {
    this.props.onEdit(this.props.id);
  };

  Wrapper.prototype.handleRemove = function () {
    this.props.onRemove(this.props.id);
  }; // tslint:disable-next-line:no-any


  Wrapper.prototype.handleDragStart = function (e) {
    var data = {
      container: this.props.container,
      index: this.props.id,
      pos: this.props.position * 2 + 1
    };
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d'); // tslint:disable-next-line:no-console

    canvas.width = 300;
    canvas.height = 60;

    if (context) {
      context.beginPath();
      context.lineWidth = 10;
      context.strokeStyle = 'blue';
      context.rect(5, 5, 150, 30);
      context.stroke();
      context.fillStyle = '#73d13d';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'white';
      context.font = 'bold 15px Roboto';
      context.textAlign = 'center';
      context.fillText('Drag Component...', 150, 30);
    }

    e.dataTransfer.setData('application/json', JSON.stringify(data));
    e.dataTransfer.setDragImage(canvas, 150, 30);

    if (this.props.dragStart) {
      this.props.dragStart(data);
    }

    this.setState({
      isDragging: true
    });
  }; // tslint:disable-next-line:no-any


  Wrapper.prototype.handleDragEnd = function (e) {
    if (this.props.dragEnd) {
      this.props.dragEnd();
    }

    this.setState({
      isDragging: false
    });
  };

  Wrapper.prototype.render = function () {
    var _this = this; // tslint:disable-next-line:no-console


    console.log("[RENDER] Wrapper at position " + this.props.position, this.props.locks); // Get component instance   om component service

    var Comp = this.props.componentsService.getComponent(this.props.name); // Simple style for wrapper

    var wrapperStyle = {
      height: 'auto',
      opacity: this.state.isDragging ? 0.3 : 1
    }; // Check if it's locked and get ID of user who lock it

    var locked = false;
    var editor = null; // Check locks

    if (this.props.locks) {
      this.props.locks.forEach(function (l) {
        if (l.editorId === _this.props.me) {
          return;
        }

        if (l.id === _this.props.id) {
          // tslint:disable-next-line:no-console
          console.log("Component " + _this.props.id + " is locked");
          locked = true;
          editor = l.editorId;
        }
      });
    }

    var list = this.props.context.readProperty('list'); // tslint:disable-next-line:no-console

    console.log('{CONTEXT}', this.props.context);

    if (!list || list === undefined) {
      list = false;
    }

    return React.createElement("div", {
      style: wrapperStyle,
      draggable: true,
      onDragStart: this.handleDragStart,
      onDragEnd: this.handleDragEnd
    }, React.createElement("div", {
      className: "wrapper-header"
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, React.createElement("button", {
      className: "ui-button",
      onClick: this.handleEdit,
      disabled: locked
    }, "Edit"), React.createElement("button", {
      className: "ui-button",
      onClick: this.handleRemove,
      disabled: locked
    }, "Remove"), React.createElement("div", {
      className: "editMove"
    })), locked ? React.createElement("div", {
      style: {
        float: 'right',
        marginRight: '16px'
      }
    }, React.createElement(_UserEditor.default, {
      editors: this.props.editors,
      id: editor
    })) : null), React.createElement(RenderErrorCatcher, null, list ? React.createElement(Comp, {
      data: this.props.content[this.props.position].data,
      list: list
    }) : React.createElement(Comp, {
      data: this.props.content[this.props.position].data
    })));
  };

  return Wrapper;
}(React.Component);

var _default = Wrapper;
exports.default = _default;