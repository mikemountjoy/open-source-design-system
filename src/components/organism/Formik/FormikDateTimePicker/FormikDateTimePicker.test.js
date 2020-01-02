import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import "jest-styled-components"

import FormikDateTimePicker, { ErrorMessage } from "./FormikDateTimePicker"

describe("error message", () => {
  it("should match snapshot", () => {
    const theme = {
      error: {
        main: {
          hex: "#D00000",
        },
      },
    }
    const component = shallow(<ErrorMessage theme={theme} />)
    expect(component).toMatchSnapshot()
  })
})

describe("FormikDateTimePicker", () => {
  const mockFn = jest.fn()
  const message = <div>testing</div>
  const date = new Date("August 25, 1987 11:13:00 GMT+0000 (UTC)")

  const component = shallow(
    <FormikDateTimePicker
      errorMessage=""
      touched={false}
      id="date"
      labelMessage={message}
      value={date}
      onChange={mockFn}
    />,
  )
  it("should match snapshot", () => {
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
  it("should call mock function when onChange", () => {
    const now = new Date("August 25, 1987 11:13:00 GMT+0000 (UTC)")
    component.find("DateTimePicker").simulate("change", now)
    expect(mockFn).toHaveBeenCalledWith(now)
  })

  it("should have error component if error exists", () => {
    expect(component.exists("ErrorMessage")).toBeFalsy()
    component.setProps({ errorMessage: "there is an error", touched: true })
    expect(component.exists("ErrorMessage")).toBeTruthy()
  })
})
