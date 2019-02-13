"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createCustomForm = exports.createLabel = exports.createInput = exports.createField = exports.createComboBox = exports.createCheckBox = exports.createButton = exports.createFormElement = exports.set = exports.prop = void 0;

var _Form2 = _interopRequireDefault(require("../Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prop = function prop(name) {
  return function (object) {
    return object ? object[name] : undefined;
  };
};

exports.prop = prop;

var set = function set(name) {
  return function (value) {
    return function (object) {
      return Object.assign(object, _defineProperty({}, name, value));
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
  var CustomForm =
  /*#__PURE__*/
  function (_Form) {
    _inherits(CustomForm, _Form);

    function CustomForm() {
      _classCallCheck(this, CustomForm);

      return _possibleConstructorReturn(this, _getPrototypeOf(CustomForm).apply(this, arguments));
    }

    return CustomForm;
  }(_Form2.default);

  CustomForm.prototype.customTransform = funk;
  return CustomForm;
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