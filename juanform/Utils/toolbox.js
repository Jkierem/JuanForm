"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StubComponent = exports.createMockEvent = exports.Either = exports.Find = exports.ValueOf = exports.isDefined = exports.identity = exports.compose = exports.callInObject = exports.call = exports.set = exports.prop = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prop = function prop(name) {
  return function (object) {
    return object === null || object === void 0 ? void 0 : object[name];
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

var call = function call(f) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function (_this) {
      return f.call.apply(f, [_this].concat(args));
    };
  };
};

exports.call = call;

var callInObject = function callInObject(att) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return function (obj) {
    return call(obj[att]).apply(void 0, args)(obj);
  };
};

exports.callInObject = callInObject;

var compose = function compose() {
  for (var _len3 = arguments.length, fns = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    fns[_key3] = arguments[_key3];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  });
};

exports.compose = compose;

var identity = function identity(a) {
  return a;
};

exports.identity = identity;

var isDefined = function isDefined(a) {
  return a !== undefined && a !== null;
};

exports.isDefined = isDefined;

var ValueOf = function ValueOf(a) {
  return function () {
    return a;
  };
};

exports.ValueOf = ValueOf;

var Find = function Find(value) {
  return function (data) {
    return data.find(function (x) {
      return x == value;
    });
  };
};

exports.Find = Find;

var Either = function Either(data) {
  return function (right) {
    return function (left) {
      var r = right(data);
      return isDefined(r) ? r : left(data);
    };
  };
};

exports.Either = Either;

var createMockEvent = function createMockEvent() {
  var spy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : identity;
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    value: "any"
  };
  return {
    preventDefault: spy,
    target: target
  };
};

exports.createMockEvent = createMockEvent;

var StubComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StubComponent, _React$Component);

  function StubComponent() {
    _classCallCheck(this, StubComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(StubComponent).apply(this, arguments));
  }

  _createClass(StubComponent, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("a", null, "Replacement");
    }
  }]);

  return StubComponent;
}(_react.default.Component);

exports.StubComponent = StubComponent;