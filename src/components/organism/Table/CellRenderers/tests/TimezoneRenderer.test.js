import React from "react"
import { shallow } from "enzyme"
import "jest-styled-components"
import TimezoneRenderer from "../TimezoneRenderer"

describe("Test the timezone Renderer", () => {
  let component
  beforeEach(() => {
    component = shallow(<TimezoneRenderer />)
  })

  it("matches last snapshot", () => {
    expect(component).toMatchSnapshot()
  })

  it("Sets the selected value on handleChange", () => {
    const newOption = "option 1"
    component.instance().handleChange({ value: newOption })
    expect(component.instance().getValue()).toEqual(newOption)
  })
})
