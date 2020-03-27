import React from "react"
import DatePicker from "react-datepicker"
import { shallow } from "enzyme"

import { DateTimePicker } from "./DateTimePicker"

const mockOnChange = jest.fn()

describe("DateTimePicker Component Testing", () => {
  const component = shallow(
    <DateTimePicker
      selectedDate={new Date("12/12/1995 12:45")}
      onChange={mockOnChange}
      minDate="12/11/1995 12:45"
      maxDate="01/01/1996 12:45"
    />,
  )
  it("should have selected date the selectedDate prop", () => {
    expect(component.find(DatePicker).prop("selected")).toEqual(new Date("12/12/1995 12:45"))
  })
  it("should call onChange when DatePicker onChange is triggered", () => {
    component
      .find(DatePicker)
      .props()
      .onChange()

    expect(mockOnChange).toHaveBeenCalled()
  })

  it("should set up datePicker without max and min date", () => {
    const componentWithoutBounds = shallow(
      <DateTimePicker selectedDate={new Date("12/12/1995 12:45")} onChange={mockOnChange} />,
    )
    expect(componentWithoutBounds).toMatchSnapshot()
  })

  it("should match latest snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})
