"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createLabel = exports.createInput = exports.createField = exports.createComboBox = exports.createCheckBox = exports.createButton = exports.createFormElement = exports.createCustomForm = void 0;

var _Form = _interopRequireDefault(require("../Form"));

var _toolbox = require("./toolbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createCustomForm = function createCustomForm(extra) {
  return (0, _toolbox.overrideProps)(_Form.default)({
    customTransform: extra
  });
};

exports.createCustomForm = createCustomForm;
var createFormElement = (0, _toolbox.set)("formElement");
exports.createFormElement = createFormElement;
var createButton = createFormElement("Button");
exports.createButton = createButton;
var createCheckBox = createFormElement("CheckBox");
exports.createCheckBox = createCheckBox;
var createComboBox = createFormElement("ComboBox");
exports.createComboBox = createComboBox;
var createField = createFormElement("Field");
exports.createField = createField;
var createInput = createFormElement("Input");
exports.createInput = createInput;
var createLabel = createFormElement("Label");
exports.createLabel = createLabel;
var Utils = {
  createButton: createButton,
  createCheckBox: createCheckBox,
  createComboBox: createComboBox,
  createField: createField,
  createInput: createInput,
  createLabel: createLabel,
  createCustomForm: createCustomForm
};
var _default = Utils;
exports.default = _default;