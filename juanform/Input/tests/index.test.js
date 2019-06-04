"use strict";

var _react = _interopRequireDefault(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _toolbox = require("../../Utils/toolbox");

var _testUtils = require("react-dom/test-utils");

var _ = _interopRequireWildcard(require("../"));

var _constants = require("../constants");

var _Styled = _interopRequireDefault(require("../../Styled"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('#Input', function () {
  describe("Input behavior", function () {
    var mockTarget = {
      value: "some"
    };
    var mockEvent = (0, _toolbox.createMockEvent)(undefined, mockTarget);
    it("should default type to text", function () {
      var expected = "text";
      var result = (0, _.findType)();
      expect(result).toBe(expected);
    });
    it("should return text upon invalid type", function () {
      var expected = "text";
      var result = (0, _.findType)("foo");
      expect(result).toBe(expected);
    });
    it("should return type when valid", function () {
      var mapped = _constants.Types.map(function (x) {
        return (0, _.findType)(x);
      });

      expect(mapped).toEqual(_constants.Types);
    });
    it("should call onChange when given", function () {
      var changeSpy = _sinon.default.spy();

      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
        onChange: changeSpy
      }));
      var data = {
        id: undefined,
        name: undefined,
        value: 'some'
      };
      (0, _testUtils.act)(function () {
        wrapper.find(_Styled.default.Defaults.Input).simulate('change', mockEvent);
      });
      expect(changeSpy.called).toBeTruthy();
      expect(changeSpy.calledWith(mockEvent, data)).toBeTruthy();
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
});