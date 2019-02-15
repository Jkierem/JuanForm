import React from 'react'
import sinon from 'sinon'
import { shallow , render , mount } from 'enzyme'
import { createMockEvent , StubComponent } from '../../Utils/toolbox'
import Button from '../'

describe("Button behavior", () => {
  const shallowWrapper = shallow(<Button />)
  const eventSpy = sinon.spy()
  const mockEvent = createMockEvent(eventSpy)

  it("should call work without onClick",() => {
    shallowWrapper.simulate("click",mockEvent)
    expect(eventSpy.called).toBeTruthy()
  })

  it("should call onClick when given", () => {
    const onClickSpy = sinon.spy()
    shallowWrapper.setProps({ onClick: onClickSpy})
    shallowWrapper.simulate("click",mockEvent)
    expect(onClickSpy.called).toBeTruthy()
  })

})

describe("Button rendering", () => {
  const renderWrapper = render(<Button />)
  it("should match snapshot", () => {
    expect(renderWrapper).toMatchSnapshot()
  })

  it("should render the 'as' component prop",() => {
    const wrapper = mount(<Button as={StubComponent}/>)
    const stub = wrapper.find(StubComponent)
    expect(stub.length).toBe(1);
  })
})
