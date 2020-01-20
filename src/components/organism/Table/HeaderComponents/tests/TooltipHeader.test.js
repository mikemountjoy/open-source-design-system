import React from "react"
import { shallow } from "enzyme"
import { colourPalette } from "../../../../../brandColours"
import "jest-styled-components"
import TooltipHeader, { getCurrentSortIcon } from "../TooltipHeader"

const theme = {
  props: {
    theme: colourPalette,
  },
}

describe("TooltipHeader test", () => {
  const mockShowColumnMenu = jest.fn()
  const mockSetSort = jest.fn()
  const component = shallow(
    <TooltipHeader
      displayName="First Name"
      tooltipContent="Tooltip hey"
      column={{ colDef: { sortable: true, filterable: true } }}
      showColumnMenu={mockShowColumnMenu}
      setSort={mockSetSort}
      agGridReact={theme}
    />,
  )

  it("match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })

  it("getCurrentSortIcon - asc", () => {
    const asc = shallow(getCurrentSortIcon("asc"))
    expect(asc).toMatchSnapshot()
  })

  it("getCurrentSortIcon - desc", () => {
    const desc = shallow(getCurrentSortIcon("desc"))
    expect(desc).toMatchSnapshot()
  })

  it("should handle onMenuClicked", () => {
    component.instance().onMenuClicked()
    expect(mockShowColumnMenu).toHaveBeenCalled()
  })

  it("should handle onSortChanged in the correct order", () => {
    // Initial state
    expect(component.state().sort).toBe("noSort")

    // First sort
    component.instance().onSortChanged()
    expect(mockSetSort).toHaveBeenCalledWith("asc")
    expect(component.state().sort).toBe("asc")

    // Second sort
    component.instance().onSortChanged()
    expect(mockSetSort).toHaveBeenCalledWith("desc")
    expect(component.state().sort).toBe("desc")

    // Third sort
    component.instance().onSortChanged()
    expect(mockSetSort).toHaveBeenCalledWith("")
    expect(component.state().sort).toBe("noSort")
  })

  it("should handle onMouseEnter and show the tooltip", () => {
    component.simulate("mouseenter")
    expect(component.instance().state.hovered).toBe(true)
    expect(component).toMatchSnapshot()
  })

  it("should handle onMouseLeave and remove the tooltip", () => {
    component.simulate("mouseleave")
    expect(component.instance().state.hovered).toBe(false)
  })
})
