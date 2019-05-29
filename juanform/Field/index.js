"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styled = _interopRequireDefault(require("../Styled"));

var _Utils = require("../Utils");

var _toolbox = require("../Utils/toolbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledArticle = _Styled.default.Defaults.Field;

var Field = function Field(props) {
  var transformChildren = function transformChildren(props) {
    var _props$transform = props.transform,
        transform = _props$transform === void 0 ? _toolbox.identity : _props$transform;
    return _react.default.Children.map(props.children, function (child) {
      return transform(child);
    });
  };

  var _props$as = props.as,
      StyledComponent = _props$as === void 0 ? StyledArticle : _props$as;
  return _react.default.createElement(StyledComponent, null, transformChildren(props));
};

var _default = (0, _Utils.createField)(Field);

exports.default = _default;