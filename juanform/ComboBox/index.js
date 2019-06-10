"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

var _toolbox = require("../Utils/toolbox");

var _index = require("../Utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StyledCombo = _Styled["default"].Defaults.ComboBox;
var StyledOption = _Styled["default"].Defaults.Option;
var getFirst = (0, _toolbox.prop)("0");
var getValue = (0, _toolbox.prop)("value");
var getProps = (0, _toolbox.prop)("props");
var getChildren = (0, _toolbox.prop)("children");
var getFirstValue = (0, _toolbox.compose)(getValue, getFirst);
var getPropsOfFirst = (0, _toolbox.compose)(getProps, getFirst);
var getFirstGrandson = (0, _toolbox.compose)(getChildren, getPropsOfFirst);
var getValueFromFirstChild = (0, _toolbox.compose)(getValue, getPropsOfFirst);

var Option = function Option(props) {
  var _props$as = props.as,
      StyledComponent = _props$as === void 0 ? StyledOption : _props$as;
  return _react["default"].createElement(StyledComponent, props, props.children);
};

var renderOptions = function renderOptions(renderData) {
  var options = renderData.options,
      _renderData$emptyMess = renderData.emptyMessage,
      emptyMessage = _renderData$emptyMess === void 0 ? "-- Empty --" : _renderData$emptyMess;

  if (options.length === 0) {
    return _react["default"].createElement(Option, {
      value: null
    }, emptyMessage);
  }

  return options.map(function (op, key) {
    return _react["default"].createElement(Option, {
      key: key,
      value: op.value
    }, op.label);
  });
};

var ComboBox = function ComboBox(props) {
  var name = props.name,
      id = props.id,
      options = props.options,
      emptyMessage = props.emptyMessage;

  var children = _react["default"].Children.toArray(props.children);

  var defaultValue = props.value || getFirstValue(options) || getValueFromFirstChild(children) || getFirstGrandson(children);

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  (0, _react.useEffect)(function () {
    var _props$onChange;

    (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, null, {
      id: id,
      name: name,
      value: value
    });
  }, []);

  var handleChange = function handleChange(e) {
    var _props$onChange2;

    setValue(e.target.value);
    var id = props.id,
        name = props.name;
    (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 ? void 0 : _props$onChange2.call(props, e, {
      id: id,
      name: name,
      value: e.target.value
    });
  };

  var _props$as2 = props.as,
      StyledComponent = _props$as2 === void 0 ? StyledCombo : _props$as2;
  return _react["default"].createElement(StyledComponent, {
    id: id,
    name: name,
    onChange: handleChange
  }, options ? renderOptions({
    options: options,
    emptyMessage: emptyMessage
  }) : props.children);
};

ComboBox.Option = Option;

var _default = (0, _index.createComboBox)(ComboBox);

exports["default"] = _default;