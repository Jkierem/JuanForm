import Utils , { createFormElement } from '../'
const {
  createButton,
  createCheckBox,
  createComboBox,
  createField,
  createInput,
  createLabel,
  createCustomForm
} = Utils

describe("Utils tests", () => {
  it("should create a CustomForm", () => {
    const fakeFunction = () => {}
    const customForm = createCustomForm(fakeFunction)
    expect(customForm.prototype.customTransform).toBe(fakeFunction)
  })
  it("should create a function that sets formElement static value", () => {
    const result = createFormElement("type")({})
    expect(result.formElement).toBe("type")
  })
  it("should set static value to Button", () => {
    const obj = createButton({})
    expect(obj.formElement).toBe("Button")
  })
  it("should set static value to ChecBox", () => {
    const obj = createCheckBox({})
    expect(obj.formElement).toBe("CheckBox")
  })
  it("should set static value to ComboBox", () => {
    const obj = createComboBox({})
    expect(obj.formElement).toBe("ComboBox")
  })
  it("should set static value to Field", () => {
    const obj = createField({})
    expect(obj.formElement).toBe("Field")
  })
  it("should set static value to Input", () => {
    const obj = createInput({})
    expect(obj.formElement).toBe("Input")
  })
  it("should set static value to Label", () => {
    const obj = createLabel({})
    expect(obj.formElement).toBe("Label")
  })
})
