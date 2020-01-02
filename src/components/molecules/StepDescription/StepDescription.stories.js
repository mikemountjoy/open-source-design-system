import React from "react"
import { storiesOf } from "@storybook/react"
import { StepDescription } from "index"

const stories = storiesOf("Step Description", module)

const example = [
  {
    order: 1,
    text: "Step 1 Description",
  },
  {
    order: 2,
    text: "Step 2 Description",
  },
  { order: 3, text: "Step 3 Description" },
]

class StepDescriptionExample extends React.Component {
  render() {
    return <StepDescription steps={example} />
  }
}

const StepDescriptionWrapper = () => (
  <div>
    <StepDescription steps={example} currentStep={3} />
  </div>
)

// Temporary solution to the error on live, where rendering the propTable is causing an issue for this story only
stories.add("Component", context => {
  const text = {
    description:
      "When a user needs to perform steps in a specific order, a 'Step Description' makes it easier to explain the process.",
    dos: [
      "Use this Step Description to explain a series of steps a user has to do in order.",
      "The names of each step should be clear and concise but also in as few words as possible",
    ],
    donts: [
      "Don't put too many steps in the Step Description component (If there are more than 5 steps, please see if there is another way to make the process simpler)",
    ],
  }
  Object.assign(context, text)

  return <StepDescriptionWrapper />
})

stories.add("Example", context => {
  const text = {
    description:
      "This story is to show a working example of the Step Description component. If you would like to know the props and comopnent name, please refer to the story 'Step Description'.",
  }

  Object.assign(context, text)

  return <StepDescriptionExample />
})
