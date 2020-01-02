import React from "react"
import { mount } from "enzyme"

import { Form, Field, Submit, FormikSelect } from "./index"

const initialValues = {
  name: "Samantha",
  age: "",
  title: { value: "mr", label: "Mr" },
}
const selectOptions = { ms: "Ms", mr: "Mr" }

const testForm = (
  <Form initialValues={initialValues}>
    <FormikSelect title="Title" options={selectOptions} name="title" isValid />
    <Field name="name" type="text" isValid />
    <Field name="age" type="text" isValid />
    <Submit>Sign Up</Submit>
  </Form>
)

describe("Formik Testing", () => {
  const component = mount(testForm)
  it("Testing initial values of form", () => {
    expect(component.props().initialValues).toEqual(initialValues)
  })

  it("Testing value change in input fields", () => {
    component.find('input[name="name"]').simulate("change", {
      persist: () => {},
      target: { name: "name", value: "Bob" },
    })

    expect(component.find('input[name="name"]').props().value).toEqual("Bob")
  })

  it("Testing submitting", () => {
    expect(component.find("button").props().disabled).toEqual(false)
    component
      .find("CustomSubmit")
      .find("button")
      .simulate("submit")
    expect(component.find("button").props().disabled).toEqual(true)
  })
})
