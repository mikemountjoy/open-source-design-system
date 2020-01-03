import React from "react"
import { withTheme } from "styled-components"
import PropTypes from "prop-types"
import { storiesOf } from "@storybook/react"
import { colourPalette } from "brandColours"
import {
  PaletteTemplate,
  SinglePaletteTemplate,
  TwinPaletteTemplate,
  BlackPaletteTemplate,
} from "./components/ColorTemplate"
import { ColorContainer } from "./components/ColorContainer"

const stories = storiesOf("Colour Palette", module)

const ColorStory = props => {
  const {
    primary,
    secondary,
    complimentary,
    action,
    surface,
    background,
    error,
    white,
    black,
  } = props.theme
  return (
    <ColorContainer>
      <PaletteTemplate colorName="Primary" color={primary} />
      <PaletteTemplate colorName="Secondary" color={secondary} />
      <PaletteTemplate colorName="Complimentary" color={complimentary} />
      <PaletteTemplate colorName="Action" color={action} />
      <SinglePaletteTemplate colorName="White" color={white} border />
      <BlackPaletteTemplate colorName="Black" color={black} />
      <TwinPaletteTemplate colorName="Error" color={error} />
      <SinglePaletteTemplate colorName="Background" color={background} />
      <SinglePaletteTemplate colorName="Surface" color={surface} border />
    </ColorContainer>
  )
}
ColorStory.defaultProps = {
  theme: colourPalette.examplePalette,
}
ColorStory.propTypes = {
  theme: PropTypes.object,
}

const ColorTheme = withTheme(ColorStory)

stories.addParameters({ info: { source: false, propTables: null } })

stories.add("examplePalette Theme", context => {
  const text = {
    description: ["This is the colour palette for examplePalette."],
    dos: [
      "Only use colors listed in the color palette",
      "Use the 'on' key value provided when stylising text",
      "Use the 'RGB' key provided when using RGBA for backgrounds",
      "Use the 'Action' palette for Buttons and interactive elements only",
    ],
    donts: [
      "Don't manually type in colour hex codes or RGB values",
      "Don't use the 'Surface' palette for white; 'Surface' is reserved for the backgrund of components ",
    ],
  }

  Object.assign(context, text)

  return <ColorTheme />
})
