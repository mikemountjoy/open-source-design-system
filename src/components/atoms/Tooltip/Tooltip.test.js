import React from "react"
import { shallow } from "enzyme"

import Tooltip from "./Tooltip"

const ExampleContent = () => <span>I am inside a tooltip, look at me!!!!</span>

describe("Tooltip Component Testing", () => {
  const component = shallow(<Tooltip tooltipContent={<ExampleContent />}>Hover over me</Tooltip>)
  it("should find icon", () => {
    expect(component.find("Tooltip__Icon").exists())
  })
  it("should not show icon if showIcon prop is false", () => {
    const noIconComponent = shallow(
      <Tooltip tooltipContent={<ExampleContent />} showIcon={false}>
        There is no icon here
      </Tooltip>,
    )
    expect(noIconComponent.find("Tooltip__Icon").exists()).toBe(false)
  })
  it("should match latest snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})
