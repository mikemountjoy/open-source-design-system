import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import Theme from "./Theme"
import "jest-styled-components"

describe("List Items Testing", () => {
  const component = shallow(<Theme />)
  it("Snapshot Testing", () => {
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
