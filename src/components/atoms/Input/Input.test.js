import React from "react"
import { mount } from "enzyme"
import "jest-styled-components"
import Input from "./Input"

describe("Input", () => {
  const component = mount(<Input value="Hello" name="example" type="text" onChange={() => {}} />)
  it("render input with value", () => {
    expect(component.prop("value")).toEqual("Hello")
  })
  it("render matches last snapshot", () => {
    expect(component).toMatchSnapshot()
  })
  it("render matches last snapshot with classname", () => {
    const componentWithClassName = mount(
      <Input
        className="testClassName"
        value="Hello"
        name="example"
        type="text"
        onChange={() => {}}
      />,
    )
    expect(componentWithClassName).toMatchSnapshot()
  })
  it("render matches last snapshot with multiline", () => {
    const multiLine = mount(
      <Input value="Hello" name="example" type="text" onChange={() => {}} multiLine />,
    )
    expect(multiLine).toMatchSnapshot()
  })
})
