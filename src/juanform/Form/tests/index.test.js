import React from 'react'
import sinon from 'sinon'
import { shallow, render, mount } from 'enzyme'
import { createCustomForm } from '../../Utils'
import { act } from 'react-dom/test-utils';
import { StubComponent, callInObject, createMockEvent } from '../../Utils/toolbox'
import Form, { createTransform, reducer } from '../'
import {
  Button,
  CheckBox,
  ComboBox,
  Field,
  Input
} from '../../'

describe("#Form", () => {
  describe("Form transform function", () => {
    const transform = createTransform({ props: {}, onInputChange: "value", onSubmit: "value", transform: "value" });
    const createPropTest = (Comp, prop) => ({
      component: Comp,
      prop,
      map(f) { return createPropTest(f(this.component), this.prop) },
      isPropDefined() { return !!this.component.props[this.prop] }
    })

    it("should ignore unknown components", () => {
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

    it("should add event to known components", () => {
      const FormComponents = [
        createPropTest(<Button submit />, "onClick"),
        createPropTest(<CheckBox />, "onChange"),
        createPropTest(<ComboBox />, "onChange"),
        createPropTest(<Input />, "onChange"),
        createPropTest(<Field />, "transform")
      ]
      const mapped = FormComponents
        .map(callInObject("map", transform))
        .map(callInObject("isPropDefined"))
        .every(Boolean)
      expect(mapped).toBe(true)
    })

    it("should return undefined on null children", () => {
      expect(transform(null)).toBeUndefined();
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

    const onChangeSpy = sinon.spy()
    let wrapper = mount(
      <Form onChange={onChangeSpy}>
        <Input name="name" />
      </Form>
    )
    it("should call onChange prop when handleChange", () => {
      const data = {
        id: "any",
        name: "name",
        value: "something"
      }
      act(() => {
        wrapper.find(Form).find(Input).props().onChange(mockEvent, data);
      })
      expect(onChangeSpy.callCount).toBe(1)
    })

    it("should work without onChange", () => {
      const wrapper = mount(
        <Form>
          <Input name="name" />
        </Form>
      )
      const data = {
        id: "any",
        name: "name",
        value: "something"
      }
      act(() => {
        wrapper.find(Form).find(Input).props().onChange(mockEvent, data);
      })
      expect(wrapper).toBeDefined();
    })

    it("should call onSubmit prop upon handleSubmit", () => {
      preventDefaultSpy.resetHistory()
      const onSubmitSpy = sinon.spy()
      const wrapper = shallow(
        <Form onSubmit={onSubmitSpy} >
          <Button submit />
        </Form>
      )
      act(() => {
        wrapper.find(Button).props().onClick(mockEvent)
      })
      expect(onSubmitSpy.callCount).toBe(1)
      expect(preventDefaultSpy.callCount).toBe(1)
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

  describe("Form reducer", () => {
    it("set using name when present instead of id", () => {
      const action = { type: "INPUT", data: { name: "name", id: "id", value: "one" } };
      const nextState = reducer({}, action)
      expect(nextState).toEqual({ name: "one" })
    })

    it("set a state attribute with given payload", () => {
      const action = { type: "INPUT", data: { id: "id", value: "one" } };
      const nextState = reducer({}, action)
      expect(nextState).toEqual({ id: "one" })
    })

    it("ignore any other actions", () => {
      const previous = { previous: "here" }
      const nextState = reducer(previous, { type: "not" })
      expect(nextState).toEqual(previous);
    })
  })
})

