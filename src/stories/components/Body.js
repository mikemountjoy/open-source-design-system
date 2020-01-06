import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Theme } from "index"
import { colourPalette } from "../../brandColours.ts"

const StyledBody = styled.div`
  background-color: ${colourPalette.examplePalette.background.hex};
  padding: 2rem;
`

const Body = props => {
  const { children } = props
  return (
    <Theme>
      <StyledBody>{children}</StyledBody>
    </Theme>
  )
}

Body.propTypes = {
  children: PropTypes.any,
}

export { Body }
