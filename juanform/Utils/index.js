"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createCustomForm = exports.createLabel = exports.createInput = exports.createField = exports.createComboBox = exports.createCheckBox = exports.createButton = exports.createFormElement = exports.set = exports.prop = void 0;

var _Form = _interopRequireDefault(require("../Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prop = function prop(name) {
  return function (object) {
    return object ? object[name] : undefined;
  };
};

exports.prop = prop;

var set = function set(name) {
  return function (info) {
    return function (object) {
      if (object) object[name] = info;
      return object;
    };
  };
};

exports.set = set;
var createFormElement = set("formElement");
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

var createCustomForm = function createCustomForm(funk) {
  var Copy = _Form.default;
  Copy.prototype.customTransform = funk;
  return Copy;
};

exports.createCustomForm = createCustomForm;
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