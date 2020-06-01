import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colourPalette } from "../../../brandColours"

const StyledHeading = styled.h1`
  color: ${props => props.theme.primary.main.hex};
  font-weight: 800;
  margin: 0 0 0.5rem;
  font-size: ${props => {
    switch (props.level) {
      case 1:
        return "3rem"
      case 2:
        return "2.25rem"
      case 3:
        return "1.5rem"
      case 4:
        return "1.25rem"
      default:
        return "3rem"
    }
  }};
`

StyledHeading.defaultProps = {
  theme: colourPalette.examplePalette,
}

const Heading = props => {
  return (
    <StyledHeading level={props.level} as={`h${props.level}`}>
      {props.children}
    </StyledHeading>
  )
}

export default Heading

Heading.defaultProps = {
  level: 1,
}

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
}
