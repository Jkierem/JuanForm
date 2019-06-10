"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.createTransform = exports.reducer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

var _toolbox = require("../Utils/toolbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StyledForm = _Styled["default"].Defaults.Form;

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "INPUT":
      var _action$data = action.data,
          id = _action$data.id,
          name = _action$data.name,
          value = _action$data.value;
      return _objectSpread({}, state, _defineProperty({}, name ? name : id, value));

    default:
      return state;
  }
};

exports.reducer = reducer;

var createTransform = function createTransform(_ref) {
  var props = _ref.props,
      onSubmit = _ref.onSubmit,
      onInputChange = _ref.onInputChange,
      transform = _ref.transform;
  return function (child) {
    var definedChild = child == null ? {} : _objectSpread({}, child);
    var _definedChild$type = definedChild.type,
        type = _definedChild$type === void 0 ? {} : _definedChild$type;
    var element = type.formElement;
    var resultingClone = child;
    var isFieldType = (0, _toolbox.isAnyOf)("Field");
    var isClickType = (0, _toolbox.isAnyOf)("Button");
    var isChangeType = (0, _toolbox.isAnyOf)("Input", "ComboBox", "CheckBox");

    if (isFieldType(element)) {
      resultingClone = _react["default"].cloneElement(child, {
        transform: createTransform({
          props: props,
          onSubmit: onSubmit,
          onInputChange: onInputChange
        })
      });
    } else if (isClickType(element)) {
      if (child.props.submit) {
        resultingClone = _react["default"].cloneElement(child, {
          onClick: onSubmit
        });
      }
    } else if (isChangeType(element)) {
      resultingClone = _react["default"].cloneElement(child, {
        onChange: onInputChange
      });
    } else {
      if (child == null) {
        resultingClone = undefined;
      }
    }

    if (props.customTransform && typeof props.customTransform === "function") {
      resultingClone = props.customTransform(resultingClone);
    }

    return resultingClone;
  };
};

exports.createTransform = createTransform;

var Form = function Form(props) {
  var _useReducer = (0, _react.useReducer)(reducer, {}),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(state);
  };

  var onInputChange = function onInputChange(e, obj) {
    dispatch({
      type: "INPUT",
      data: obj
    });
    props.onChange ? props.onChange(e, obj) : null;
  };

  var transform = createTransform({
    props: props,
    onInputChange: onInputChange,
    onSubmit: handleSubmit
  });
  var id = props.id,
      _props$as = props.as,
      StyledComponent = _props$as === void 0 ? StyledForm : _props$as;
  return _react["default"].createElement(StyledComponent, {
    id: id,
    onSubmit: handleSubmit
  }, _react["default"].Children.map(props.children, transform));
};

var _default = Form;
exports["default"] = _default;