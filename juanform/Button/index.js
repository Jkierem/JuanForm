"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

var _Utils = require("../Utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledButton = _Styled["default"].Defaults.Button;

var Button = function Button(props) {
  var handleClick = function handleClick(e) {
    e.preventDefault();

    if (props.onClick) {
      props.onClick(e, _objectSpread({}, props));
    }
  };

  var id = props.id,
      _props$label = props.label,
      label = _props$label === void 0 ? props.children : _props$label,
      as = props.as;
  var StyledComponent = as ? as : StyledButton;
  return _react["default"].createElement(StyledComponent, {
    id: id,
    onClick: handleClick
  }, label);
};

var _default = (0, _Utils.createButton)(Button);

exports["default"] = _default;