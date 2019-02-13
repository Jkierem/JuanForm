"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledForm = _Styled.default.Defaults.Form;

var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleInputChange", function (e, obj) {
      var id = obj.id,
          name = obj.name,
          value = obj.value;

      if (name !== undefined) {
        _this.setState(_defineProperty({}, name, value), _this.handleChange);
      } else {
        _this.setState(_defineProperty({}, id, value), _this.handleChange);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (s) {
      if (_this.props.onChange) {
        _this.props.onChange(_this.state);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      if (_this.props.onSubmit) {
        _this.props.onSubmit(_this.state);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "transform", function (child) {
      var element = child.type.formElement;
      var resultingClone = child;

      if (element === "Input") {
        resultingClone = _react.default.cloneElement(child, {
          onChange: _this.handleInputChange
        });
      } else if (element === "Button") {
        if (child.props.submit) {
          resultingClone = _react.default.cloneElement(child, {
            onClick: _this.handleSubmit
          });
        }
      } else if (element === "ComboBox") {
        resultingClone = _react.default.cloneElement(child, {
          onChange: _this.handleInputChange
        });
      } else if (element === "CheckBox") {
        resultingClone = _react.default.cloneElement(child, {
          onChange: _this.handleInputChange
        });
      }

      if (_this.customTransform && typeof _this.customTransform === "function") {
        resultingClone = _this.customTransform(resultingClone, _assertThisInitialized(_assertThisInitialized(_this)));
      }

      return resultingClone;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "transformChildren", function () {
      return _react.default.Children.map(_this.props.children, function (child) {
        if (child === null) {
          return undefined;
        }

        if (child.type.formElement === "Field") {
          return _react.default.cloneElement(child, {
            transform: _this.transform
          });
        } else {
          return _this.transform(child);
        }
      });
    });

    _this.state = {};
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          _this$props$as = _this$props.as,
          StyledComponent = _this$props$as === void 0 ? StyledForm : _this$props$as;
      var handleSubmit = this.handleSubmit;
      return _react.default.createElement(StyledComponent, {
        id: id,
        onSubmit: handleSubmit
      }, this.transformChildren());
    }
  }]);

  return Form;
}(_react.default.Component);

var _default = Form;
exports.default = _default;