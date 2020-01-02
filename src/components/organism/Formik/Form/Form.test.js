import React from "react"
import { shallow } from "enzyme"
import Form from "./Form"
import Field from "../Field"

describe("Form Component Test", () => {
  const component = shallow(
    <Form>
      <Field name="name" type="text" isValid />
      <Field name="location" type="text" row isValid />
      <Field name="subscribe" type="checkbox" row />
    </Form>,
  )
  it("Render the correct number of children Fields", () => {
    expect(component.find("StyledFormikForm").children().length).toEqual(3)
  })

  it("Match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})
