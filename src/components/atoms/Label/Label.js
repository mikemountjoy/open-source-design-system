import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colourPalette } from "../../../brandColours"

const StyledLabel = styled.label`
  display: block;
  color: ${props => props.theme.black.main.hex};
  font-size: 1rem;
  font-family: "Gentona", "Montserrat";
  :hover {
    cursor: pointer;
  }
`
StyledLabel.defaultProps = {
  theme: colourPalette.examplePalette,
}
StyledLabel.displayName = "StyledLabel"

const Label = props => {
  const { className, id, htmlFor, children } = props
  const styledLabel = (
    <StyledLabel className={className} id={id} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  )

  return styledLabel
}

Label.displayName = "Label"

Label.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
}

export default Label
