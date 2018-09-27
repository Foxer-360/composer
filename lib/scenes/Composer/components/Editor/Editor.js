"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _delta = require("@foxer360/delta");

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

var _DelayComponent = _interopRequireDefault(require("./components/DelayComponent"));

var _Sidebar = _interopRequireDefault(require("./components/Sidebar"));

var _View = _interopRequireDefault(require("./components/View"));

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

var Editor =
/** @class */
function (_super) {
  __extends(Editor, _super);

  function Editor(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      activeSourceData: null,
      isSomethingDragging: false
    };
    _this.onDragStart = _this.onDragStart.bind(_this);
    _this.onDragStop = _this.onDragStop.bind(_this);
    return _this;
  } // When drag start


  Editor.prototype.onDragStart = function (data) {
    this.setState({
      activeSourceData: data,
      isSomethingDragging: true
    });
  }; // When drag stop


  Editor.prototype.onDragStop = function () {
    this.setState({
      activeSourceData: null,
      isSomethingDragging: false
    });
  };

  Editor.prototype.handleAdd = function (name) {
    var res = this.props.componentsService.getComponentResource(name);
    this.props.addComponent(res, -1, 'root');
  };

  Editor.prototype.getComponentFromContent = function () {
    var id = this.props.selectedComponent;
    return (0, _delta.getObjectFromContent)(this.props.content, id + ''); // if (id === null) {
    //   return null as ILooseObject;
    // }
    // let res = null as ILooseObject;
    // this.props.content.forEach((c: ILooseObject) => {
    //   if (c.id === id) {
    //     res = c;
    //   }
    // }, this);
    // return res;
  };

  Editor.prototype.render = function () {
    var _this = this;

    var type = '';
    var data = {};
    var component = this.getComponentFromContent();

    if (component !== null) {
      type = component.name;
      data = component.data; // tslint:disable-next-line:no-console

      console.log(component);
    }

    var Title = React.createElement("h3", {
      style: {
        paddingBottom: 0,
        marginBottom: 0
      }
    }, React.createElement(_antd.Icon, {
      type: "appstore",
      style: {
        marginRight: '8px'
      }
    }), "Components");

    if (this.props.selectedComponent) {
      Title = React.createElement("h3", {
        style: {
          paddingBottom: 0,
          marginBottom: 0
        }
      }, React.createElement(_antd.Icon, {
        type: "edit",
        style: {
          marginRight: '8px'
        }
      }), type);
    }

    var PageName = React.createElement("h3", {
      style: {
        paddingBottom: 0,
        marginBottom: 0
      }
    }, this.props.pageName);
    var size = 16;
    return React.createElement("div", {
      className: 'editor'
    }, React.createElement(_antd.Row, null, React.createElement(_antd.Col, {
      span: size
    }, React.createElement(_antd.Card, {
      title: PageName
    }, !this.props.content || this.props.content.length < 1 ? React.createElement(_DelayComponent.default, {
      delay: 100
    }, React.createElement(_antd.Alert, {
      message: "Add your first component",
      description: "There is no component yet. Please add your first\n                  component from selector on the right side.",
      type: "success"
    })) : null, React.createElement(_View.default, {
      content: this.props.content,
      onEdit: this.props.selectComponent,
      onRemove: this.props.removeComponent,
      editors: this.props.editors,
      locks: this.props.locks,
      me: this.props.me,
      dragStart: this.onDragStart,
      dragEnd: this.onDragStop,
      isThereSource: this.state.isSomethingDragging,
      sourceData: this.state.activeSourceData,
      moveComponent: this.props.moveComponent,
      addComponent: this.props.addComponent,
      componentsService: this.props.componentsService,
      removeContainer: this.props.removeContainer,
      lockContainer: this.props.lockContainer,
      layouts: this.props.layouts,
      context: this.props.context
    }))), React.createElement(_antd.Col, {
      span: 24 - size,
      style: {
        paddingLeft: '10px'
      }
    }, React.createElement(_antd.Card, {
      title: Title
    }, React.createElement(_Sidebar.default, {
      type: type,
      data: data,
      onAdd: function onAdd(name) {
        return _this.handleAdd(name);
      },
      selectedComponent: this.props.selectedComponent,
      onChange: this.props.updateComponent,
      onCancel: this.props.cancelComponent,
      onSave: this.props.saveComponent,
      componentsService: this.props.componentsService,
      dragStart: this.onDragStart,
      dragEnd: this.onDragStop,
      addContainer: this.props.addContainer,
      layouts: this.props.layouts
    })))));
  };

  return Editor;
}(React.Component);

var _default = Editor;
exports.default = _default;