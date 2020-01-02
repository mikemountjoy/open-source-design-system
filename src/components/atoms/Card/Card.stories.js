import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"
import { Button, Card } from "index"

const stories = storiesOf("Card", module)

const src =
  "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"

stories.add("Standard style", context => {
  const text = {
    description: [
      "The Card compoennt style is simple and clear to help bring its contents forward. Cards are the top level container of most components.",
      "This component doesn't have to have a header or footer.",
    ],
    dos: [
      "Use this component as a top level wrapper",
      "Only use the footer for placing buttons and interactive elements",
      "Buttons can be placed in the body as well as the footer",
      "Do make sure the content are all aligned",
      "Do use the box shadow option when the Card is on a white background",
    ],
    donts: [
      "Do not nest Card components within each other",
      "Do not use the box shadow option when on a coloured background",
    ],
  }

  Object.assign(context, text)

  return (
    <Card
      title="Dogs need more love"
      footer={<Button>Continue</Button>}
      bodyPadding={boolean("Add padding on body", true)}
      boxShadow={boolean("Box shadow on", true)}
      collapsed={boolean("Collapse Card", false)}
    >
      <div style={{ padding: "1rem 0" }}>
        <p style={{ margin: "0 0 1rem" }}>
          Everyday, dogs are working hard. They chase their tails, guard the house and eat all the
          food so you can be healthy. However, did you know that dogs are never paid their fair
          share of belly rubs and love. Put an end to this catastrophe and pet a dog today!
        </p>
        <div
          style={{
            backgroundPosition: "center center",
            backgroundSize: "100%",
            backgroundImage: `url(${src})`,
            width: "100%",
            height: "300px",
          }}
        />
      </div>
    </Card>
  )
})
