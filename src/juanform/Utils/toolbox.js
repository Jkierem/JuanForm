import React from 'react'
export const prop = name => object => object ?.[name];
export const set = name => value => object => Object.assign(object, { [name]: value })
export const call = f => (...args) => (_this) => f.call(_this, ...args)
export const overrideProps = f => (overrides) => (props) => f({ ...props, ...overrides })
export const callInObject = (att, ...args) => obj => call(obj[att])(...args)(obj)
export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
export const identity = a => a
export const isAnyOf = (...data) => (value) => Find(value)(data) ? true : false;
export const isDefined = a => a !== undefined && a !== null
export const JustOf = (a) => () => a
export const Find = (value) => (data) => data.find(x => x == value)
export const Either = (data) => (right) => (left) => {
  const r = right(data)
  return isDefined(r) ? r : left(data)
}

export const createMockEvent = (spy = identity, target = { value: "any" }) => ({
  preventDefault: spy,
  target,
})

export const StubComponent = (props) => {
  return <a>Replacement</a>
}
