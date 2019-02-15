import React from 'react'
import { render , mount } from 'enzyme'
import { StubComponent } from '../../Utils/toolbox'
import Label from '../'

describe("Field rendering", () => {
  it("should render correctly", () => {
    const wrapper = render(<Label/>)
    expect(wrapper).toMatchSnapshot()
  })

  it("should render the 'as' prop", () => {
    const wrapper = mount(<Label as={StubComponent}/>)
    expect(wrapper.find(StubComponent).length).toBe(1)
  })
})
