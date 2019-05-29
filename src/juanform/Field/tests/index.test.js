import React from 'react'
import sinon from 'sinon'
import { shallow, render, mount } from 'enzyme'
import { StubComponent } from '../../Utils/toolbox'
import Field from '../'

describe("#Field", () => {
  describe("Field behavior", () => {
    it("should apply transform when given", () => {
      const transformSpy = sinon.spy()
      const wrapper = shallow(
        <Field transform={transformSpy}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </Field>
      )
      expect(transformSpy.callCount).toBe(5)
    })
  })

  describe("Field rendering", () => {
    it("should render correctly", () => {
      const wrapper = render(<Field />)
      expect(wrapper).toMatchSnapshot()
    })

    it("should render the 'as' prop", () => {
      const wrapper = mount(<Field as={StubComponent} />)
      expect(wrapper.find(StubComponent).length).toBe(1)
    })
  })
})
