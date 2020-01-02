import React from "react"
import { storiesOf } from "@storybook/react"

import { DateTimePicker } from "index"

const stories = storiesOf("DateTimePicker", module)

class ExampleDateTimePicker extends React.PureComponent {
  state = {
    selectedDate: new Date(),
  }

  onChangeDate = newDate => {
    this.setState({ selectedDate: newDate })
  }

  render() {
    return <DateTimePicker selectedDate={this.state.selectedDate} onChange={this.onChangeDate} />
  }
}

ExampleDateTimePicker.displayName = "ExampleDatePicker"

stories.add("DateTimePicker", () => <ExampleDateTimePicker />)
