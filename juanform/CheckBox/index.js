"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

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

var StyledInput = _Styled.default.Defaults.CheckBox;

var CheckBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckBox, _React$Component);

  function CheckBox(props) {
    var _this;

    _classCallCheck(this, CheckBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var isChecked = _this.state.isChecked;

      _this.setState({
        isChecked: !isChecked
      }, function () {
        var _this$props = _this.props,
            id = _this$props.id,
            name = _this$props.name;

        if (_this.props.onChange) {
          _this.props.onChange(e, {
            id: id,
            name: name,
            value: _this.state.isChecked
          });
        }
      });
    });

    var _this$props$checked = _this.props.checked,
        checked = _this$props$checked === void 0 ? false : _this$props$checked;
    _this.state = {
      isChecked: checked
    };
    return _this;
  }

  _createClass(CheckBox, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$label = _this$props2.label,
          label = _this$props2$label === void 0 ? false : _this$props2$label,
          name = _this$props2.name,
          id = _this$props2.id,
          _this$props2$as = _this$props2.as,
          StyledComponent = _this$props2$as === void 0 ? StyledInput : _this$props2$as;
      var isChecked = this.state.isChecked;
      return _react.default.createElement(StyledComponent, {
        id: id,
        type: "checkbox",
        value: name,
        checked: isChecked,
        onChange: this.handleChange
      });
    }
  }]);

  return CheckBox;
}(_react.default.Component);

var _default = CheckBox;
exports.default = _default;