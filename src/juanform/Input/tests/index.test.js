import React from 'react'
import sinon from 'sinon'
import { shallow , render , mount } from 'enzyme'
import { createMockEvent , StubComponent } from '../../Utils/toolbox'
import Input from '../'
import { Types } from '../constants'

describe("Input behavior", () => {
  const wrapper = shallow(<Input />)
  const instance = wrapper.instance()
  const mockTarget = { value : "any" }
  const mockEvent = createMockEvent(undefined , mockTarget)

  it("should have empty string as default value", () => {
    expect(wrapper.state("value")).toBe("")
  })

  it("should change state upon handleChange", () => {
    instance.handleChange(mockEvent)
    expect(wrapper.state("value")).toBe("any")
  })

  it("should default type to text", () => {
    const expected = "text"
    const result = instance.findType()
    expect(result).toBe(expected)
  })

  it("should return text upon invalid type", () => {
    const expected = "text"
    const result = instance.findType("foo")
    expect(result).toBe(expected)
  })

  it("should return type when valid", () => {
    const mapped = Types.map( x => instance.findType(x) )
    expect(mapped).toEqual(Types)
  })

  it("should call onChange when given", () => {
    const changeSpy = sinon.spy()
    const wrapper = shallow(<Input onChange={changeSpy} />)
    wrapper.instance().handleChange(mockEvent)
    expect(changeSpy.called).toBeTruthy()
  })
})

describe("Input rendering", () => {
  it("should render correctly", () => {
    const wrapper = render(<Input/>)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render the 'as' prop", () => {
    const wrapper = mount(<Input as={StubComponent}/>)
    expect(wrapper.find(StubComponent).length).toBe(1)
  })
})
