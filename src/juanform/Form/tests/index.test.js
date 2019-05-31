import React from 'react'
import sinon from 'sinon'
import { shallow, render, mount } from 'enzyme'
import { createCustomForm } from '../../Utils'
import { StubComponent, callInObject, createMockEvent } from '../../Utils/toolbox'
import Form from '../'
import {
  Button,
  CheckBox,
  ComboBox,
  Field,
  Input,
  Label,
} from '../../'

describe("Form transform function", () => {
  const wrapper = shallow(<Form />)
  const transform = wrapper.find(Form)
  console.log(transform.getElements());
  const createPropTest = (Comp, prop) => ({
    component: Comp,
    prop,
    map(f) { return createPropTest(f(this.component), this.prop) },
    isPropDefined() { return !!this.component.props[this.prop] }
  })

  it.skip("should ignore unknown components", () => {
    const FormComponents = [
      createPropTest(<Button />, "onClick"),
      createPropTest(<StubComponent />, "onClick"),
      createPropTest(<StubComponent />, "onChange"),
    ]
    const mapped = FormComponents
      .map(callInObject("map", transform))
      .map(callInObject("isPropDefined"))
      .map(x => !x)
      .every(Boolean)
    expect(mapped).toBe(true)
  })

  it.skip("should add event to known components", () => {
    const FormComponents = [
      createPropTest(<Button submit />, "onClick"),
      createPropTest(<CheckBox />, "onChange"),
      createPropTest(<ComboBox />, "onChange"),
      createPropTest(<Input />, "onChange"),
      createPropTest(<Field />, "transform")
    ]
    const mapped = FormComponents
      .map(callInObject("map", instance.transform))
      .map(callInObject("isPropDefined"))
      .every(Boolean)
    expect(mapped).toBe(true)
  })

  it("should return undefined on null children", () => {
    expect(instance.transform(null)).toBeUndefined();
  })

  const transformSpy = sinon.spy()
  const CustomForm = createCustomForm(transformSpy)
  const custom = mount(
    <CustomForm>
      <div></div>
      <div></div>
      <div></div>
    </CustomForm>
  )
  it("should call customTransform when defined", () => {
    expect(transformSpy.callCount).toBe(3)
  })

})

describe("Form behavior", () => {
  const mockTarget = { value: "someReallyGoodValue" }
  const preventDefaultSpy = sinon.spy();
  const mockEvent = createMockEvent(preventDefaultSpy, mockTarget)

  it("should call onChange prop when handleChange", () => {
    const onChangeSpy = sinon.spy()
    const wrapper = shallow(<Form onChange={onChangeSpy} />)
    const element = { name: "name", value: "Helena" }
    wrapper.instance().handleInputChange(undefined, element)
    wrapper.instance().handleSubmit(mockEvent)
    expect(onChangeSpy.callCount).toBe(1)
    expect(onChangeSpy.calledWith(wrapper.state())).toBeTruthy()
  })

  it("should call onSubmit prop upon handleSubmit", () => {
    preventDefaultSpy.resetHistory()
    const onSubmitSpy = sinon.spy()
    const wrapper = shallow(<Form onSubmit={onSubmitSpy} />)
    const element = { name: "name", value: "Helena" }
    wrapper.instance().handleInputChange(undefined, element)
    wrapper.instance().handleSubmit(mockEvent)
    expect(onSubmitSpy.callCount).toBe(1)
    expect(onSubmitSpy.calledWith(wrapper.state())).toBeTruthy()
    expect(preventDefaultSpy.callCount).toBe(1)
  })

  it("should change state upon handleInputChange", () => {
    const wrapper = shallow(<Form />)
    const formElement = { id: "someid", name: "SomeComponent", value: "SomeCleverValue" }
    const expectedState = { [formElement.name]: formElement.value }
    wrapper.instance().handleInputChange(mockEvent, formElement)
    expect(wrapper.state()).toEqual(expectedState)
  })

  it("should change state using id when no name is supplyed", () => {
    const wrapper = shallow(<Form />)
    const formElement = { id: "SomeComponent", value: "SomeCleverValue" }
    const expectedState = { [formElement.id]: formElement.value }
    wrapper.instance().handleInputChange(mockEvent, formElement)
    expect(wrapper.state()).toEqual(expectedState)
  })

})

describe("Form rendering", () => {
  it("should render correctly", () => {
    const wrapper = render(<Form />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render the 'as' prop", () => {
    const wrapper = mount(<Form as={StubComponent} />)
    expect(wrapper.find(StubComponent).length).toBe(1)
  })
})
