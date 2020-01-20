import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"

import { TextToggle } from "../../../index"

const stories = storiesOf("Toggle", module)

stories.add("With Text", context => {
  // Adding properties to story so that the global wrapper can reach it.
  // Acccepts [description, dos, donts]
  // 'description' can be a string or an array for rendering paragraphs
  context.description = // eslint-disable-line no-param-reassign
    "This is a simple toggle to better show true and false. You can pass in alternative text to replace the default true and false."
  return <TextToggle isDisabled={boolean("disabled", false)} />
})
