import React from "react"
import { shallow } from "enzyme"
import "jest-styled-components"
import Radio from "./Radio"

describe("Radio Input test", () => {
  const component = shallow(<Radio name="dog" id="dog" />)
  it("check radio props", () => {
    expect(component.prop("name")).toEqual("dog")
    expect(component.prop("id")).toEqual("dog")
  })
  it("match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})
