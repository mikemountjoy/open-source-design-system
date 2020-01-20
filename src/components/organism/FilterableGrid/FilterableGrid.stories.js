import React from "react"
import { storiesOf } from "@storybook/react"
import { FilterableGrid } from "../../../index"

const stories = storiesOf("FilterableGrid", module)

const items = Array.from({ length: 40 }, (x, i) => ({
  key: `item ${i + 1}`,
  value: <div>Item {i + 1} </div>,
}))

const FilterableGridWrapper = () => (
  <div>
    <FilterableGrid itemsPerRow={6} items={items} height="150px" />
  </div>
)

stories.add("Default", context => {
  const text = {
    description: "This is the filterable grid component",
    dos: [
      "Use this component when there is a large list that needs to be filtered",
      "Specify how many on each row with the 'itemsPerRow' props",
      "You can input JSX elements into the 'items' array prop",
    ],
    donts: ["Don't squash all the items together. Put additional padding on each item if needed."],
  }
  Object.assign(context, text)
  return <FilterableGridWrapper />
})
