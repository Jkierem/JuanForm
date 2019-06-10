"use strict";

var _ = _interopRequireWildcard(require("../"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var createButton = _["default"].createButton,
    createCheckBox = _["default"].createCheckBox,
    createComboBox = _["default"].createComboBox,
    createField = _["default"].createField,
    createInput = _["default"].createInput,
    createLabel = _["default"].createLabel,
    createCustomForm = _["default"].createCustomForm;
describe("Utils tests", function () {
  it("should create a function that sets formElement static value", function () {
    var result = (0, _.createFormElement)("type")({});
    expect(result.formElement).toBe("type");
  });
  it("should set static value to Button", function () {
    var obj = createButton({});
    expect(obj.formElement).toBe("Button");
  });
  it("should set static value to ChecBox", function () {
    var obj = createCheckBox({});
    expect(obj.formElement).toBe("CheckBox");
  });
  it("should set static value to ComboBox", function () {
    var obj = createComboBox({});
    expect(obj.formElement).toBe("ComboBox");
  });
  it("should set static value to Field", function () {
    var obj = createField({});
    expect(obj.formElement).toBe("Field");
  });
  it("should set static value to Input", function () {
    var obj = createInput({});
    expect(obj.formElement).toBe("Input");
  });
  it("should set static value to Label", function () {
    var obj = createLabel({});
    expect(obj.formElement).toBe("Label");
  });
});