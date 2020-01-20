import React from "react"
import { storiesOf } from "@storybook/react"

import { Tooltip } from "../../../index"

const stories = storiesOf("Tooltip", module)

const ExampleContent = () => <span>I am inside a tooltip, look at me!!!!</span>

stories.add("Tooltip", () => <Tooltip tooltipContent={<ExampleContent />}>Hover over me</Tooltip>)
