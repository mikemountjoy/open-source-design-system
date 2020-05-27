import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import "jest-styled-components"
import Panel from "./Panel"

describe("Panel", () => {
    const commonProps = {
        defaultOpen: false,
        icon: "check",
        label: "open/close",
    }
    it("should match the snapshot", () => {
        const componentWithoutChild = shallow(<Panel {...commonProps}/>)
        const tree = toJson(componentWithoutChild)
        expect(tree).toMatchSnapshot()
    })
    it("should show child content when the button is clicked", () => {
        const childProp = <p>Mock Content</p>;
        const componentWithChild = shallow(<Panel {...commonProps}>{childProp}</Panel>)
        expect(componentWithChild.state().open).toEqual(false)
        expect(componentWithChild.find("p").exists()).toEqual(false)
        componentWithChild.find("PanelButton").simulate("click")
        expect(componentWithChild.state().open).toEqual(true)
        expect(componentWithChild.find("p").exists()).toEqual(true)
    })
    // it("should use the correct colours", () => {
    //     const childProp = <p>Mock Content</p>;
    //     const componentWithChild = shallow(<Panel {...commonProps}>{childProp}</Panel>)
    //     console.log(componentWithChild.find("PanelButton").props())
    //     expect(componentWithChild.find("PanelButton")).toHaveStyleRule("color", "#01579B")
    // })
    // it("should flip the arrow icon when button is clicked", () => {
    //     const componentWithoutChild = shallow(<Panel {...commonProps}/>)
    //     // console.log(componentWithoutChild.find("ArrowIcon").children().svg.debug())
    //     // expect(componentWithoutChild.find("ArrowIcon")).toHaveStyleRule("transform", "scaleY(1)")
    //     expect(componentWithoutChild.find("ArrowIcon").toHaveStyleRule("margin-left", "0.5rem")
    //     componentWithoutChild.find("PanelButton").simulate("click")
    //     // expect(componentWithoutChild.find("ArrowIcon")).toHaveStyleRule("transform", "scaleY(-1)")
    // })
})

