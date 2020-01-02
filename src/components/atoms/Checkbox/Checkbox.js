import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colourPalette } from "brandColours"

const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border-radius: 20%;
  border: 2px solid ${props => props.theme.secondary.main.hex};
  outline: none;
  text-align: center;
  transition: 0.2s ease all;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  + label {
    color: ${props => props.theme.black.main.hex};
  }
  :checked {
    border: 2px solid ${props => props.theme.secondary.dark.hex};
    background-color: ${props => props.theme.white.main};
    + label {
      font-weight: bold;
      color: ${props => props.theme.secondary.dark.hex};
    }
    ::after {
      content: "\\2713";
      font-size: 0.8rem;
      line-height: 1rem;
      color: ${props => props.theme.secondary.dark.hex};
    }
  }
  :hover {
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    + label {
      color: ${props => props.theme.secondary.dark.hex};
    }
  }
`
StyledCheckbox.defaultProps = {
  theme: colourPalette.examplePalette,
}
StyledCheckbox.displayName = "StyledCheckbox"

const Checkbox = props => {
  const { id, className, name, checked, disabled, onChange, theme } = props
  return (
    <StyledCheckbox
      id={id}
      className={className}
      name={name}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      theme={theme}
    />
  )
}

// Declare the display name of component for static build
// Display name should match export name
Checkbox.displayName = "Checkbox"

// Declare Checkbox propType values
Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.object,
}

export default Checkbox
