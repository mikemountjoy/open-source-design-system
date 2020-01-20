import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colourPalette } from "../../../brandColours"

const StyledParagraph = styled.p`
  margin: ${props => (props.lastParagraph ? "0 0 1.5rem" : "0 0 0.5rem")};
  color: ${props => props.theme.black.main.hex};
  line-height: 1.4rem;
  font-size: 1rem;
`

StyledParagraph.defaultProps = {
  theme: colourPalette.examplePalette,
}

const Paragraph = props => {
  return <StyledParagraph lastParagraph={props.lastParagraph}>{props.children}</StyledParagraph>
}

export default Paragraph

Paragraph.defaultProps = {
  lastParagraph: false,
}

Paragraph.propTypes = {
  children: PropTypes.node,
  lastParagraph: PropTypes.bool,
}
