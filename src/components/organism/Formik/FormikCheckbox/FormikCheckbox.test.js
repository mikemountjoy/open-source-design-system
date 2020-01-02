import React from "react"
import { mount } from "enzyme"
import FormikCheckbox from "./FormikCheckbox"
import Form from "../Form"

describe("FormikCheckbox Component Test", () => {
  const onChange = jest.fn()
  const component = mount(
    <Form
      initialValues={{
        test: true,
      }}
    >
      <FormikCheckbox name="test" label="Test" onChange={onChange} />
    </Form>,
  )

  it("Match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })

  it("Disabled chekbox to Match last snapshot", () => {
    const disabledCheckbox = mount(
      <Form
        initialValues={{
          test: true,
        }}
      >
        <FormikCheckbox name="test" label="Test" onChange={onChange} disabled />
      </Form>,
    )
    expect(disabledCheckbox).toMatchSnapshot()
  })

  it("Check the box when we click on it", () => {
    const checkbox = component.find("Checkbox")
    checkbox.simulate("change", { target: { checked: true } })
    expect(onChange).toHaveBeenCalled()
  })
})
