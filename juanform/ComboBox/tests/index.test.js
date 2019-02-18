"use strict";

var _react = _interopRequireDefault(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _toolbox = require("../../Utils/toolbox");

var _Styled = _interopRequireDefault(require("../../Styled"));

var _ = _interopRequireDefault(require("../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("ComboBox.Option rendering", function () {
  it("should match snapshot", function () {
    var wrapper = (0, _enzyme.render)(_react.default.createElement(_.default.Option, null));
    expect(wrapper).toMatchSnapshot();
  });
  it("should render the 'as' prop", function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default.Option, {
      as: _toolbox.StubComponent
    }));
    expect(wrapper.find(_toolbox.StubComponent).length).toBe(1);
  });
  it("should an option and render children", function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default.Option, null, "hey"));
    var options = wrapper.find(_Styled.default.Defaults.Option);
    expect(options.length).toBe(1);
    expect(options.text()).toBe("hey");
  });
});
describe("ComboBox behavior", function () {
  var onChangeSpy = _sinon.default.spy();

  var mockTarget = {
    value: "someValue"
  };
  var mockEvent = (0, _toolbox.createMockEvent)(undefined, mockTarget);
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
    onChange: onChangeSpy
  }));
  it("should call onChange upon mounting", function () {
    expect(onChangeSpy.callCount).toBe(1);
  });
  it("should set value as undefined when no options are defined", function () {
    expect(wrapper.state("state")).toBeUndefined();
  });
  it("should call onChage prop when handleChange is triggered", function () {
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state("value")).toEqual(mockTarget.value);
    expect(onChangeSpy.callCount).toBe(2);
  });
  it("should set value to target value", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, null));
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state("value")).toEqual(mockTarget.value);
  });
  it("should choose the first value of options", function () {
    var comboWithOptions = (0, _enzyme.shallow)(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Option, {
      value: "one"
    }), _react.default.createElement(_.default.Option, {
      value: "two"
    })));
    expect(comboWithOptions.state("value")).toBe("one");
  });
  it("should choose the first child of options", function () {
    var comboWithOptions = (0, _enzyme.shallow)(_react.default.createElement(_.default, null, _react.default.createElement(_.default.Option, null, "One"), _react.default.createElement(_.default.Option, null, "Two")));
    expect(comboWithOptions.state("value")).toBe("One");
  });
});
describe("ComboBox rendering", function () {
  it("should match snapshot", function () {
    var wrapper = (0, _enzyme.render)(_react.default.createElement(_.default, null));
    expect(wrapper).toMatchSnapshot();
  });
  it("should render a null value option on empty options", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      options: []
    }));
    expect(wrapper.find(_.default.Option).length).toBe(1);
  });
  it("should show custom empty message", function () {
    var customMessage = "Nothing to see here...";
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      options: [],
      emptyMessage: customMessage
    }));
    expect(wrapper.find(_.default.Option).text()).toBe(customMessage);
  });
  it("should render options given an option list", function () {
    var options = [{
      value: 1,
      label: "One"
    }, {
      value: 2,
      label: "Two"
    }, {
      value: 3,
      label: "Three"
    }, {
      value: 4,
      label: "Four"
    }];
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
      options: options
    }));
    expect(wrapper.find(_.default.Option).length).toBe(4);
  });
  it("should render the 'as' prop", function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      as: _toolbox.StubComponent
    }));
    expect(wrapper.find(_toolbox.StubComponent).length).toBe(1);
  });
});