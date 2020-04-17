import React from "react"
import { mount } from "enzyme"
import FormikTextToggle from "./FormikTextToggle"
import Form from "../Form"

describe("FormikTextToggle Component Test", () => {
  const baseProps = {
    width: "5rem",
    name: "test",
    label: "Test",
    trueOption: "Yes",
    falseOption: "False",
    id: "testId",
    onChange: () => {},
  }
  it("Match last snapshot with base props", () => {
    const handleChange = jest.fn()
    const component = mount(
      <Form initialValues={{ test: true }} handleChange={handleChange}>
        <FormikTextToggle {...baseProps} />
      </Form>,
    )
    expect(component).toMatchSnapshot()
  })

  it("Matches snapshot with classname passed", () => {
    const handleChange = jest.fn()
    const component = mount(
      <Form initialValues={{ test: true }} handleChange={handleChange}>
        <FormikTextToggle {...baseProps} className="testClassName" />
      </Form>,
    )
    expect(component).toMatchSnapshot()
  })

  it("Matches snapshot with row = false", () => {
    const handleChange = jest.fn()
    const component = mount(
      <Form initialValues={{ test: true }} handleChange={handleChange}>
        <FormikTextToggle {...baseProps} row={false} />
      </Form>,
    )
    expect(component).toMatchSnapshot()
  })
})
