import React from 'react'
import { render } from 'enzyme'
import {
  prop,
  set,
  compose,
  identity,
  isDefined,
  ValueOf,
  Find,
  Either,
  createMockEvent,
  StubComponent
} from '../toolbox'

describe("Toolbox test", () => {
  it("should set a property", () => {
    const obj = set("some")("value")({})
    expect(obj.some).toBe("value")
  })

  it("should get a property", () => {
    const obj = { something: "valuable" }
    const value = prop("something")(obj)
    expect(value).toBe(obj.something)
  })

  it("should compose functions", () => {
    const arg = { some: { nested: { value: "here" } } }
    const normal = (obj) => prop("value")(prop("nested")(prop("some")(obj)))
    const composed = compose( prop("value") , prop("nested") , prop("some") )
    expect(composed(arg)).toBe(normal(arg))
  })

  it("should be identity", () => {
    const obj = { some: "value" }
    expect(identity(obj)).toBe(obj)
  })

  it("should return true to non-null defined values", () => {
    expect(isDefined({})).toBeTruthy()
    expect(isDefined(true)).toBeTruthy()
    expect(isDefined(false)).toBeTruthy()
    expect(isDefined(0)).toBeTruthy()
    expect(isDefined("0")).toBeTruthy()
    expect(isDefined("")).toBeTruthy()
    expect(isDefined(122)).toBeTruthy()
  })

  it("should return false to null or undefined values", () => {
    expect(isDefined(null)).toBeFalsy()
    expect(isDefined(undefined)).toBeFalsy()
  })

  it("should return a function that resolves to value", () => {
    const value = "stringsAreCool"
    const someValue = ValueOf(value)
    expect(someValue()).toBe(value)
  })

  it("should return a value in an array", () => {
    const arr = [1,2,3,4]
    const found = Find(2)(arr)
    expect(found).toBe(2)
  })

  it("should return undefined when value is not in array", () => {
    const arr = [1,2,3,4]
    const found = Find(5)(arr)
    expect(found).toBeUndefined()
  })

  it("should return right of data when defined", () => {
    const right = ValueOf("some")
    const left = ValueOf("not")
    const either = Either([])(right)(left)
    expect(either).toBe(right())
  })

  it("should return left when right is undefined", () => {
    const right = ValueOf(undefined)
    const left = ValueOf("not")
    const either = Either([])(right)(left)
    expect(either).toBe(left())
  })

  it("should create a default mock event", () => {
    const event = {
      preventDefault: identity,
      target: { value : "any" }
    }

    expect(createMockEvent()).toEqual(event)
  })

  it("should create a custom mock event", () => {
    const fake = "something"
    const target = "else"
    const event = {
      preventDefault: fake,
      target,
    }
    expect(createMockEvent(fake,target)).toEqual(event)
  })

  it("should render a stub component", () => {
    const wrapper = render(<StubComponent />)
    expect(wrapper).toMatchSnapshot()
  })
})
