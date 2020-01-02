import React from "react"
import { mount } from "enzyme"
import "jest-styled-components"
import Form from "../Form"
import Field from "./Field"

const testForm = (
  <Form>
    <Field name="name" type="text" />
    <Field name="location" type="text" row />
    <Field name="subscribe" type="checkbox" row />
    <Field name="config" type="textarea" row />
  </Form>
)

describe("Testing default field layout", () => {
  const component = mount(testForm)

  it("Testing default layout", () => {
    const inputWrapperName = component.find('Field[name="name"]').find("InputWrapper")
    expect(inputWrapperName).toHaveStyleRule("flex-direction", "column")
    expect(inputWrapperName).toHaveStyleRule("align-items", "stretch")
  })

  it("Testing row layout", () => {
    const inputWrapperLocation = component.find('Field[name="location"]').find("InputWrapper")
    expect(inputWrapperLocation).toHaveStyleRule("flex-direction", "row")
    expect(inputWrapperLocation).toHaveStyleRule("align-items", "center")
  })

  it("Testing checkbox styles", () => {
    const inputWrapperSubscribe = component
      .find('Field[name="subscribe"]')
      .find("StyledFormikField")
    expect(inputWrapperSubscribe).toHaveStyleRule("margin", "0 0 0 0.5rem")
    expect(inputWrapperSubscribe).toHaveStyleRule("cursor", "pointer")
  })

  it("Match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})
