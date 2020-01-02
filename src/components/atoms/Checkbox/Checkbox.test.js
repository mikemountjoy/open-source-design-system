import React from "react"
import { mount } from "enzyme"
import "jest-styled-components"
import Checkbox from "./Checkbox"

describe("Input", () => {
  const component = mount(<Checkbox name="dogs" />)
  it("Input type should be checkbox", () => {
    expect(component.find("input").prop("type")).toEqual("checkbox")
  })
  it("Checkbox match previous snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})
