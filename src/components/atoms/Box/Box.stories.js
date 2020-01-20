/* eslint no-param-reassign: 0 */

import React from "react"

import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"

import { Box, FormCheckbox } from "../../../index"

const stories = storiesOf("Layout", module)

// Edit existing global addons
stories.addParameters({
  info: {
    propTablesExclude: [FormCheckbox], // Exludes FormCheckbox from propTables
  },
})

stories.add("Layout Box Template", context => {
  // Adding properties to story so that the global wrapper can reach it.
  // Acccepts [description, dos, donts]
  // 'description' can be a string or an array for rendering paragraphs
  context.description = "This is the standard wrapper for components on a page."
  // 'dos' accepts an array and renders an ul list
  context.dos = [
    "Use this wrapper to help separate different sections on a page",
    "Only wrap the high level sections of the page",
  ]
  // 'donts' accepts an array and renders an ul list
  context.donts = [
    "Don't wrap every section with this wrapper",
    "Don't Forget to specify the width",
  ]

  return (
    <Box title={boolean("Show Title", true) && "Standard"}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <FormCheckbox label="Account" name="fields" className="normal" id="account" />
        <FormCheckbox label="Market" name="fields" className="normal" id="market" />
        <FormCheckbox label="DB Contact" name="db-contact" className="normal" id="db-contact" />
      </div>
    </Box>
  )
})
