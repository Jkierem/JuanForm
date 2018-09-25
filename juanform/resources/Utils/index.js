"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLabel = exports.createInput = exports.createField = exports.createComboBox = exports.createCheckBox = exports.createButton = exports.createFormElement = exports.set = exports.prop = void 0;

var prop = function prop(name) {
  return function (object) {
    return object ? object[name] : undefined;
  };
};

exports.prop = prop;

var set = function set(name) {
  return function (object, info) {
    if (object) object[name] = info;
    return object;
  };
};

exports.set = set;
var setFormElement = set("formElement");

var createFormElement = function createFormElement(element) {
  return function (component) {
    return setFormElement(component, element);
  };
};

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