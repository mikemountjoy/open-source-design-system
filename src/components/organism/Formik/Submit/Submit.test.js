import React from "react"
import { mount } from "enzyme"
import Submit from "./Submit"

describe("Submit Component Test", () => {
  const component = mount(<Submit>Continue</Submit>)
  it("Render text inside of submit button", () => {
    expect(component.text()).toEqual("Continue")
  })
  it("Match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})
