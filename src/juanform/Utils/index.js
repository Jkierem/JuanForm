import Form from '../Form'

export const prop = name => object => object ? object[name] : undefined ;
export const set = name => value => object => Object.assign(object, { [name]: value })

export const createFormElement = set("formElement")
export const createButton = createFormElement("Button");
export const createCheckBox = createFormElement("CheckBox")
export const createComboBox = createFormElement("ComboBox")
export const createField = createFormElement("Field")
export const createInput = createFormElement("Input")
export const createLabel = createFormElement("Label")

export const createCustomForm = funk => {
  const CustomForm = class extends Form {};
  CustomForm.prototype.customTransform = funk;
  return CustomForm
}

const Utils = {
  createButton,
  createCheckBox,
  createComboBox,
  createField,
  createInput,
  createLabel,
  createCustomForm,
}
export default Utils;
