"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _toolbox = require("../toolbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Toolbox test", function () {
  it("should set a property", function () {
    var obj = (0, _toolbox.set)("some")("value")({});
    expect(obj.some).toBe("value");
  });
  it("should get a property", function () {
    var obj = {
      something: "valuable"
    };
    var value = (0, _toolbox.prop)("something")(obj);
    expect(value).toBe(obj.something);
  });
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
  it("should be identity", function () {
    var obj = {
      some: "value"
    };
    expect((0, _toolbox.identity)(obj)).toBe(obj);
  });
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
  it("should return a function that resolves to value", function () {
    var value = "stringsAreCool";
    var someValue = (0, _toolbox.ValueOf)(value);
    expect(someValue()).toBe(value);
  });
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
  it("should return right of data when defined", function () {
    var right = (0, _toolbox.ValueOf)("some");
    var left = (0, _toolbox.ValueOf)("not");
    var either = (0, _toolbox.Either)([])(right)(left);
    expect(either).toBe(right());
  });
  it("should return left when right is undefined", function () {
    var right = (0, _toolbox.ValueOf)(undefined);
    var left = (0, _toolbox.ValueOf)("not");
    var either = (0, _toolbox.Either)([])(right)(left);
    expect(either).toBe(left());
  });
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
  it("should render a stub component", function () {
    var wrapper = (0, _enzyme.render)(_react.default.createElement(_toolbox.StubComponent, null));
    expect(wrapper).toMatchSnapshot();
  });
});