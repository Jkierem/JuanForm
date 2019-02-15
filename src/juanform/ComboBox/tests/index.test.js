import React from 'react'
import sinon from 'sinon'
import { shallow , render , mount } from 'enzyme'
import { createMockEvent , StubComponent } from '../../Utils/toolbox'
import Styled from '../../Styled'
import ComboBox from '../'

describe("ComboBox.Option rendering" , () => {
  it("should match snapshot", () => {
    const wrapper = render(<ComboBox.Option />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render the 'as' prop" , () => {
    const wrapper = mount(<ComboBox.Option as={StubComponent}/>)
    expect(wrapper.find(StubComponent).length).toBe(1)
  })

  it("should an option and render children", () => {
    const wrapper = mount(<ComboBox.Option>hey</ComboBox.Option>)
    const options = wrapper.find(Styled.Defaults.Option)
    expect(options.length).toBe(1)
    expect(options.text()).toBe("hey")
  })
})

describe("ComboBox behavior", () => {
  const onChangeSpy = sinon.spy()
  const mockTarget = { value: "someValue" }
  const mockEvent = createMockEvent(undefined,mockTarget)
  const wrapper = shallow(<ComboBox onChange={onChangeSpy}/>)

  it("should call onChange upon mounting", () => {
    expect(onChangeSpy.callCount).toBe(1)
  })

  it("should set value as undefined when no options are defined", () => {
    expect(wrapper.state("state")).toBeUndefined()
  })

  it("should call onChage prop when handleChange is triggered",() => {
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state("value")).toEqual(mockTarget.value)
    expect(onChangeSpy.callCount).toBe(2)
  })

  it("should set value to target value", () => {
    const wrapper = shallow(<ComboBox/>)
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state("value")).toEqual(mockTarget.value)
  })

  it("should choose the first value of options", () => {
    const comboWithOptions = shallow(
      <ComboBox>
        <ComboBox.Option value={"one"}/>
        <ComboBox.Option value={"two"}/>
      </ComboBox>
    )
    expect(comboWithOptions.state("value")).toBe("one")
  })

  it("should choose the first child of options", () => {
    const comboWithOptions = shallow(
      <ComboBox>
        <ComboBox.Option>One</ComboBox.Option>
        <ComboBox.Option>Two</ComboBox.Option>
      </ComboBox>
    )
    expect(comboWithOptions.state("value")).toBe("One")
  })

})

describe("ComboBox rendering", () => {
  it("should match snapshot", () => {
    const wrapper = render(<ComboBox />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render a null value option on empty options", () => {
    const wrapper = shallow(<ComboBox options={[]} />)
    expect(wrapper.find(ComboBox.Option).length).toBe(1)
  })

  it("should show custom empty message", () => {
    const customMessage = "Nothing to see here..."
    const wrapper = mount(<ComboBox options={[]} emptyMessage={customMessage}/>)
    expect(wrapper.find(ComboBox.Option).text()).toBe(customMessage)
  })

  it("should render options given an option list", () => {
    const options = [
      { value:1 , label: "One"},
      { value:2 , label: "Two"},
      { value:3 , label: "Three"},
      { value:4 , label: "Four"},
    ]
    const wrapper = shallow(<ComboBox options={options} />)
    expect(wrapper.find(ComboBox.Option).length).toBe(4)
  })

  it("should render the 'as' prop" , () => {
    const wrapper = mount(<ComboBox as={StubComponent}/>)
    expect(wrapper.find(StubComponent).length).toBe(1)
  })

})
