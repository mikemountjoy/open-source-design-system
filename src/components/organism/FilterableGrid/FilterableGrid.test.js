import React from "react"
import { shallow, mount } from "enzyme"
import "jest-styled-components"
import FilterableGrid, { NoResults } from "./FilterableGrid"

const labelText = "Filter"
const empty = "Empty"
const height = "150px"
const items = [
  { key: "foo", value: "foo" },
  { key: "bar", value: "bar" },
  { key: "hello", value: "hello" },
  { key: "world", value: "world" },
  { key: "minion", value: "minion" },
]
const newItems = [
  { key: "new", value: "new" },
  { key: "items", value: "items" },
]

describe("FilterableGrid component", () => {
  const component = shallow(<FilterableGrid label={labelText} emptyMessage={empty} items={items} />)
  it("render the correct number of items", () => {
    expect(component.find("GridContainer").children().length).toEqual(items.length)
    expect(component.find("GridItem").length).toEqual(items.length)
  })

  it("renders the correct messages", () => {
    const emptyComponent = shallow(<FilterableGrid label={labelText} emptyMessage={empty} />)
    expect(emptyComponent.find("Label").text()).toEqual(labelText)
    expect(emptyComponent.find("GridItem").length).toEqual(0)
    expect(emptyComponent.find("NoResults").text()).toEqual(empty)
  })

  it("renders the correct dynamic css", () => {
    const styledComponent = mount(
      <FilterableGrid itemsPerRow={4} label={labelText} emptyMessage={empty} items={items} />,
    )
    expect(styledComponent.find("GridContainer")).toHaveStyleRule(
      "grid-template-columns",
      "repeat(4,1fr)",
    )
    expect(styledComponent.find("GridContainer")).toHaveStyleRule("height", "auto")

    styledComponent.setProps({ height })
    expect(styledComponent.find("GridContainer")).toHaveStyleRule("height", height)
  })
  it("renders the correct items when searching", () => {
    component.find("Search").simulate("change", {
      target: {
        value: "foo",
      },
    })
    expect(component.find("GridItem").length).toEqual(1)
    expect(component.find("GridItem").text()).toEqual("foo")
  })
  it("renders no items when searching regex type expressions", () => {
    component.find("Search").simulate("change", {
      target: {
        value: "*",
      },
    })
    expect(component.find("GridItem").length).toEqual(0)
  })
  it("Rerender the props and it updates the state", () => {
    component.setProps({ items: newItems })
    expect(component.state().initialItems).toEqual(newItems)
  })
  it("should render no results component with correct styling", () => {
    const noResult = mount(<NoResults />)
    expect(noResult).toMatchSnapshot()
  })
})
