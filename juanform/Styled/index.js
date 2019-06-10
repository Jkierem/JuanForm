"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _defaults = _interopRequireDefault(require("./defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Styled = {
  Button: _styledComponents["default"].button,
  CheckBox: _styledComponents["default"].input,
  ComboBox: _styledComponents["default"].select,
  Field: _styledComponents["default"].article,
  Form: _styledComponents["default"].form,
  Input: _styledComponents["default"].input,
  Label: _styledComponents["default"].label,
  Option: _styledComponents["default"].option,
  Defaults: _defaults["default"]
};
var _default = Styled;
exports["default"] = _default;