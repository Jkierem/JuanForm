"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function () {
      var _this$props$onChange, _this$props;

      (_this$props$onChange = (_this$props = _this.props).onChange) === null || _this$props$onChange === void 0 ? void 0 : _this$props$onChange.call(_this$props, _this.state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      var _this$props$onSubmit, _this$props2;

      e.preventDefault();
      (_this$props$onSubmit = (_this$props2 = _this.props).onSubmit) === null || _this$props$onSubmit === void 0 ? void 0 : _this$props$onSubmit.call(_this$props2, _this.state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "transform", function (child) {
      var definedChild = child == null ? {} : _objectSpread({}, child);
      var _definedChild$type = definedChild.type,
          type = _definedChild$type === void 0 ? {} : _definedChild$type;
      var element = type.formElement;
      var resultingClone = child;

      switch (element) {
        case "Field":
          resultingClone = _react.default.cloneElement(child, {
            transform: _this.transform
          });
          break;

        case "Button":
          if (child.props.submit) {
            resultingClone = _react.default.cloneElement(child, {
              onClick: _this.handleSubmit
            });
          }

          break;

        case "Input":
        case "ComboBox":
        case "CheckBox":
          resultingClone = _react.default.cloneElement(child, {
            onChange: _this.handleInputChange
          });
          break;

        default:
          if (child == null) {
            resultingClone = undefined;
          }

          break;
      }

      if (_this.customTransform && typeof _this.customTransform === "function") {
        resultingClone = _this.customTransform(resultingClone, _assertThisInitialized(_assertThisInitialized(_this)));
      }

      return resultingClone;
    });

    _this.state = {};
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          _this$props3$as = _this$props3.as,
          StyledComponent = _this$props3$as === void 0 ? StyledForm : _this$props3$as;
      var handleSubmit = this.handleSubmit;
      return _react.default.createElement(StyledComponent, {
        id: id,
        onSubmit: handleSubmit
      }, _react.default.Children.map(this.props.children, this.transform));
    }
  }]);

  return Form;
}(_react.default.Component);

var _default = Form;
exports.default = _default;