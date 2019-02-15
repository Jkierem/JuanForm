import React from 'react'
import sinon from 'sinon'
import { shallow , render , mount } from 'enzyme'
import { createMockEvent , StubComponent } from '../../Utils/toolbox'
import CheckBox from '../'

describe("Checkbox behavior", () => {

  const mockEvent = createMockEvent()
  const defaultCheckbox = shallow(<CheckBox />)

  it("should be false by default", () => {
    expect(defaultCheckbox.state("isChecked")).toBe(false);
  })

  it("should change on click",() => {
    defaultCheckbox.instance().handleChange(mockEvent)
    expect(defaultCheckbox.state("isChecked")).toBe(true);
  })

  const onChangeSpy = sinon.spy()
  const mockProps = {
    checked: true,
    name: "someValue",
    id: "test",
    onChange: onChangeSpy
  }
  const custom = shallow(
    <CheckBox
      {...mockProps}
    />
  )

  it("should call on change prop", () => {
    custom.instance().handleChange(mockEvent)
    const onChangeArgs = [
      mockEvent,
      {
        id: mockProps.id,
        name: mockProps.name,
        value: !mockProps.checked
      }
    ]
    expect(onChangeSpy.args[0]).toEqual(onChangeArgs)
  })

})

describe("Checkbox rendering", () => {
  it("should match snapshot", () => {
    const wrapper = render(<CheckBox />)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render the 'as' prop" , () => {
    const wrapper = mount(<CheckBox as={StubComponent}/>)
    expect(wrapper.find(StubComponent).length).toBe(1)
  })
})
