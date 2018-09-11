"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _ArrayInputs = _interopRequireDefault(require("./components/ArrayInputs"));

var _InputRenderer = _interopRequireDefault(require("./components/InputRenderer"));

var _Section = _interopRequireDefault(require("./components/Section"));

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

var FormBuilder =
/** @class */
function (_super) {
  __extends(FormBuilder, _super);

  function FormBuilder(props) {
    var _this = _super.call(this, props) || this;

    _this.handleChange = _this.handleChange.bind(_this);
    _this.mediaLibraryChange = _this.mediaLibraryChange.bind(_this);
    return _this;
  } // tslint:disable-next-line:no-any


  FormBuilder.prototype.handleChange = function (e) {
    var _a;

    var newData = __assign({}, this.props.data, (_a = {}, _a[e.target.name] = e.target.value, _a));

    this.props.onChange(newData);
  };

  FormBuilder.prototype.mediaLibraryChange = function (media) {
    var _a;

    var newData = __assign({}, this.props.data, (_a = {}, _a[media.name] = media.value, _a));

    this.props.onChange(newData);
  };

  FormBuilder.prototype.renderElements = function (schema) {
    var _this = this;

    if (schema && schema.properties) {
      return Object.keys(schema.properties).map(function (elementName, index) {
        var element = schema.properties[elementName];

        switch (element.type.toLowerCase()) {
          case 'section':
            return React.createElement(_Section.default, {
              key: index,
              title: element.title
            }, element && _this.renderElements(element));

          case 'array':
            return React.createElement(_ArrayInputs.default, {
              key: index,
              name: elementName,
              title: element.title,
              items: element.items,
              data: _this.props.data && _this.props.data[elementName] || [],
              onChange: _this.handleChange
            });

          default:
            return React.createElement(_InputRenderer.default, __assign({
              key: index,
              name: elementName
            }, element, {
              value: _this.props.data && _this.props.data[elementName] ? _this.props.data[elementName] : null,
              onChange: _this.handleChange,
              mediaLibraryChange: _this.mediaLibraryChange
            }));
        }
      });
    }

    return null;
  };

  FormBuilder.prototype.render = function () {
    return React.createElement("form", null, this.props.form && this.props.form.schema && this.renderElements(this.props.form.schema));
  };

  return FormBuilder;
}(React.Component);

var _default = FormBuilder;
exports.default = _default;