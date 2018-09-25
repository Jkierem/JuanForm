export const prop = name => object => object ? object[name] : undefined ;
export const set = name => info => object => {
  if(object) object[name] = info;
  return object ;
}

export const createFormElement = set("formElement")
export const createButton = createFormElement("Button");
export const createCheckBox = createFormElement("CheckBox")
export const createComboBox = createFormElement("ComboBox")
export const createField = createFormElement("Field")
export const createInput = createFormElement("Input")
export const createLabel = createFormElement("Label")
const Utils = {
  createButton,
  createCheckBox,
  createComboBox,
  createField,
  createInput,
  createLabel,
}
export default Utils;
