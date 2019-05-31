"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createLabel = exports.createInput = exports.createField = exports.createComboBox = exports.createCheckBox = exports.createButton = exports.createFormElement = exports.createCustomForm = void 0;

var _Form = _interopRequireDefault(require("../Form"));

var _toolbox = require("./toolbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createCustomForm = function createCustomForm(customTransform) {
  return function (props) {
    return (0, _Form.default)(_objectSpread({}, props, {
      customTransform: customTransform
    }));
  };
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