import React from "react"
import { shallow, mount } from "enzyme"
import "jest-styled-components"
import StepBar from "./StepBar"

describe("StepBar Component Testing", () => {
  const steps = [{ order: 1, name: "foo" }, { order: 2, name: "bar" }]
  const currentStep = 2
  const component = shallow(<StepBar steps={steps} currentStep={currentStep} />)
  const componentStyle = mount(<StepBar steps={steps} currentStep={currentStep} />)
  it("Should render the correct amount of steps", () => {
    expect(component.find("StepWrapper").length).toEqual(steps.length)
  })
  it("Have active styling on step 2", () => {
    expect(component.find(".active").length).toEqual(1)
    expect(
      component
        .find("StepName")
        .at(currentStep - 1)
        .hasClass("active"),
    ).toEqual(true)
  })
  it("should match snapshot for styling", () => {
    expect(componentStyle).toMatchSnapshot()
  })
})
