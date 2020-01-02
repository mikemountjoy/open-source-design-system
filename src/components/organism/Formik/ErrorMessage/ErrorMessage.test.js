import React from "react"
import { mount } from "enzyme"
import toJson from "enzyme-to-json"
import ErrorMessage, { StyledErrorMessage } from "./ErrorMessage"
import "jest-styled-components"

describe("ErrorMessage Component Test", () => {
  const component = mount(<ErrorMessage name="email" />)
  const componentStyled = mount(<StyledErrorMessage name="email" />)

  it("ErrorMessage sould match last snapshot", () => {
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it("StyledErrorMessage should match last snapshot", () => {
    const tree = toJson(componentStyled)
    expect(tree).toMatchSnapshot()
  })
})
