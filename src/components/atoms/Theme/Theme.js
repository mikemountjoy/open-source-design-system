import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { colourPalette } from "../../../brandColours.ts"

const Theme = props => (
  <ThemeProvider theme={props.theme || colourPalette.examplePalette}>
    <>{props.children}</>
  </ThemeProvider>
)

Theme.defaultProps = {
  theme: colourPalette.examplePalette,
}

Theme.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
}

export default Theme
