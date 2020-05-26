import React from "react"
import { storiesOf } from "@storybook/react"

import Panel from "."

const stories = storiesOf("Panels", module)

stories.add("Show/Hide Panel", () => {
    return <Panel />
})
