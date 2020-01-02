import React from "react"
import { shallow } from "enzyme"
import List from "./List"
import "jest-styled-components"

describe("List", () => {
  it("should render snapshot", () => {
    const component = shallow(
      <List listType="ul">
        <li>List 1</li>
        <li>List 2</li>
      </List>,
    )
    expect(component).toMatchSnapshot()
  })

  it("should render a ul when no listType is given", () => {
    const component = shallow(<List />)
    expect(component.find("StyledList").props().as).toEqual("ul")
  })

  it("should render a ol when listType is ol", () => {
    const component = shallow(<List listType="ol" />)
    expect(component.find("StyledList").props().as).toEqual("ol")
  })

  it("should render a ul when listType is ul", () => {
    const component = shallow(<List listType="ul" />)
    expect(component.find("StyledList").props().as).toEqual("ul")
  })
})
