"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prop = void 0;

var prop = function prop(name) {
  return function (object) {
    return object ? object[name] : undefined;
  };
};

exports.prop = prop;