/* eslint no-param-reassign: 0 */

import React from "react"

import { storiesOf } from "@storybook/react"
import { select } from "@storybook/addon-knobs"

import List from "./List"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

const stories = storiesOf("List", module)

stories.add("Basic List", () => {
  const options = ["ul", "ol"]

  return (
    <>
      <Heading level={3}>A list</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
      <List listType={select("List type", options, "ul")}>
        <li>List 1</li>
        <li>List 2</li>
        <li>List 3</li>
      </List>
      <Paragraph lastParagraph>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident.
      </Paragraph>
    </>
  )
})
