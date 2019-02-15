"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

var _toolbox = require("../Utils/toolbox");

var _index = require("../Utils/index.js");

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

var StyledCombo = _Styled.default.Defaults.ComboBox;
var StyledOption = _Styled.default.Defaults.Option;
var getFirst = (0, _toolbox.prop)("0");
var getValue = (0, _toolbox.prop)("value");
var getProps = (0, _toolbox.prop)("props");
var getChildren = (0, _toolbox.prop)("children");
var getFirstValue = (0, _toolbox.compose)(getValue, getFirst);
var getPropsOfFirst = (0, _toolbox.compose)(getProps, getFirst);
var getFirstGrandson = (0, _toolbox.compose)(getChildren, getPropsOfFirst);
var getValueFromFirstChild = (0, _toolbox.compose)(getValue, getPropsOfFirst);

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
        return _react.default.createElement(ComboBox.Option, {
          value: null
        }, emptyMessage);
      }

      return options.map(function (op, key) {
        return _react.default.createElement(ComboBox.Option, {
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

    var value = props.value,
        _options = props.options;

    var children = _react.default.Children.toArray(props.children);

    var defaultValue = value || getFirstValue(props.options) || getValueFromFirstChild(children) || getFirstGrandson(children);
    _this.state = {
      value: defaultValue
    };
    var _id = props.id,
        _name = props.name;

    if (props.onChange) {
      props.onChange(null, {
        id: _id,
        name: _name,
        value: _this.state.value
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
          _this$props3$as = _this$props3.as,
          StyledComponent = _this$props3$as === void 0 ? StyledCombo : _this$props3$as,
          options = _this$props3.options;
      var renderOptions = this.renderOptions;
      return _react.default.createElement(StyledComponent, {
        id: id,
        name: name,
        onChange: this.handleChange
      }, options ? renderOptions() : this.props.children);
    }
  }], [{
    key: "Option",
    value: function Option(props) {
      var _props$as = props.as,
          StyledComponent = _props$as === void 0 ? StyledOption : _props$as;
      return _react.default.createElement(StyledComponent, props, props.children);
    }
  }]);

  return ComboBox;
}(_react.default.Component);

var _default = (0, _index.createComboBox)(ComboBox);

exports.default = _default;