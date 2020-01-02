import React from "react"
import { mount } from "enzyme"
import toJson from "enzyme-to-json"
import "jest-styled-components"
import Modal from "./Modal"

describe("Test Modal", () => {
  const ModalComponent = mount(<Modal label="Test Label">{() => <span>Test Modal</span>}</Modal>)

  it("Test that modal is not initially visible.", () => {
    const tree = toJson(ModalComponent)
    expect(tree).toMatchSnapshot()
  })

  it("Test that modal opens", () => {
    ModalComponent.instance().showModal()
    const tree = toJson(ModalComponent)
    expect(tree).toMatchSnapshot()
  })

  it("Test that modal closes", () => {
    ModalComponent.instance().showModal()
    ModalComponent.instance().closeModal()
    const tree = toJson(ModalComponent)
    expect(tree).toMatchSnapshot()
  })
})
