"use strict";

var _react = _interopRequireDefault(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _toolbox = require("../../Utils/toolbox");

var _ = _interopRequireDefault(require("../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe("#Checkbox", function () {
  describe("Checkbox behavior", function () {
    var mockEvent = (0, _toolbox.createMockEvent)();

    var onChangeSpy = _sinon["default"].spy();

    var mockProps = {
      checked: true,
      name: "someValue",
      id: "test",
      onChange: onChangeSpy
    };
    var custom = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], mockProps));
    it("should call on change prop", function () {
      custom.find('#test').props().onChange(mockEvent);
      var onChangeArgs = [mockEvent, {
        id: mockProps.id,
        name: mockProps.name,
        value: !mockProps.checked
      }];
      expect(onChangeSpy.args[0]).toEqual(onChangeArgs);
    });
  });
  describe("Checkbox rendering", function () {
    it("should match snapshot", function () {
      var wrapper = (0, _enzyme.render)(_react["default"].createElement(_["default"], null));
      expect(wrapper).toMatchSnapshot();
    });
    it("should render the 'as' prop", function () {
      var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
        as: _toolbox.StubComponent
      }));
      expect(wrapper.find(_toolbox.StubComponent).length).toBe(1);
    });
  });
});