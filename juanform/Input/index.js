"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.findType = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

var _Utils = require("../Utils");

var _toolbox = require("../Utils/toolbox");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StyledInput = _Styled["default"].Defaults.Input;

var findType = function findType(t) {
  return (0, _toolbox.Either)(_constants.Types)((0, _toolbox.Find)(t)) //or
  ((0, _toolbox.JustOf)("text"));
};

exports.findType = findType;

var Input = function Input(props) {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(e) {
    setValue(e.target.value);
    var id = props.id,
        name = props.name;
    props.onChange(e, {
      id: id,
      name: name,
      value: e.target.value
    });
  };

  var id = props.id,
      name = props.name,
      _props$type = props.type,
      type = _props$type === void 0 ? "text" : _props$type,
      placeholder = props.placeholder,
      _props$as = props.as,
      StyledComponent = _props$as === void 0 ? StyledInput : _props$as;

  var _type = findType(type);

  return _react["default"].createElement(StyledComponent, {
    id: id,
    name: name,
    onChange: handleChange,
    placeholder: placeholder,
    type: _type,
    value: value
  });
};

var _default = (0, _Utils.createInput)(Input);

exports["default"] = _default;