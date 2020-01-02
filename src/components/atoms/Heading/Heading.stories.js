/* eslint no-param-reassign: 0 */

import React from "react"

import { storiesOf } from "@storybook/react"
import { text, number } from "@storybook/addon-knobs"

import Heading from "./Heading"
import Paragraph from "../Paragraph"

const stories = storiesOf("Text", module)

stories.add("Heading", context => {
  context.description =
    "This is the generic heading component to be used for each page. You can specify it to be a H1 up to a H4 via the levels props"

  const options = {
    range: true,
    min: 1,
    max: 4,
    step: 1,
  }

  const bodyText =
    "Lorem ipsum dolor sit amet. Proin aliquet varius ex tristique fringilla. Suspendisse rutrum pharetra leo, eu accumsan leo sagittis sed. Vestibulum feugiat eros a varius tempus. Phasellus ultrices elit ut luctus vehicula. Aliquam id leo sed purus porta faucibus id quis augue. Sed interdum venenatis laoreet. Phasellus arcu felis, dapibus a posuere vel, elementum non lorem. In et diam iaculis, luctus arcu ut, lobortis metus. Aenean tristique lectus sit amet aliquet interdum. Suspendisse a dignissim ligula."
  return (
    <>
      <Heading level={number("Heading level", 1, options)}>
        {text("Heading text", "This is the header")}
      </Heading>
      <Paragraph>{text("Body text", bodyText)}</Paragraph>
    </>
  )
})
