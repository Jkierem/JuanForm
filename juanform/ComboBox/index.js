"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("../resources/Styles");

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

var ComboBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComboBox, _React$Component);

  function ComboBox(props) {
    var _this;

    _classCallCheck(this, ComboBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderOptions", function () {
      var _this$props = _this.props,
          options = _this$props.options,
          _this$props$emptyMess = _this$props.emptyMessage,
          emptyMessage = _this$props$emptyMess === void 0 ? "-- Empty --" : _this$props$emptyMess;

      if (options.length === 0) {
        return _react.default.createElement("option", {
          value: null
        }, emptyMessage);
      }

      return options.map(function (op, key) {
        return _react.default.createElement("option", {
          key: key,
          value: op.value
        }, op.label);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.setState({
        value: e.target.value
      });

      var _this$props2 = _this.props,
          id = _this$props2.id,
          name = _this$props2.name;

      if (_this.props.onChange) {
        _this.props.onChange(e, {
          id: id,
          name: name,
          value: e.target.value
        });
      }
    });

    var _options = props.options;

    if (_options.length === 0) {
      _options = [{
        value: null
      }];
    }

    _this.state = {
      value: _options[0].value
    };
    var _id = props.id,
        _name = props.name;

    if (props.onChange) {
      props.onChange(null, {
        id: _id,
        name: _name,
        value: _options[0].value
      });
    }

    return _this;
  }

  _createClass(ComboBox, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          id = _this$props3.id,
          name = _this$props3.name,
          _this$props3$style = _this$props3.style,
          style = _this$props3$style === void 0 ? {} : _this$props3$style;
      var renderOptions = this.renderOptions;

      var realStyle = _objectSpread({}, _Styles.comboStyle, style);

      return _react.default.createElement("select", {
        id: id,
        name: name,
        style: realStyle,
        onChange: this.handleChange
      }, renderOptions());
    }
  }]);

  return ComboBox;
}(_react.default.Component);

var _default = ComboBox;
exports.default = _default;