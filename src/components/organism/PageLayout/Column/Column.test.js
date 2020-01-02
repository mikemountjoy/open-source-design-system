import React from "react"
import { shallow, mount } from "enzyme"
import "jest-styled-components"
import toJson from "enzyme-to-json"
import Column from "./Column"

describe("Column component test", () => {
  it("should match snapshot", () => {
    const component = shallow(<Column>snapshot</Column>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it("should render children correctly", () => {
    const children = "this is the child"
    const component = shallow(<Column>{children}</Column>)
    expect(component.text()).toEqual(children)
  })

  it("should check default props", () => {
    const component = mount(<Column />)
    expect(component).toHaveStyleRule("grid-column", "auto / span 12")
    expect(component).toHaveStyleRule("grid-row", "auto / span 1")
  })

  it("should be able to pass string or number to row props, number should prefix it with span", () => {
    const component = mount(<Column row={[1, 3]} />)
    expect(component).toHaveStyleRule("grid-row", "1 / span 3")
    component.setProps({ row: [1, "end-line"] })
    expect(component).toHaveStyleRule("grid-row", "1 / end-line")
  })

  it("should receive tabletPortrait media queries", () => {
    const component = mount(<Column spanTabletPortrait={[1, 3]} />)
    expect(component).toHaveStyleRule("grid-column", "1 / span 3", {
      media: "all and (min-width: 48em)",
    })
  })

  it("should receive tabletLandscape media queries", () => {
    const component = mount(<Column spanTabletLandscape={[1, 3]} />)
    expect(component).toHaveStyleRule("grid-column", "1 / span 3", {
      media: "all and (min-width: 60em)",
    })
  })

  it("should receive desktop media queries", () => {
    const component = mount(<Column spanDesktop={[1, 3]} />)
    expect(component).toHaveStyleRule("grid-column", "1 / span 3", {
      media: "all and (min-width: 75em)",
    })
  })
})
