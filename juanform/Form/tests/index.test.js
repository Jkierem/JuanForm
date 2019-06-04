"use strict";

var _react = _interopRequireDefault(require("react"));

var _sinon = _interopRequireDefault(require("sinon"));

var _enzyme = require("enzyme");

var _Utils = require("../../Utils");

var _testUtils = require("react-dom/test-utils");

var _toolbox = require("../../Utils/toolbox");

var _ = _interopRequireWildcard(require("../"));

var _2 = require("../../");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("#Form", function () {
  describe("Form transform function", function () {
    var transform = (0, _.createTransform)({
      props: {},
      onInputChange: "value",
      onSubmit: "value",
      transform: "value"
    });

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
      var mapped = FormComponents.map((0, _toolbox.callInObject)("map", transform)).map((0, _toolbox.callInObject)("isPropDefined")).map(function (x) {
        return !x;
      }).every(Boolean);
      expect(mapped).toBe(true);
    });
    it("should add event to known components", function () {
      var FormComponents = [createPropTest(_react.default.createElement(_2.Button, {
        submit: true
      }), "onClick"), createPropTest(_react.default.createElement(_2.CheckBox, null), "onChange"), createPropTest(_react.default.createElement(_2.ComboBox, null), "onChange"), createPropTest(_react.default.createElement(_2.Input, null), "onChange"), createPropTest(_react.default.createElement(_2.Field, null), "transform")];
      var mapped = FormComponents.map((0, _toolbox.callInObject)("map", transform)).map((0, _toolbox.callInObject)("isPropDefined")).every(Boolean);
      expect(mapped).toBe(true);
    });
    it("should return undefined on null children", function () {
      expect(transform(null)).toBeUndefined();
    });

    var transformSpy = _sinon.default.spy();

    var CustomForm = (0, _Utils.createCustomForm)(transformSpy);
    var custom = (0, _enzyme.mount)(_react.default.createElement(CustomForm, null, _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null)));
    it("should call customTransform when defined", function () {
      expect(transformSpy.callCount).toBe(3);
    });
  });
  describe("Form behavior", function () {
    var mockTarget = {
      value: "someReallyGoodValue"
    };

    var preventDefaultSpy = _sinon.default.spy();

    var mockEvent = (0, _toolbox.createMockEvent)(preventDefaultSpy, mockTarget);

    var onChangeSpy = _sinon.default.spy();

    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default, {
      onChange: onChangeSpy
    }, _react.default.createElement(_2.Input, {
      name: "name"
    })));
    it("should call onChange prop when handleChange", function () {
      var data = {
        id: "any",
        name: "name",
        value: "something"
      };
      (0, _testUtils.act)(function () {
        wrapper.find(_.default).find(_2.Input).props().onChange(mockEvent, data);
      });
      expect(onChangeSpy.callCount).toBe(1);
    });
    it("should work without onChange", function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_.default, null, _react.default.createElement(_2.Input, {
        name: "name"
      })));
      var data = {
        id: "any",
        name: "name",
        value: "something"
      };
      (0, _testUtils.act)(function () {
        wrapper.find(_.default).find(_2.Input).props().onChange(mockEvent, data);
      });
      expect(wrapper).toBeDefined();
    });
    it("should call onSubmit prop upon handleSubmit", function () {
      preventDefaultSpy.resetHistory();

      var onSubmitSpy = _sinon.default.spy();

      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_.default, {
        onSubmit: onSubmitSpy
      }, _react.default.createElement(_2.Button, {
        submit: true
      })));
      (0, _testUtils.act)(function () {
        wrapper.find(_2.Button).props().onClick(mockEvent);
      });
      expect(onSubmitSpy.callCount).toBe(1);
      expect(preventDefaultSpy.callCount).toBe(1);
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
  describe("Form reducer", function () {
    it("set using name when present instead of id", function () {
      var action = {
        type: "INPUT",
        data: {
          name: "name",
          id: "id",
          value: "one"
        }
      };
      var nextState = (0, _.reducer)({}, action);
      expect(nextState).toEqual({
        name: "one"
      });
    });
    it("set a state attribute with given payload", function () {
      var action = {
        type: "INPUT",
        data: {
          id: "id",
          value: "one"
        }
      };
      var nextState = (0, _.reducer)({}, action);
      expect(nextState).toEqual({
        id: "one"
      });
    });
    it("ignore any other actions", function () {
      var previous = {
        previous: "here"
      };
      var nextState = (0, _.reducer)(previous, {
        type: "not"
      });
      expect(nextState).toEqual(previous);
    });
  });
});