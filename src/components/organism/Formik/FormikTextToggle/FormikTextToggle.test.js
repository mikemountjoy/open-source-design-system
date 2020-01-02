import React from "react"
import { mount } from "enzyme"
import FormikTextToggle from "./FormikTextToggle"
import Form from "../Form"

describe("FormikTextToggle Component Test", () => {
  const handleChange = jest.fn()
  const component = mount(
    <Form initialValues={{ test: true }} handleChange={handleChange}>
      <FormikTextToggle
        width="5rem"
        name="test"
        label="Test"
        trueOption="Yes"
        falseOption="False"
        id="testId"
      />
    </Form>,
  )

  it("Match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})
