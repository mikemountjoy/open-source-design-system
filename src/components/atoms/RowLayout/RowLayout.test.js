import React from "react"
import { shallow, mount } from "enzyme"
import RowLayout from "./RowLayout"

describe("RowLayout Component Test", () => {
  it("Match last snapshot", () => {
    const component = shallow(<RowLayout>Test</RowLayout>)
    expect(component).toMatchSnapshot()
  })

  it("prop: id - check default and custom value", () => {
    const defaultValue = shallow(<RowLayout />)
    expect(defaultValue.props().id).toEqual(undefined)
    const customValue = defaultValue.setProps({ id: "1" })
    expect(customValue.props().id).toEqual("1")
  })

  it("prop: className - check default and custom value", () => {
    const defaultValue = shallow(<RowLayout />)
    expect(defaultValue.props().className).toEqual(undefined)
    const customValue = defaultValue.setProps({ className: "test" })
    expect(customValue.props().className).toEqual("test")
  })

  it("prop: justifyContent - check default and custom value", () => {
    const defaultValue = mount(<RowLayout />)
    expect(defaultValue).toHaveStyleRule("justify-content", "flex-start")
    const customValue = defaultValue.setProps({ justifyContent: "center" })
    expect(customValue).toHaveStyleRule("justify-content", "center")
  })

  it("prop: alignItems - check default and custom value", () => {
    const defaultValue = mount(<RowLayout />)
    expect(defaultValue).toHaveStyleRule("align-items", "flex-start")
    const customValue = defaultValue.setProps({ alignItems: "center" })
    expect(customValue).toHaveStyleRule("align-items", "center")
  })

  it("prop: flexWrap - check default and custom value", () => {
    const defaultValue = mount(<RowLayout />)
    expect(defaultValue).toHaveStyleRule("flex-wrap", "wrap")
    const customValue = defaultValue.setProps({ flexWrap: "no-wrap" })
    expect(customValue).toHaveStyleRule("flex-wrap", "no-wrap")
  })
})
