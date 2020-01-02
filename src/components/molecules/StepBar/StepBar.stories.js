import React from "react"
import { storiesOf } from "@storybook/react"
import styled from "styled-components"
import { StepBar, Button } from "index"

const stories = storiesOf("Step Bar", module)

const example = [
  { order: 1, name: "Step 1" },
  { order: 2, name: "Step 2" },
  { order: 3, name: "Step 3" },
  { order: 4, name: "Step 4" },
]

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  > * + * {
    margin-left: 1rem;
  }
`
ButtonContainer.displayName = "ButtonContainer"

class StepBarExample extends React.Component {
  state = {
    currentStep: 1,
  }

  incrementDown = () => {
    this.setState(state => ({ currentStep: state.currentStep - 1 }))
  }

  incrementUp = () => {
    this.setState(state => ({ currentStep: state.currentStep + 1 }))
  }

  render() {
    return (
      <>
        <StepBar currentStep={this.state.currentStep} steps={example} />
        <ButtonContainer>
          <Button disabled={this.state.currentStep <= 1} onClick={this.incrementDown}>
            Previous
          </Button>
          <Button
            disabled={this.state.currentStep >= example.length + 1}
            onClick={this.incrementUp}
          >
            Next
          </Button>
        </ButtonContainer>
      </>
    )
  }
}

const StepBarWrapper = () => (
  <div>
    <StepBar steps={example} currentStep={3} />
  </div>
)

// Temporary solution to the error on live, where rendering the propTable is causing an issue for this story only
stories.add("Component", context => {
  const text = {
    description:
      "When a process can be split into multiple steps, a 'Step Bar' will be a helpful indicator of how much is left to do. When a step is complete and the user moves to the next step, the number will transform into a tick to clearly indicate that a step has been completed.",
    dos: [
      "Use this Step Bar to accompony any process with steps",
      "The names of each step should be clear and concise but also in as few words as possible",
    ],
    donts: [
      "Don't put too many steps in the Step Bar component (If there are more than 5 steps, please see if there is another way to make the process simpler)",
    ],
  }
  Object.assign(context, text)

  return <StepBarWrapper />
})

stories.add("Example", context => {
  const text = {
    description:
      "This story is to show a working example of the Step Bar component. If you would like to know the props and comopnent name, please refer to the story 'Step Bar'.",
  }

  Object.assign(context, text)

  return <StepBarExample />
})

// stories.add("Component", context => {
//   const text = {
//     description:
//       "When a process can be split into multiple steps, a 'Step Bar' will be a helpful indicator of how much is left to do. When a step is complete and the user moves to the next step, the number will transform into a tick to clearly indicate that a step has been completed.",
//     dos: [
//       "Use this Step Bar to accompony any process with steps",
//       "The names of each step should be clear and concise but also in as few words as possible",
//     ],
//     donts: [
//       "Don't put too many steps in the Step Bar component (If there are more than 5 steps, please see if there is another way to make the process simpler)",
//     ],
//   }
//   Object.assign(context, text)
//   return <StepBar currentStep={2} steps={example} />
// })
