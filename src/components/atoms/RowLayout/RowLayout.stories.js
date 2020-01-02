import React from "react"

import { storiesOf } from "@storybook/react"

import { RowLayout, Box } from "../../.."

const stories = storiesOf("Layout", module)

stories.add("Row Layout", () => (
  <RowLayout>
    <Box title="Hello">Hello!!!</Box>
    <Box title="World">Another box, may be wider?</Box>
  </RowLayout>
))
