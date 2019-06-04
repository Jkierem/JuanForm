import React from 'react'
import sinon from "sinon"
import { render } from 'enzyme'
import {
  prop,
  set,
  compose,
  identity,
  isDefined,
  JustOf,
  Find,
  Either,
  createMockEvent,
  StubComponent,
  overrideProps,
  callInObject,
  call
} from '../toolbox'

describe("Toolbox test", () => {
  describe("Prop", () => {
    it("should get a property", () => {
      const obj = { something: "valuable" }
      const value = prop("something")(obj)
      expect(value).toBe(obj.something)
    })

    it("should return undefined when property is undefined", () => {
      const obj = {}
      const value = prop("something")(prop("non")(prop("existant")(obj)))
      expect(value).toBeUndefined()
    })
  })

  describe("Set", () => {
    it("should set a property", () => {
      const obj = set("some")("value")({})
      expect(obj.some).toBe("value")
    })
  })

  describe("Call", () => {
    it("should return a function that calls call method with proper args", () => {
      const spy = sinon.spy();
      function funk() {
        spy(this);
      }
      const _this = "this"
      call(funk)()(_this);
      expect(spy.calledWith(_this)).toBeTruthy();
    })
  })

  describe("OverrideProps", () => {
    it("should override props", () => {
      const spy = sinon.spy();
      const over = { one: "argument" };
      const args = { another: "arg" };
      const overridedSpy = overrideProps(spy)(over);
      overridedSpy(args);
      const expected = { ...args, ...over }
      expect(spy.calledWith(expected)).toBeTruthy();
    })
  })

  describe("CallInObject", () => {
    it("should call a method inside an object", () => {
      const spy = sinon.spy();
      const obj = {
        myMethod: spy,
      }
      const arg = "argOne";
      callInObject("myMethod", arg)(obj);
      expect(spy.calledWith(arg)).toBeTruthy();
    })
  })

  describe("Compose", () => {
    it("should compose functions", () => {
      const arg = { some: { nested: { value: "here" } } }
      const normal = (obj) => prop("value")(prop("nested")(prop("some")(obj)))
      const composed = compose(prop("value"), prop("nested"), prop("some"))
      expect(composed(arg)).toBe(normal(arg))
    })
  })

  describe("Identity", () => {
    it("should be identity", () => {
      const obj = { some: "value" }
      expect(identity(obj)).toBe(obj)
    })

    it("should not alter a composition", () => {
      const obj = { some: { nested: "value" } }
      const comp = compose(prop("nested"), prop("some"))
      const compWithIdentity = compose(identity, prop("nested"), identity, prop("some"), identity)
      expect(compWithIdentity(obj)).toEqual(comp(obj))
    })
  })

  describe("IsDefined", () => {
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
  })

  describe("JustOf", () => {
    it("should return a function that resolves to value", () => {
      const value = "stringsAreCool"
      const someValue = JustOf(value)
      expect(someValue()).toBe(value)
    })
  })

  describe("Find", () => {
    it("should return a value in an array", () => {
      const arr = [1, 2, 3, 4]
      const found = Find(2)(arr)
      expect(found).toBe(2)
    })

    it("should return undefined when value is not in array", () => {
      const arr = [1, 2, 3, 4]
      const found = Find(5)(arr)
      expect(found).toBeUndefined()
    })
  })

  describe("Either", () => {
    it("should return right of data when defined", () => {
      const right = JustOf("some")
      const left = JustOf("not")
      const either = Either([])(right)(left)
      expect(either).toBe(right())
    })

    it("should return left when right is undefined", () => {
      const right = JustOf(undefined)
      const left = JustOf("not")
      const either = Either([])(right)(left)
      expect(either).toBe(left())
    })
  })

  describe("CreateMockEvent", () => {
    it("should create a default mock event", () => {
      const event = {
        preventDefault: identity,
        target: { value: "any" }
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
      expect(createMockEvent(fake, target)).toEqual(event)
    })
  })

  describe("Stub Component", () => {
    it("should render a stub component", () => {
      const wrapper = render(<StubComponent />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
