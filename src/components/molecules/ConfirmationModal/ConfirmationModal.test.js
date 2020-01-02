import React from "react"
import { shallow, mount } from "enzyme"
import ConfirmationModal, { HeaderBar } from "./ConfirmationModal"
import "jest-styled-components"

describe("ConfirmationModal Component Test", () => {
  const component = shallow(
    <ConfirmationModal isOpen>I am a lovely confirmation modal</ConfirmationModal>,
  )

  it("Match last snapshot", () => {
    expect(component).toMatchSnapshot()
  })

  it("check function in styled components", () => {
    const headerBar = mount(<HeaderBar />)
    expect(headerBar).toMatchSnapshot()
  })
})
