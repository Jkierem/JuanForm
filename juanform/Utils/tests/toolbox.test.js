"use strict";

var _react = _interopRequireDefault(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _toolbox = require("../toolbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe("Toolbox test", function () {
  describe("Prop", function () {
    it("should get a property", function () {
      var obj = {
        something: "valuable"
      };
      var value = (0, _toolbox.prop)("something")(obj);
      expect(value).toBe(obj.something);
    });
    it("should return undefined when property is undefined", function () {
      var obj = {};
      var value = (0, _toolbox.prop)("something")((0, _toolbox.prop)("non")((0, _toolbox.prop)("existant")(obj)));
      expect(value).toBeUndefined();
    });
  });
  describe("Set", function () {
    it("should set a property", function () {
      var obj = (0, _toolbox.set)("some")("value")({});
      expect(obj.some).toBe("value");
    });
  });
  describe("Call", function () {
    it("should return a function that calls call method with proper args", function () {
      var spy = _sinon.default.spy();

      function funk() {
        spy(this);
      }

      var _this = "this";
      (0, _toolbox.call)(funk)()(_this);
      expect(spy.calledWith(_this)).toBeTruthy();
    });
  });
  describe("OverrideProps", function () {
    it("should override props", function () {
      var spy = _sinon.default.spy();

      var over = {
        one: "argument"
      };
      var args = {
        another: "arg"
      };
      var overridedSpy = (0, _toolbox.overrideProps)(spy)(over);
      overridedSpy(args);

      var expected = _objectSpread({}, args, over);

      expect(spy.calledWith(expected)).toBeTruthy();
    });
  });
  describe("CallInObject", function () {
    it("should call a method inside an object", function () {
      var spy = _sinon.default.spy();

      var obj = {
        myMethod: spy
      };
      var arg = "argOne";
      (0, _toolbox.callInObject)("myMethod", arg)(obj);
      expect(spy.calledWith(arg)).toBeTruthy();
    });
  });
  describe("Compose", function () {
    it("should compose functions", function () {
      var arg = {
        some: {
          nested: {
            value: "here"
          }
        }
      };

      var normal = function normal(obj) {
        return (0, _toolbox.prop)("value")((0, _toolbox.prop)("nested")((0, _toolbox.prop)("some")(obj)));
      };

      var composed = (0, _toolbox.compose)((0, _toolbox.prop)("value"), (0, _toolbox.prop)("nested"), (0, _toolbox.prop)("some"));
      expect(composed(arg)).toBe(normal(arg));
    });
  });
  describe("Identity", function () {
    it("should be identity", function () {
      var obj = {
        some: "value"
      };
      expect((0, _toolbox.identity)(obj)).toBe(obj);
    });
    it("should not alter a composition", function () {
      var obj = {
        some: {
          nested: "value"
        }
      };
      var comp = (0, _toolbox.compose)((0, _toolbox.prop)("nested"), (0, _toolbox.prop)("some"));
      var compWithIdentity = (0, _toolbox.compose)(_toolbox.identity, (0, _toolbox.prop)("nested"), _toolbox.identity, (0, _toolbox.prop)("some"), _toolbox.identity);
      expect(compWithIdentity(obj)).toEqual(comp(obj));
    });
  });
  describe("IsAnyOf", function () {
    it("should return true if one of the values", function () {
      var values = ["one", "two", "three"];

      var result = _toolbox.isAnyOf.apply(void 0, values)("two");

      expect(result).toBeTruthy();
    });
    it("should return false if not one of the values", function () {
      var values = ["one", "two", "three"];

      var result = _toolbox.isAnyOf.apply(void 0, values)("four");

      expect(result).toBeFalsy();
    });
  });
  describe("IsDefined", function () {
    it("should return true to non-null defined values", function () {
      expect((0, _toolbox.isDefined)({})).toBeTruthy();
      expect((0, _toolbox.isDefined)(true)).toBeTruthy();
      expect((0, _toolbox.isDefined)(false)).toBeTruthy();
      expect((0, _toolbox.isDefined)(0)).toBeTruthy();
      expect((0, _toolbox.isDefined)("0")).toBeTruthy();
      expect((0, _toolbox.isDefined)("")).toBeTruthy();
      expect((0, _toolbox.isDefined)(122)).toBeTruthy();
    });
    it("should return false to null or undefined values", function () {
      expect((0, _toolbox.isDefined)(null)).toBeFalsy();
      expect((0, _toolbox.isDefined)(undefined)).toBeFalsy();
    });
  });
  describe("JustOf", function () {
    it("should return a function that resolves to value", function () {
      var value = "stringsAreCool";
      var someValue = (0, _toolbox.JustOf)(value);
      expect(someValue()).toBe(value);
    });
  });
  describe("Find", function () {
    it("should return a value in an array", function () {
      var arr = [1, 2, 3, 4];
      var found = (0, _toolbox.Find)(2)(arr);
      expect(found).toBe(2);
    });
    it("should return undefined when value is not in array", function () {
      var arr = [1, 2, 3, 4];
      var found = (0, _toolbox.Find)(5)(arr);
      expect(found).toBeUndefined();
    });
  });
  describe("Either", function () {
    it("should return right of data when defined", function () {
      var right = (0, _toolbox.JustOf)("some");
      var left = (0, _toolbox.JustOf)("not");
      var either = (0, _toolbox.Either)([])(right)(left);
      expect(either).toBe(right());
    });
    it("should return left when right is undefined", function () {
      var right = (0, _toolbox.JustOf)(undefined);
      var left = (0, _toolbox.JustOf)("not");
      var either = (0, _toolbox.Either)([])(right)(left);
      expect(either).toBe(left());
    });
  });
  describe("CreateMockEvent", function () {
    it("should create a default mock event", function () {
      var event = {
        preventDefault: _toolbox.identity,
        target: {
          value: "any"
        }
      };
      expect((0, _toolbox.createMockEvent)()).toEqual(event);
    });
    it("should create a custom mock event", function () {
      var fake = "something";
      var target = "else";
      var event = {
        preventDefault: fake,
        target: target
      };
      expect((0, _toolbox.createMockEvent)(fake, target)).toEqual(event);
    });
  });
  describe("Stub Component", function () {
    it("should render a stub component", function () {
      var wrapper = (0, _enzyme.render)(_react.default.createElement(_toolbox.StubComponent, null));
      expect(wrapper).toMatchSnapshot();
    });
  });
});