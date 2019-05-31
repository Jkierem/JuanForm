import Form from '../Form'
import { set, override } from './toolbox'

export const createCustomForm = (extra) => override(Form)({ customTransform: extra })
export const createFormElement = set("formElement")
export const createButton = createFormElement("Button");
export const createCheckBox = createFormElement("CheckBox");
export const createComboBox = createFormElement("ComboBox");
export const createField = createFormElement("Field");
export const createInput = createFormElement("Input");
export const createLabel = createFormElement("Label");

const Utils = {
  createButton,
  createCheckBox,
  createComboBox,
  createField,
  createInput,
  createLabel,
  createCustomForm
}
export default Utils;
