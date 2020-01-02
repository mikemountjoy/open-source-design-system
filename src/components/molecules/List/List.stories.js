import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"
import { ListItem, ListContainer } from "index"

const stories = storiesOf("List", module)

const array = ["Item 1", "Item 2", "Item 3", "Item 4"]

const renderArray = arr =>
  arr.map(item => (
    <ListItem key={item} padding={boolean("Default Padding on items", true)}>
      {item}
    </ListItem>
  ))

stories.add("Standard", context => {
  const text = {
    description: [
      "This is a standard List component. It is made of two componnents, 'ListContainer' and 'ListItem'",
    ],
    dos: [
      "Use this to display a simple list of items",
      "Use the `border` prop when there is no immediate container for this component",
      "The line between each list item should be full width and touches both ends of the surrounding container",
      "Make sure the content inside the list all align if the default padding is off",
    ],
    donts: [
      "Do not use this list to replace bullet points",
      "Do not have a trailing end line if there is no space between the last list item and the container border",
    ],
  }

  Object.assign(context, text)

  return (
    <ListContainer endingLine={boolean("Ending Line", false)} border>
      {renderArray(array)}
    </ListContainer>
  )
})
