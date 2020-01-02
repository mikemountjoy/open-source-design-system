import React from "react"
import { shallow, mount } from "enzyme"
import "jest-styled-components"
import toJson from "enzyme-to-json"
import PageGrid from "./PageGrid"

describe("Page Grid Testing", () => {
  it("should match snapshot", () => {
    const component = shallow(<PageGrid>Hello World</PageGrid>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it("should render correct number of rows", () => {
    const component = mount(<PageGrid rows={3} />)
    expect(component).toHaveStyleRule("grid-template-rows", "repeat(3,1fr)")
  })
})
