import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text, number, boolean, select } from "@storybook/addon-knobs"

import { Button } from "../../../index"

const stories = storiesOf("Buttons", module)

const themeDropdown = {
  default: "default",
  ghost: "ghost",
  outline: "outline",
  complimentary: "complimentary",
  error: "error",
}

stories.add("Save icon button", () => (
  <Button
    className={text("", "small", "xsmall")}
    icon={text("", "Icon Name", "plus-circle")}
    onClick={action("clicked")}
    size={number("Size", 1.5)}
    buttonType={select("button type", themeDropdown, "default")}
    isDisabled={boolean("Disabled", false)}
  >
    {text("Button Description", "Save")}
  </Button>
))
