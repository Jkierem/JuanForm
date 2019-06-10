"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StubComponent = exports.createMockEvent = exports.Either = exports.Find = exports.JustOf = exports.isDefined = exports.isAnyOf = exports.identity = exports.compose = exports.callInObject = exports.overrideProps = exports.call = exports.set = exports.prop = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var overrideProps = function overrideProps(f) {
  return function (overrides) {
    return function (props) {
      return f(_objectSpread({}, props, overrides));
    };
  };
};

exports.overrideProps = overrideProps;

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

var isAnyOf = function isAnyOf() {
  for (var _len4 = arguments.length, data = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    data[_key4] = arguments[_key4];
  }

  return function (value) {
    return Find(value)(data) ? true : false;
  };
};

exports.isAnyOf = isAnyOf;

var isDefined = function isDefined(a) {
  return a !== undefined && a !== null;
};

exports.isDefined = isDefined;

var JustOf = function JustOf(a) {
  return function () {
    return a;
  };
};

exports.JustOf = JustOf;

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

var StubComponent = function StubComponent(props) {
  return _react["default"].createElement("a", null, "Replacement");
};

exports.StubComponent = StubComponent;