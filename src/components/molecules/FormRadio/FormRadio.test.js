import React from "react"
import { mount } from "enzyme"
import toJson from "enzyme-to-json"
import "jest-styled-components"

import FormRadio from "./FormRadio"

describe("FormRadio Input test", () => {
  it("match last snapshot of <FormRadio />", () => {
    const component = mount(<FormRadio />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it("match last snapshot of <FormRadio /> with ThemeProvider", () => {
    const component = mount(<FormRadio row />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
