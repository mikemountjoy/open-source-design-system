import React from "react"
import { mount } from "enzyme"
import "jest-styled-components"
import Label from "./Label"

describe("Label", () => {
  const component = mount(
    <Label id="name" htmlFor="name">
      Name
    </Label>,
  )

  it("render label with bold text", () => {
    expect(component.text()).toEqual("Name")
    expect(component.prop("id")).toEqual("name")
    expect(component.prop("htmlFor")).toEqual("name")
  })

  it("render matches last snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})
