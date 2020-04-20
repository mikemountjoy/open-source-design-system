import React from "react"
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json"
import "jest-styled-components"
import ListFilter from "./ListFilter"

const options = ["Hello", "Foo", "Bar", "World"]
const formattedOptions = arr => arr.map(item => ({ key: item, value: <p>{item}</p> }))
const formattedOptionsStrings = arr => arr.map(item => ({ key: item, value: item }))

describe("FilterableList Component Testing", () => {
  const componentFull = mount(<ListFilter items={formattedOptions(options)} />)
  const componentFullStrings = mount(<ListFilter items={formattedOptionsStrings(options)} />)
  const component = shallow(<ListFilter items={formattedOptions(options)} />)
  const componentStrings = shallow(<ListFilter items={formattedOptionsStrings(options)} />)
  const emptyComponent = mount(<ListFilter />)

  it("should match snapshot", () => {
    const tree = toJson(componentFull)
    expect(tree).toMatchSnapshot()
  })
  it("should match snapshot w/ strings", () => {
    const tree = toJson(componentFullStrings)
    expect(tree).toMatchSnapshot()
  })
  it("Does not render a list if the options props is empty", () => {
    expect(emptyComponent.find("NoResults").exists()).toEqual(true)
    expect(emptyComponent).toMatchSnapshot()
  })
  it("Render the correct number of items", () => {
    expect(component.find("ListItem").length).toEqual(options.length)
  })
  it("Render the correct number of items w/ strings", () => {
    expect(componentStrings.find("ListItem").length).toEqual(options.length)
  })
  it("Typing in search filters items", () => {
    component.find("Search").simulate("change", {
      currentTarget: {
        value: "Hello",
      },
    })
    expect(component.find("ListItem").length).toEqual(1)
    expect(component.find("p").length).toEqual(1)
  })
  it("Typing in search filters items w/ strings", () => {
    componentStrings.find("Search").simulate("change", {
      currentTarget: {
        value: "Hello",
      },
    })
    const wrapper = componentStrings.find("ListItem")
    expect(wrapper.get(0).key).toEqual("Hello")
    expect(wrapper.length).toEqual(1)
  })
  it("Search is empty and items are alphabetised w/ strings", () => {
    componentStrings.find("Search").simulate("change", {
      currentTarget: {
        value: "",
      },
    })
    const wrapper = componentStrings.find("ListItem")
    expect(wrapper.get(0).key).toEqual("Bar")
    expect(wrapper.get(1).key).toEqual("Foo")
    expect(wrapper.get(2).key).toEqual("Hello")
    expect(wrapper.get(3).key).toEqual("World")
  })
  it("Typing bad regex search doesn't break component", () => {
    component.find("Search").simulate("change", {
      currentTarget: {
        value: "*",
      },
    })
    expect(component.find("ListItem").length).toEqual(1)
    expect(component.find("NoResults").exists()).toBeTruthy()
  })

  it("should reset the search field when the props are updated", () => {
    component.find("Search").simulate("change", {
      currentTarget: {
        value: "this is old",
      },
    })
    expect(component.state().value).toEqual("this is old")
    component.setProps({ items: [{ key: "new item", value: <p>new item</p> }] })
    expect(component.state().value).toEqual("")
  })
})
