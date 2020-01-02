/* eslint no-param-reassign: 0 */

import React from "react"

import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import Paragraph from "./Paragraph"
import Heading from "../Heading"

const stories = storiesOf("Text", module)

stories.add("Paragraph", context => {
  context.description =
    "This is the generic paragraph component that should be used for body copy. It uses the black provided from the theme and the margin are set. If it is the last paragraph of a section, the margin will be bigger."

  context.dos = [
    "When the paragraph is the last one of the section, pass the prop `lastParagraph` to increase the margin underneath",
  ]

  const corgiText =
    'The Welsh Corgi, sometimes known as just a Corgi (/ˈkɔːrɡi/, Welsh for "dwarf dog"; plural "Corgis" or occasionally the etymologically consistent "Corgwn"; /ˈkɔːrɡuːn/), is a small type of herding dog that originated in Wales, United Kingdom. Two separate breeds are recognized: the Pembroke Welsh Corgi and the Cardigan Welsh Corgi.'

  const corgiText2 =
    "Historically, the Pembroke has been attributed to the influx of dogs alongside Flemish weavers from around the 10th century, while the Cardigan is attributed to the dogs brought with Norse settlers, in particular a common ancestor of the Swedish Vallhund. A certain degree of interbreeding between the two types has been suggested to explain the similarities between the two."

  const huskyText =
    "Husky is a general name for a sled-type of dog used in northern regions, differentiated from other sled-dog types by their fast pulling style. They are an ever-changing cross-breed of the fastest dogs. The Alaskan Malamute, by contrast, was used for pulling heavier loads. Huskies are used in sled dog racing. In recent years, companies have been marketing tourist treks with dog sledges for adventure travelers in snow regions as well. Huskies are also today kept as pets, and groups work to find new pet homes for retired racing and adventure trekking dogs."

  return (
    <>
      <Heading level={2}>Corgis</Heading>
      <Paragraph lastParagraph={boolean("Is this the last paragraph 1", false)}>
        {text("Paragraph text 1", corgiText)}
      </Paragraph>
      <Paragraph lastParagraph={boolean("Is this the last paragraph 2", true)}>
        {text("Paragraph text 2", corgiText2)}
      </Paragraph>
      <Heading level={2}>Husky</Heading>
      <Paragraph lastParagraph={boolean("Is this the last paragraph 3", false)}>
        {text("Paragraph text 3", huskyText)}
      </Paragraph>
    </>
  )
})
