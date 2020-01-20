import React from "react"

import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"

import { Form } from "../../../index"

import TimezoneSelect from "./TimezoneSelect"

const TimezoneSelectWrapper = () => (
  <Form>
    <TimezoneSelect
      id="timezone"
      title="Timezone"
      name="timezone"
      isClearable={boolean("Clearable", true)}
    />
  </Form>
)

const stories = storiesOf("Forms", module)

stories.add("TimezoneSelect", () => <TimezoneSelectWrapper />)
