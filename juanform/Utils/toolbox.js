"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.set = exports.prop = void 0;

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

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  });
};

exports.compose = compose;