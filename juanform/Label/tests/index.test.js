"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _toolbox = require("../../Utils/toolbox");

var _ = _interopRequireDefault(require("../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Field rendering", function () {
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