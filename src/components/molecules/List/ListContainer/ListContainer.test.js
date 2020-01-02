import React from "react"
import { mount } from "enzyme"
import ListContainer from "./ListContainer"
import "jest-styled-components"

describe("ListContainer Component Testing", () => {
  const component = mount(
    <ListContainer>
      <li>hello</li>
      <li>world</li>
    </ListContainer>,
  )
  it("Render a <> tag", () => {
    expect(component.find("ul").exists()).toEqual(true)
  })
  it("Default prop of endingLine is true", () => {
    expect(component.prop("endingLine")).toEqual(true)
  })
  it("Border can be toggled", () => {
    expect(component).toHaveStyleRule("border", "none")
    component.setProps({ border: true })
    expect(component).not.toHaveStyleRule("border", "none")
  })
  it("Snapshot Testing", () => {
    expect(component).toMatchSnapshot()
  })
})
