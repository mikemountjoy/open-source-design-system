import React from "react"
import { shallow } from "enzyme"
import "jest-styled-components"
import { colourPalette } from "../../../../../brandColours"
import ToggleRenderer from "../ToggleRenderer"

const theme = {
  props: {
    theme: colourPalette.examplePalette,
  },
}

describe("ToggleRenderer test", () => {
  it("handleOnChange test", () => {
    const currentValue = false

    const setValue = jest.fn()
    const onChange = jest.fn()

    const component = shallow(
      <ToggleRenderer
        agGridReact={theme}
        setValue={setValue}
        onChange={onChange}
        value={currentValue}
      />,
    )
    component.instance().handleOnChange()

    expect(setValue).toBeCalledWith(!currentValue)
    expect(onChange).toBeCalledWith(!currentValue)
  })
})

describe("Snapshot", () => {
  it("match last snapshot", () => {
    const component = shallow(<ToggleRenderer agGridReact={theme} setValue={() => {}} value />)
    expect(component).toMatchSnapshot()
  })
})
