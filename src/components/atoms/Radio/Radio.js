import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { colourPalette } from "brandColours"

// Declare StyledRadio as an input with type=radio with CSS
const StyledRadio = styled.input.attrs({
  type: "radio",
})`
  appearance: none;
  box-shadow: none;
  border: 2px solid ${props => props.theme.secondary.main.hex};
  outline: none;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  transition: 0.3s ease all;
  :hover {
    border-color: ${props => props.theme.secondary.dark.hex};
    cursor: pointer;
  }
  :focus,
  :checked,
  :active {
    border-color: ${props => props.theme.secondary.dark.hex};
    background-color: ${props => props.theme.secondary.dark.hex};
    + label {
      font-weight: bold;
      color: ${props => props.theme.secondary.dark.hex};
    }
  }
`
StyledRadio.defaultProps = {
  theme: colourPalette.examplePalette,
}
StyledRadio.displayName = "StyledRadio"

// Declared Radio React Component
const Radio = props => {
  // Refactor values out of props (ES6)
  const { className, id, name, onChange, checked, required } = props
  return (
    <StyledRadio
      className={className}
      id={id}
      name={name}
      onChange={onChange}
      checked={checked}
      required={required}
    />
  )
}

// Declare the display name of component for static build
// Display name should match export name
Radio.displayName = "Radio"

// Declare propTypes of Radio
Radio.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  required: PropTypes.bool,
}

export default Radio
