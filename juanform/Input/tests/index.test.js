"use strict";

var _react = _interopRequireDefault(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _toolbox = require("../../Utils/toolbox");

var _ = _interopRequireDefault(require("../"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Input behavior", function () {
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, null));
  var instance = wrapper.instance();
  var mockTarget = {
    value: "any"
  };
  var mockEvent = (0, _toolbox.createMockEvent)(undefined, mockTarget);
  it("should have empty string as default value", function () {
    expect(wrapper.state("value")).toBe("");
  });
  it("should change state upon handleChange", function () {
    instance.handleChange(mockEvent);
    expect(wrapper.state("value")).toBe("any");
  });
  it("should default type to text", function () {
    var expected = "text";
    var result = instance.findType();
    expect(result).toBe(expected);
  });
  it("should return text upon invalid type", function () {
    var expected = "text";
    var result = instance.findType("foo");
    expect(result).toBe(expected);
  });
  it("should return type when valid", function () {
    var mapped = _constants.Types.map(function (x) {
      return instance.findType(x);
    });

    expect(mapped).toEqual(_constants.Types);
  });
  it("should call onChange when given", function () {
    var changeSpy = _sinon.default.spy();

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      onChange: changeSpy
    }));
    wrapper.instance().handleChange(mockEvent);
    expect(changeSpy.called).toBeTruthy();
  });
});
describe("Input rendering", function () {
  it("should render correctly", function () {
    var wrapper = (0, _enzyme.render)(_react.default.createElement(_.default, null));
    expect(wrapper).toMatchSnapshot();
  });
  it("should render the 'as' prop", function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      as: _toolbox.StubComponent
    }));
    expect(wrapper.find(_toolbox.StubComponent).length).toBe(1);
  });
});