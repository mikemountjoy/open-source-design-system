import React from "react"
import { shallow, mount } from "enzyme"
import "jest-styled-components"
import toJson from "enzyme-to-json"
import Heading from "./Heading"

describe("Heading test", () => {
  it("should match last snapshot with a title", () => {
    const component = shallow(<Heading>Hello</Heading>)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it("should render a h1 tag as default", () => {
    const component = mount(<Heading>Hello</Heading>)
    expect(component.find("h1").exists()).toBeTruthy()
    expect(component.find("h1").text()).toEqual("Hello")
  })

  it("should render a h2 tag", () => {
    const component = mount(<Heading level={2}>Hello</Heading>)
    expect(component.find("h2").exists()).toBeTruthy()
    expect(component.find("h2").text()).toEqual("Hello")
  })

  it("should render a h3 tag", () => {
    const component = mount(<Heading level={3}>Hello</Heading>)
    expect(component.find("h3").exists()).toBeTruthy()
    expect(component.find("h3").text()).toEqual("Hello")
  })

  it("should render a h4 tag", () => {
    const component = mount(<Heading level={4}>Hello</Heading>)
    expect(component.find("h4").exists()).toBeTruthy()
    expect(component.find("h4").text()).toEqual("Hello")
  })

  it("should render a h5 tag", () => {
    const component = mount(<Heading level={5}>Hello</Heading>)
    expect(component.find("h5").exists()).toBeTruthy()
    expect(component.find("h5").text()).toEqual("Hello")
  })

  it("should render a h6 tag", () => {
    const component = mount(<Heading level={6}>Hello</Heading>)
    expect(component.find("h6").exists()).toBeTruthy()
    expect(component.find("h6").text()).toEqual("Hello")
  })
})
