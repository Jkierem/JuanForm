"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Styled = {
  Button: _styledComponents.default.button,
  CheckBox: _styledComponents.default.input,
  ComboBox: _styledComponents.default.select,
  Field: _styledComponents.default.article,
  Form: _styledComponents.default.form,
  Input: _styledComponents.default.input,
  Label: _styledComponents.default.label,
  Option: _styledComponents.default.option,
  Defaults: {
    Button: _styledComponents.default.button.withConfig({
      displayName: "Styled__Button",
      componentId: "mncdd1-0"
    })(["padding:5px"]),
    CheckBox: _styledComponents.default.input.withConfig({
      displayName: "Styled__CheckBox",
      componentId: "mncdd1-1"
    })([""]),
    ComboBox: _styledComponents.default.select.withConfig({
      displayName: "Styled__ComboBox",
      componentId: "mncdd1-2"
    })([""]),
    Field: _styledComponents.default.article.withConfig({
      displayName: "Styled__Field",
      componentId: "mncdd1-3"
    })(["padding:5px"]),
    Form: _styledComponents.default.form.withConfig({
      displayName: "Styled__Form",
      componentId: "mncdd1-4"
    })(["padding:10px;"]),
    Input: _styledComponents.default.input.withConfig({
      displayName: "Styled__Input",
      componentId: "mncdd1-5"
    })([""]),
    Label: _styledComponents.default.label.withConfig({
      displayName: "Styled__Label",
      componentId: "mncdd1-6"
    })(["padding:10px;"]),
    Option: _styledComponents.default.option.withConfig({
      displayName: "Styled__Option",
      componentId: "mncdd1-7"
    })([""])
  }
};
var _default = Styled;
exports.default = _default;