import React from "react"
import { mount } from "enzyme"
import ListItem from "./ListItem"
import "jest-styled-components"

describe("List Items Testing", () => {
  const text = "Example Item"
  const component = mount(<ListItem>{text}</ListItem>)
  it("Wraps items in <li> tags", () => {
    expect(component.find("li").text()).toEqual(text)
  })
  it("Default prop of padding is true", () => {
    expect(component.prop("padding")).toEqual(true)
    expect(component).not.toHaveStyleRule("padding", "0")
  })
  it("When padding is false, padding is 0", () => {
    component.setProps({ padding: false })
    expect(component).toHaveStyleRule("padding", "0")
  })
  it("Snapshot Testing", () => {
    expect(component).toMatchSnapshot()
  })

  it("Snapshot Testing with className", () => {
    const componentWithClassName = mount(<ListItem className="testClassName">{text}</ListItem>)

    expect(componentWithClassName).toMatchSnapshot()
  })
})
