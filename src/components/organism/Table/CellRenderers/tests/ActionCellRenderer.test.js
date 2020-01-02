import React from "react"
import { shallow } from "enzyme"
import "jest-styled-components"

import { Button } from "index"
import { colourPalette } from "brandColours"
import ActionCellRenderer from "../ActionCellRenderer"

const theme = {
  props: {
    theme: colourPalette.examplePalette,
  },
}

const mockedOnClick = jest.fn()
const actionCellRendererParams = {
  onClick: mockedOnClick,
  label: "action me",
  buttonType: "error",
  className: "xsmall",
  disabled: false,
}

const data = { hello: "Hello" }

describe("ActionCellRenderer test", () => {
  it("match snapshot with default properties", () => {
    const emptyParams = {
      cellRendererParams: {},
    }
    const component = shallow(
      <ActionCellRenderer agGridReact={theme} data={data} actionCellRendererParams={emptyParams} />,
    )
    expect(component).toMatchSnapshot()
  })

  const component = shallow(
    <ActionCellRenderer
      agGridReact={theme}
      data={data}
      actionCellRendererParams={actionCellRendererParams}
    />,
  )
  it("match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })

  it("calls onClick when click on the button", () => {
    component.find(Button).simulate("click")
    expect(mockedOnClick).toHaveBeenCalledWith(data)
  })
})
