import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { colourPalette } from "brandColours"

const Theme = props => (
  <ThemeProvider theme={colourPalette[props.theme]}>
    <>{props.children}</>
  </ThemeProvider>
)

Theme.defaultProps = {
  theme: colourPalette.examplePalette,
}

Theme.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node,
}

export default Theme
