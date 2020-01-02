import React from "react"
import { shallow, mount } from "enzyme"
import "jest-styled-components"
import toJson from "enzyme-to-json"

import FilterableApprovalList, { createLabelComponent } from "./FilterableApprovalList"

describe("FilterableApprovalList", () => {
  const items = [
    { key: "account1", label: "Account 1" },
    { key: "account2", label: "Account 2", approved: true },
    { key: "dovey", label: "Dovey" },
    { key: "dovey2", label: "Dovey 2" },
    { key: "dovey3", label: "Dovey 2", secondaryApproved: true },
    { key: "account3", label: "Account 2", approved: true, secondaryApproved: true },
  ]
  const component = shallow(<FilterableApprovalList items={items} title={<div>Select</div>} />)
  const tree = toJson(component)

  it("match last snapshot", () => {
    expect(tree).toMatchSnapshot()
  })
})

describe("createLabelComponent", () => {
  const approvalLabel = "approvalLabel"
  const id = "id"
  const className = "className"

  it("returns a component with only a label", () => {
    const approved = false
    const secondaryApproved = false
    const component = mount(
      createLabelComponent(approvalLabel, approved, secondaryApproved, id, className),
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it("returns a component with approval ticks", () => {
    const approved = true
    const secondaryApproved = true
    const component = mount(
      createLabelComponent(approvalLabel, approved, secondaryApproved, id, className),
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
