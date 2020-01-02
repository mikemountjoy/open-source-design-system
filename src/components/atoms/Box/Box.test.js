import React from "react"
import { mount, shallow } from "enzyme"
import "jest-styled-components"
import toJson from "enzyme-to-json"
import Box from "./Box"

describe("Box test", () => {
  const onClick = jest.fn()
  const component = mount(
    <Box title="Title" onClick={onClick}>
      <span />
    </Box>,
  )
  const noTitleComponent = shallow(
    <Box onClick={onClick}>
      <span>heleo</span>
    </Box>,
  )
  it("should match last snapshot with a title", () => {
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  it("should call a function when onClick is passed", () => {
    noTitleComponent.simulate("click")
    expect(onClick).toHaveBeenCalled()
  })

  it("should match last snapshot without a title", () => {
    const tree = toJson(noTitleComponent)
    expect(tree).toMatchSnapshot()
  })
})
