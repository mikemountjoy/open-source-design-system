import React from "react"
import { shallow } from "enzyme"
import "jest-styled-components"
import DefaultTextEditor from "../DefaultTextEditor"

const component = shallow(<DefaultTextEditor value="This is inside the div" />)

describe("DefaultTextEditor test", () => {
  it("should match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})
