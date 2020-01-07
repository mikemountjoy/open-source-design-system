import React from "react"
import { shallow } from "enzyme"
import "jest-styled-components"
import { colourPalette } from "../../../../../brandColours"
import CheckboxRenderer from "../CheckboxRenderer"

const theme = {
  props: {
    theme: colourPalette.examplePalette,
  },
}

const setValueMock = jest.fn()
const component = shallow(<CheckboxRenderer agGridReact={theme} setValue={setValueMock} value />)
describe("CheckboxRenderer test", () => {
  it("match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })

  it("handle onChange", () => {
    component.instance().handleOnChange()
    expect(setValueMock).toHaveBeenCalledWith(false)
  })
})
