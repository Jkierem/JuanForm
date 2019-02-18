"use strict";

var _react = _interopRequireDefault(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _Utils = require("../../Utils");

var _toolbox = require("../../Utils/toolbox");

var _ = _interopRequireDefault(require("../"));

var _2 = require("../../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe("Form transform function", function () {
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, null));
  var instance = wrapper.instance();

  var createPropTest = function createPropTest(Comp, prop) {
    return {
      component: Comp,
      prop: prop,
      map: function map(f) {
        return createPropTest(f(this.component), this.prop);
      },
      isPropDefined: function isPropDefined() {
        return !!this.component.props[this.prop];
      }
    };
  };

  it("should ignore unknown components", function () {
    var FormComponents = [createPropTest(_react.default.createElement(_2.Button, null), "onClick"), createPropTest(_react.default.createElement(_toolbox.StubComponent, null), "onClick"), createPropTest(_react.default.createElement(_toolbox.StubComponent, null), "onChange")];
    var mapped = FormComponents.map((0, _toolbox.callInObject)("map", instance.transform)).map((0, _toolbox.callInObject)("isPropDefined")).map(function (x) {
      return !x;
    }).every(Boolean);
    expect(mapped).toBe(true);
  });
  it("should add event to known components", function () {
    var FormComponents = [createPropTest(_react.default.createElement(_2.Button, {
      submit: true
    }), "onClick"), createPropTest(_react.default.createElement(_2.CheckBox, null), "onChange"), createPropTest(_react.default.createElement(_2.ComboBox, null), "onChange"), createPropTest(_react.default.createElement(_2.Input, null), "onChange"), createPropTest(_react.default.createElement(_2.Field, null), "transform")];
    var mapped = FormComponents.map((0, _toolbox.callInObject)("map", instance.transform)).map((0, _toolbox.callInObject)("isPropDefined")).every(Boolean);
    expect(mapped).toBe(true);
  });
  it("should return undefined on null children", function () {
    expect(instance.transform(null)).toBeUndefined();
  });
  it("should call customTransform when defined", function () {
    var transformSpy = _sinon.default.spy();

    var CustomForm = (0, _Utils.createCustomForm)(transformSpy);
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(CustomForm, null, _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null)));
    expect(transformSpy.callCount).toBe(3);
  });
});
describe("Form behavior", function () {
  var mockTarget = {
    value: "someReallyGoodValue"
  };

  var preventDefaultSpy = _sinon.default.spy();

  var mockEvent = (0, _toolbox.createMockEvent)(preventDefaultSpy, mockTarget);
  it("should call onChange prop when handleChange", function () {
    var onChangeSpy = _sinon.default.spy();

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      onChange: onChangeSpy
    }));
    var element = {
      name: "name",
      value: "Helena"
    };
    wrapper.instance().handleInputChange(undefined, element);
    wrapper.instance().handleSubmit(mockEvent);
    expect(onChangeSpy.callCount).toBe(1);
    expect(onChangeSpy.calledWith(wrapper.state())).toBeTruthy();
  });
  it("should call onSubmit prop upon handleSubmit", function () {
    preventDefaultSpy.resetHistory();

    var onSubmitSpy = _sinon.default.spy();

    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      onSubmit: onSubmitSpy
    }));
    var element = {
      name: "name",
      value: "Helena"
    };
    wrapper.instance().handleInputChange(undefined, element);
    wrapper.instance().handleSubmit(mockEvent);
    expect(onSubmitSpy.callCount).toBe(1);
    expect(onSubmitSpy.calledWith(wrapper.state())).toBeTruthy();
    expect(preventDefaultSpy.callCount).toBe(1);
  });
  it("should change state upon handleInputChange", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, null));
    var formElement = {
      id: "someid",
      name: "SomeComponent",
      value: "SomeCleverValue"
    };

    var expectedState = _defineProperty({}, formElement.name, formElement.value);

    wrapper.instance().handleInputChange(mockEvent, formElement);
    expect(wrapper.state()).toEqual(expectedState);
  });
  it("should change state using id when no name is supplyed", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, null));
    var formElement = {
      id: "SomeComponent",
      value: "SomeCleverValue"
    };

    var expectedState = _defineProperty({}, formElement.id, formElement.value);

    wrapper.instance().handleInputChange(mockEvent, formElement);
    expect(wrapper.state()).toEqual(expectedState);
  });
});
describe("Form rendering", function () {
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