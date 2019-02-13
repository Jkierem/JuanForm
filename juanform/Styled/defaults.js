"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Defaults = {
  Button: _styledComponents.default.button.withConfig({
    displayName: "defaults__Button",
    componentId: "sc-157ahxh-0"
  })(["padding:5px"]),
  CheckBox: _styledComponents.default.input.withConfig({
    displayName: "defaults__CheckBox",
    componentId: "sc-157ahxh-1"
  })([""]),
  ComboBox: _styledComponents.default.select.withConfig({
    displayName: "defaults__ComboBox",
    componentId: "sc-157ahxh-2"
  })([""]),
  Field: _styledComponents.default.article.withConfig({
    displayName: "defaults__Field",
    componentId: "sc-157ahxh-3"
  })(["padding:5px"]),
  Form: _styledComponents.default.form.withConfig({
    displayName: "defaults__Form",
    componentId: "sc-157ahxh-4"
  })(["padding:10px;"]),
  Input: _styledComponents.default.input.withConfig({
    displayName: "defaults__Input",
    componentId: "sc-157ahxh-5"
  })([""]),
  Label: _styledComponents.default.label.withConfig({
    displayName: "defaults__Label",
    componentId: "sc-157ahxh-6"
  })(["padding:10px;"]),
  Option: _styledComponents.default.option.withConfig({
    displayName: "defaults__Option",
    componentId: "sc-157ahxh-7"
  })([""])
};
var _default = Defaults;
exports.default = _default;