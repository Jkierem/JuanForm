"use strict";

var _react = _interopRequireDefault(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _toolbox = require("../../Utils/toolbox");

var _ = _interopRequireDefault(require("../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Button behavior", function () {
  var shallowWrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, null));

  var eventSpy = _sinon.default.spy();

  var mockEvent = (0, _toolbox.createMockEvent)(eventSpy);
  it("should work without onClick", function () {
    shallowWrapper.simulate("click", mockEvent);
    expect(eventSpy.called).toBeTruthy();
  });
  it("should call onClick when given", function () {
    var onClickSpy = _sinon.default.spy();

    shallowWrapper.setProps({
      onClick: onClickSpy
    });
    shallowWrapper.simulate("click", mockEvent);
    expect(onClickSpy.called).toBeTruthy();
  });
});
describe("Button rendering", function () {
  var renderWrapper = (0, _enzyme.render)(_react.default.createElement(_.default, null));
  it("should match snapshot", function () {
    expect(renderWrapper).toMatchSnapshot();
  });
  it("should render the 'as' component prop", function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      as: _toolbox.StubComponent
    }));
    var stub = wrapper.find(_toolbox.StubComponent);
    expect(stub.length).toBe(1);
  });
});