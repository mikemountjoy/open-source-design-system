import React from "react"
import { shallow, mount } from "enzyme"
import "jest-styled-components"
import toJson from "enzyme-to-json"
import { Card } from "index"
import { colourPalette } from "../../../brandColours.ts"

const { black } = colourPalette.examplePalette

describe("Card Component", () => {
  it("Renders title with <h2> tags", () => {
    const cardWithH2 = shallow(<Card title="fooBar" />)
    expect(cardWithH2.find("h2").text()).toEqual("fooBar")
  })
  it("Renders title with no <h2> tags", () => {
    const cardWithNoH2 = shallow(<Card title={<h1>hello</h1>} />)
    expect(cardWithNoH2.contains("h2")).toEqual(false)
    expect(cardWithNoH2.find("h1").text()).toEqual("hello")
  })
  it("Renders with/without boxShadow", () => {
    const withShadow = mount(<Card boxShadow />)
    expect(withShadow).toHaveStyleRule("box-shadow", `0 4px 8px ${black.tint60.hex}`)
    const noShadow = withShadow.setProps({ boxShadow: false })
    expect(noShadow).toHaveStyleRule("box-shadow", undefined)
  })
  it("Renders with/without body padding", () => {
    const noPadding = mount(<Card bodyPadding={false} />)
    expect(noPadding.find("CardBody")).toHaveStyleRule("padding", "0")
    const withPadding = noPadding.setProps({ bodyPadding: true })
    expect(withPadding.find("CardBody")).toHaveStyleRule("padding", "0 1rem")
  })
  it("Renders with footer", () => {
    const withFooter = shallow(<Card footer="this is the foot" />)
    expect(withFooter.find("CardFooter").exists()).toEqual(true)
    expect(withFooter.contains("this is the foot")).toEqual(true)
  })
  it("Renders with no header or footer", () => {
    const card = shallow(<Card />)
    expect(card.find("CardHeader").exists()).toEqual(false)
    expect(card.find("CardFooter").exists()).toEqual(false)
  })
  it("Renders while collapsed", () => {
    const collapsedCard = mount(<Card collapsed />)
    expect(collapsedCard).toMatchSnapshot()
    expect(collapsedCard.find("CollapsibleContainer")).toHaveStyleRule("max-height", "0")
  })
  it("Renders while not collapsed", () => {
    const collapsedCard = mount(<Card />)
    expect(collapsedCard).toMatchSnapshot()
    expect(collapsedCard.find("CollapsibleContainer")).toHaveStyleRule("max-height", "125rem")
  })
  it("Renders Card with full styling", () => {
    const component = mount(<Card title="fooBar" footer="this is the foot" />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
