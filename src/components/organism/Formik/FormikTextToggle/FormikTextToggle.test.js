import React from "react"
import { mount, shallow } from "enzyme"
import FormikTextToggle, { CustomFormikTextToggle } from "./FormikTextToggle"
import Form from "../Form"

describe("FormikTextToggle Component Test", () => {
  const baseProps = {
    width: "5rem",
    name: "test",
    label: "Test",
    trueOption: "Yes",
    falseOption: "False",
    id: "testId",
    customOnChange: () => {},
  }

  const formikSetFieldValueMockFn = jest.fn()
  const formikSetFieldTouchedMockFn = jest.fn()
  const mockFn = jest.fn()
  const formikProps = {
    values: { test: "" },
    errors: { test: "" },
    setFieldTouched: formikSetFieldValueMockFn,
    setFieldValue: formikSetFieldTouchedMockFn,
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

  it("check onChange function", () => {
    const toggleComponent = shallow(
      <CustomFormikTextToggle
        {...baseProps}
        formik={formikProps}
        customOnChange={mockFn}
        className="testClassName"
      />,
    )

    toggleComponent.instance().onChange()
    expect(formikSetFieldValueMockFn).toHaveBeenCalledWith("test", true)
    expect(formikSetFieldTouchedMockFn).toHaveBeenCalledWith("test", true)
    expect(mockFn).toHaveBeenCalledWith("test", true)
  })
})
