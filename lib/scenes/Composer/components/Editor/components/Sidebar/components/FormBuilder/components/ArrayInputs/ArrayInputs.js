"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var React = _interopRequireWildcard(require("react"));

var _InputRenderer = _interopRequireDefault(require("../InputRenderer"));

var _Section = _interopRequireDefault(require("../Section"));

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

var ArrayInputs =
/** @class */
function (_super) {
  __extends(ArrayInputs, _super);

  function ArrayInputs(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      activeTab: 0
    };
    _this.onChange = _this.onChange.bind(_this);
    _this.mediaLibraryChange = _this.mediaLibraryChange.bind(_this);
    return _this;
  }

  ArrayInputs.prototype.onChangeTab = function (key) {
    this.setState({
      activeTab: parseInt(key, 10)
    });
  };

  ArrayInputs.prototype.onNewTab = function () {
    var newData = this.props.data.slice();
    newData.push({});
    var newTab = newData.length - 1;
    this.props.onChange({
      target: {
        name: this.props.name,
        value: newData
      }
    });
    this.setState({
      activeTab: newTab
    });
  };

  ArrayInputs.prototype.onEditTab = function (targetKey, action) {
    var iKey = parseInt(targetKey, 10);
    var newData = this.props.data.slice();
    var newTab = this.state.activeTab; // remove tab

    if (action === 'remove') {
      newData.splice(iKey, 1);

      if (newTab > iKey || iKey === newTab) {
        newTab = newTab - 1;
      }

      if (newTab < 0) {
        newTab = 0;
      }
    }

    this.props.onChange({
      target: {
        name: this.props.name,
        value: newData
      }
    });
    this.setState({
      activeTab: newTab
    });
  }; // tslint:disable-next-line:no-any


  ArrayInputs.prototype.onChange = function (key) {
    var newData = this.props.data.slice();
    newData[this.state.activeTab][key.target.name] = key.target.value;
    this.props.onChange({
      target: {
        name: this.props.name,
        value: newData
      }
    });
  };

  ArrayInputs.prototype.mediaLibraryChange = function (media) {
    var newData = this.props.data.slice();
    newData[this.state.activeTab][media.name] = media.value;
    this.props.onChange({
      target: {
        name: this.props.name,
        value: newData
      }
    });
  };

  ArrayInputs.prototype.render = function () {
    var _this = this; // tslint:disable-next-line:no-any


    var onEdit = function onEdit(targetKey, action) {
      if (action === 'add') {
        _this.onNewTab();
      }

      if (typeof targetKey === 'string') {
        _this.onEditTab(targetKey, action);
      }
    };

    return React.createElement(_Section.default, {
      title: this.props.title
    }, React.createElement(_antd.Tabs, {
      type: "editable-card",
      activeKey: this.state.activeTab.toString(),
      onChange: function onChange(key) {
        return _this.onChangeTab(key);
      },
      onEdit: onEdit
    }, this.props.data && this.props.data.map(function (dataRow, index) {
      var tabTitle = React.createElement(React.Fragment, null, index + 1, React.createElement(_antd.Popconfirm, {
        title: "Are you sure delete this tab?",
        onConfirm: function onConfirm() {
          return _this.onEditTab(index.toString(), 'remove');
        },
        okText: "Yes",
        cancelText: "No"
      }, React.createElement(_antd.Icon, {
        type: "close",
        theme: "outlined",
        style: {
          marginLeft: '5px',
          marginRight: '-13px',
          fontSize: '.6em'
        },
        className: "anticon anticon-close ant-tabs-close-x"
      })));
      return React.createElement(_antd.Tabs.TabPane, {
        key: index,
        tab: tabTitle,
        closable: false
      }, _this.props.items && _this.props.items.properties && Object.keys(_this.props.items.properties).map(function (elementName, j) {
        var element = _this.props.items.properties[elementName];
        return React.createElement(_InputRenderer.default, __assign({
          key: j,
          name: elementName,
          language: _this.props.language
        }, element, {
          value: _this.props.data && _this.props.data[index] && _this.props.data[index][elementName] ? _this.props.data[index][elementName] : null,
          onChange: _this.onChange,
          mediaLibraryChange: _this.mediaLibraryChange
        }));
      }));
    })));
  };

  return ArrayInputs;
}(React.Component);

var _default = ArrayInputs;
exports.default = _default;