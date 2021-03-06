"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

var _Utils = require("../Utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StyledInput = _Styled["default"].Defaults.CheckBox;

var CheckBox = function CheckBox(props) {
  var _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked;

  var _useState = (0, _react.useState)(checked),
      _useState2 = _slicedToArray(_useState, 2),
      isChecked = _useState2[0],
      setChecked = _useState2[1];

  var handleChange = function handleChange(e) {
    var _props$onChange;

    setChecked(!isChecked);
    var id = props.id,
        name = props.name;
    (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, e, {
      id: id,
      name: name,
      value: !isChecked
    });
  };

  var name = props.name,
      id = props.id,
      _props$as = props.as,
      StyledComponent = _props$as === void 0 ? StyledInput : _props$as;
  return _react["default"].createElement(StyledComponent, {
    id: id,
    type: "checkbox",
    value: name,
    checked: isChecked,
    onChange: handleChange
  });
};

var _default = (0, _Utils.createCheckBox)(CheckBox);

exports["default"] = _default;