import React from "react"
import { mount } from "enzyme"
import "jest-styled-components"
import { colourPalette } from "../../../brandColours.ts"

import Button from "./Button"

const { action } = colourPalette.examplePalette

describe("Button", () => {
  it("should match snapshot", () => {
    const component = mount(
      <Button icon="save" onClick={() => {}}>
        Save
      </Button>,
    )
    expect(component.contains("Save")).toBeTruthy()
    expect(component).toMatchSnapshot()
  })

  it("should have ghost styling", () => {
    const component = mount(
      <Button icon="save" onClick={() => {}} buttonType="ghost">
        Save
      </Button>,
    )
    expect(component.find("StyledButton")).toHaveStyleRule("color", action.main.hex)
  })
})
