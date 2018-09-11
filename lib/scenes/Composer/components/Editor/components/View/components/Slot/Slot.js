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

var Slot =
/** @class */
function (_super) {
  __extends(Slot, _super);

  function Slot(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      canDrop: false,
      isOver: false
    };
    _this.handleDragOver = _this.handleDragOver.bind(_this);
    _this.handleDrop = _this.handleDrop.bind(_this);
    _this.handleDragEnter = _this.handleDragEnter.bind(_this);
    _this.handleDragLeave = _this.handleDragLeave.bind(_this);
    return _this;
  }

  Slot.prototype.componentWillReceiveProps = function (nextProps) {
    var canDrop = false;

    if (nextProps.isThereSource && nextProps.sourceData) {
      // We can drop if some rules apply
      var source = nextProps.sourceData;
      canDrop = this.handleCanDrop(nextProps, source);
    }

    this.setState({
      canDrop: canDrop
    });
  };

  Slot.prototype.handleCanDrop = function (props, source) {
    if (this.props.containerLocked) {
      return false;
    }

    if (source.container && source.container !== this.props.container) {
      // tslint:disable-next-line:no-console
      console.log('Hola', source, this.props);
      return false;
    }

    if (source.pos < 0 && props.pos % 2 !== 1) {
      return true;
    }

    if (props.pos % 2 === 1 && source.pos !== props.pos) {
      return false;
    } // And also can't drop into position before and after


    if (props.pos === source.pos - 1 || props.pos === source.pos + 1) {
      return false;
    } // Can drop into actual position (it's redundant operation)


    if (props.pos === source.pos) {
      return false;
    } // Others can be dropped


    return true;
  }; // tslint:disable-next-line:no-any


  Slot.prototype.handleDragOver = function (e) {
    if (this.state.canDrop) {
      e.preventDefault();
    }
  }; // tslint:disable-next-line:no-any


  Slot.prototype.handleDrop = function (e) {
    if (this.props.pos % 2 === 1) {
      this.setState({
        isOver: false
      });
      return;
    }

    var data = JSON.parse(e.dataTransfer.getData('application/json'));
    var index = data.index;
    var pos = this.props.pos / 2; // If index is below zero, it's new component

    if (index < 0) {
      var res = this.props.componentsService.getComponentResource(data.type);

      if (this.props.container) {
        this.props.addComponent(res, pos, this.props.container);
      }
    } else {
      this.props.moveComponent(index, pos);
    }

    this.setState({
      isOver: false
    });
  }; // tslint:disable-next-line:no-any


  Slot.prototype.handleDragEnter = function (e) {
    if (this.state.canDrop) {
      this.setState({
        isOver: true
      });
    }
  }; // tslint:disable-next-line:no-any


  Slot.prototype.handleDragLeave = function (e) {
    this.setState({
      isOver: false
    });
  };

  Slot.prototype.render = function () {
    var className = 'target';

    if (this.state.canDrop) {
      className += ' can-drop';
    }

    if (this.state.isOver) {
      className += ' active';
    }

    var fontSize = 'unset';

    if (!this.props.children) {
      if (!(this.state.canDrop || this.state.isOver)) {
        fontSize = '0px';
      }
    }

    return React.createElement("div", {
      className: className,
      onDragOver: this.handleDragOver,
      onDrop: this.handleDrop,
      onDragEnter: this.handleDragEnter,
      onDragLeave: this.handleDragLeave,
      style: {
        fontSize: fontSize,
        textAlign: this.props.children ? 'unset' : 'center'
      }
    }, this.props.children ? this.props.children : 'You can place component right here');
  };

  return Slot;
}(React.Component);

var _default = Slot;
exports.default = _default;