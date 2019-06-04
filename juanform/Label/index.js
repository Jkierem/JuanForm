"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

var _Utils = require("../Utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledLabel = _Styled.default.Defaults.Label;

var Label = function Label(props) {
  var htmlFor = props.htmlFor,
      id = props.id,
      _props$as = props.as,
      StyledComponent = _props$as === void 0 ? StyledLabel : _props$as;
  return _react.default.createElement(StyledComponent, {
    id: id,
    htmlFor: htmlFor
  }, props.children);
};

var _default = (0, _Utils.createLabel)(Label);

exports.default = _default;