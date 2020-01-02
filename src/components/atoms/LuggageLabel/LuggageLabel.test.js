import React from "react"
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json"
import LuggageLabel from "./LuggageLabel"
import "jest-styled-components"

describe("LuggageLabel Component Test", () => {
  const text = "This is a label"
  const mockFunc = jest.fn()
  const component = shallow(<LuggageLabel onClick={mockFunc}>{text}</LuggageLabel>)
  it("render snapshot", () => {
    const componentFull = mount(<LuggageLabel onClick={mockFunc}>{text}</LuggageLabel>)
    const tree = toJson(componentFull)
    expect(tree).toMatchSnapshot()
  })

  it("rendered children correctly", () => {
    expect(component.children().contains(text)).toBeTruthy()
  })

  it("expect Icon to be hidden", () => {
    expect(component.find("Icon").props().isVisible).toEqual(false)
  })

  it("icon should be visible when isVisible prop is true", () => {
    component.setProps({ editMode: true })
    expect(component.find("Icon").props().isVisible).toEqual(true)
  })

  it("should call function when clicked", () => {
    component.find("Icon").simulate("click")
    expect(mockFunc).toHaveBeenCalled()
  })
})
