import React from "react"
import { mount } from "enzyme"
import "jest-styled-components"
import { colourPalette } from "../../../brandColours.ts"

import { FilterableListWithTheme, styles } from "./FilterableList"

const { primary, secondary, black, white } = colourPalette.examplePalette

describe("FilterableListWithTheme Input test", () => {
  const items = [
    { key: "account1", label: "Account 1" },
    { key: "account2", label: "Account 2", approved: true },
    { key: "dovey", label: "Dovey" },
    { key: "dovey2", label: "Dovey 2" },
  ]

  const component = mount(
    <FilterableListWithTheme id="testId" items={items} title={<div>Select</div>} />,
  ).find("FilterableListWithTheme")

  it("match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })

  it("should not change the inputValue when we call onInputChange with the incorrect action", () => {
    component.instance().onInputChange("testInputValue", { action: "not-input-change" })
    expect(component.instance().state.inputValue).toEqual("")
  })

  it("set the inputValue when we call onInputChange", () => {
    expect(component.instance().state.inputValue).toEqual("")
    component.instance().onInputChange("testInputValue", { action: "input-change" })
    expect(component.instance().state.inputValue).toEqual("testInputValue")
  })
})

describe("Filterable List chevron test", () => {
  const items = [
    { key: "account1", label: "Account 1" },
    { key: "account2", label: "Account 2", approved: true },
    { key: "dovey", label: "Dovey" },
    { key: "dovey2", label: "Dovey 2" },
  ]

  it("With out chevron", () => {
    const component = mount(
      <FilterableListWithTheme items={items} title={<div>Select</div>} id="testId" hideChevron />,
    )
    expect(component).toMatchSnapshot()
  })
})

describe("styles of FilterableListWithTheme", () => {
  it("Test dropdown indicator style", () => {
    const dropdownIndicator = styles(colourPalette.examplePalette).dropdownIndicator({
      test: "test",
    })
    expect(dropdownIndicator).toEqual({
      test: "test",
      color: secondary.main.hex,
      ":hover": {
        color: secondary.dark.hex,
        cursor: "pointer",
      },
    })
  })
  it("Test control style", () => {
    const control = styles(colourPalette.examplePalette).control(
      { test: "test" },
      { isFocused: true },
    )
    expect(control).toEqual({
      test: "test",
      boxShadow: `0 0 0 1px ${secondary.dark.hex}`,
      border: `1px solid ${secondary.dark.hex}`,
      ":hover, :active, :focus": {
        boxShadow: `0 0 0 1px ${secondary.dark.hex}`,
        border: `1px solid ${secondary.dark.hex}`,
      },
      ":hover": {
        cursor: "text",
      },
    })
  })

  it("Test control style not focused", () => {
    const control = styles(colourPalette.examplePalette).control(
      { test: "test" },
      { isFocused: false },
    )
    expect(control).toEqual({
      test: "test",
      boxShadow: "none",
      border: `1px solid ${black.tint40.hex}`,
      ":hover, :active, :focus": {
        boxShadow: `0 0 0 1px ${secondary.dark.hex}`,
        border: `1px solid ${secondary.dark.hex}`,
      },
      ":hover": {
        cursor: "text",
      },
    })
  })

  it("Test option style", () => {
    const option = styles(colourPalette.examplePalette).option(
      { test: "test" },
      { isSelected: true },
    )
    expect(option).toEqual({
      test: "test",
      backgroundColor: white.hex,
      color: primary.main.hex,
      fontWeight: 900,
      ":active": {},
      "text-transform": "capitalize",
      borderBottom: `3px solid ${secondary.main.hex}`,
      borderTop: `1px solid ${black.tint20.hex}`,
    })
  })

  it("Test option style not selected", () => {
    const option = styles(colourPalette.examplePalette).option(
      { test: "test" },
      { isSelected: false },
    )
    expect(option).toEqual({
      test: "test",
      backgroundColor: white.hex,
      color: black.main.hex,
      fontWeight: 100,
      ":active": {},
      "text-transform": "capitalize",
      borderBottom: `3px solid ${secondary.main.hex}`,
      borderTop: `1px solid ${black.tint20.hex}`,
    })
  })

  it("Test menu style", () => {
    const menu = styles(colourPalette.examplePalette).menu()
    expect(menu).toEqual({
      marginTop: "1rem",
      position: "relative",
      border: "none",
      boxShadow: "none",
    })
  })

  it("Test menuList style", () => {
    const menuList = styles(colourPalette.examplePalette).menuList({ test: "test" })
    expect(menuList).toEqual({
      test: "test",
      border: "none",
      boxShadow: "none",
    })
  })
})
