import { colourPalette } from "brandColours"
import style from "./SelectStyles"

const { secondary, white, black } = colourPalette.examplePalette

describe("Test Select Renderer Styles", () => {
  it("Test dropdown indicator", () => {
    const dropdownIndicator = style(colourPalette.examplePalette).dropdownIndicator({
      test: "test",
    })
    expect(dropdownIndicator).toMatchSnapshot()
  })
  it("Test clear indicator", () => {
    const clearIndicator = style(colourPalette.examplePalette).clearIndicator({ test: "test" })
    expect(clearIndicator).toMatchSnapshot()
  })
  it("Test control is focused = true", () => {
    const control = style(colourPalette.examplePalette).control(
      { test: "test" },
      { isFocused: true },
    )
    expect(control).toMatchSnapshot()
  })
  it("Test control is focused = false", () => {
    const control = style(colourPalette.examplePalette).control(
      { test: "test" },
      { isFocused: false },
    )
    expect(control).toMatchSnapshot()
  })
  it("Test option method: isSelected = true, isFocused = false", () => {
    const optionReturn = style(colourPalette.examplePalette).option(
      { test: "test" },
      { isSelected: true, isFocused: false },
    )
    expect(optionReturn.test).toMatch("test")
    expect(optionReturn.backgroundColor).toMatch(secondary.dark.hex)
    expect(optionReturn.color).toMatch(white.hex)
  })
  it("Test option method: isSelected = false, isFocused = false", () => {
    const optionReturn = style(colourPalette.examplePalette).option(
      { test: "test" },
      { isSelected: false, isFocused: false },
    )
    expect(optionReturn.test).toMatch("test")
    expect(optionReturn.backgroundColor).toMatch(white.hex)
    expect(optionReturn.color).toMatch(black.main.hex)
  })
  it("Test option method: isSelected = true, isFocused = true", () => {
    const optionReturn = style(colourPalette.examplePalette).option(
      { test: "test" },
      { isSelected: true, isFocused: true },
    )
    expect(optionReturn.test).toMatch("test")
    expect(optionReturn.backgroundColor).toMatch(secondary.dark.hex)
    expect(optionReturn.color).toMatch(white.hex)
  })
  it("Test option method: isSelected = false, isFocused = true", () => {
    const optionReturn = style(colourPalette.examplePalette).option(
      { test: "test" },
      { isSelected: false, isFocused: true },
    )
    expect(optionReturn.test).toMatch("test")
    expect(optionReturn.backgroundColor).toMatch(secondary.main.hex)
    expect(optionReturn.color).toMatch(white.hex)
  })
  it("Test multiValue method", () => {
    const multiValueReturn = style(colourPalette.examplePalette).multiValue({ test: "test" })
    expect(multiValueReturn.test).toMatch("test")
    expect(multiValueReturn.backgroundColor).toMatch(secondary.main.hex)
  })
  it("Test multiValueLabel method", () => {
    const multiValueLabel = style(colourPalette.examplePalette).multiValueLabel({ test: "test" })
    expect(multiValueLabel.test).toMatch("test")
    expect(multiValueLabel.textAlign).toMatch("center")
  })
  it("Test multiValueRemove method", () => {
    const multiValueRemove = style(colourPalette.examplePalette).multiValueRemove({ test: "test" })
    expect(multiValueRemove.test).toMatch("test")
    expect(multiValueRemove.backgroundColor).toMatch(secondary.dark.hex)
  })
})
