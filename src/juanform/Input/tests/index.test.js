import React from 'react'
import sinon from 'sinon'
import { shallow, render, mount } from 'enzyme'
import { createMockEvent, StubComponent } from '../../Utils/toolbox'
import { act } from 'react-dom/test-utils';
import Input, { findType } from '../'
import { Types } from '../constants'
import Styled from '../../Styled';

describe('#Input', () => {
  describe("Input behavior", () => {
    const mockTarget = { value: "some" }
    const mockEvent = createMockEvent(undefined, mockTarget)

    it("should default type to text", () => {
      const expected = "text"
      const result = findType()
      expect(result).toBe(expected)
    })

    it("should return text upon invalid type", () => {
      const expected = "text"
      const result = findType("foo")
      expect(result).toBe(expected)
    })

    it("should return type when valid", () => {
      const mapped = Types.map(x => findType(x))
      expect(mapped).toEqual(Types)
    })

    it("should call onChange when given", () => {
      const changeSpy = sinon.spy()
      const wrapper = shallow(<Input onChange={changeSpy} />)
      const data = {
        id: undefined,
        name: undefined,
        value: 'some'
      }
      act(() => {
        wrapper.find(Styled.Defaults.Input).simulate('change', mockEvent);
      })
      expect(changeSpy.called).toBeTruthy()
      expect(changeSpy.calledWith(mockEvent, data)).toBeTruthy();
    })
  })

  describe("Input rendering", () => {
    it("should render correctly", () => {
      const wrapper = render(<Input />)
      expect(wrapper).toMatchSnapshot()
    })

    it("should render the 'as' prop", () => {
      const wrapper = mount(<Input as={StubComponent} />)
      expect(wrapper.find(StubComponent).length).toBe(1)
    })
  })
});
