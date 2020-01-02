import React from "react"
import { mount } from "enzyme"
import "jest-styled-components"
import FormCheckbox from "./FormCheckbox"

describe("FormCheckbox test", () => {
  it("match last snapshot", () => {
    const component = mount(<FormCheckbox label="Checked ?" checked onChange={() => {}} />)
    expect(component).toMatchSnapshot()
  })
  it("Disabled to match last snapshot", () => {
    const component = mount(<FormCheckbox label="Checked ?" checked disabled />)
    expect(component).toMatchSnapshot()
  })
})
