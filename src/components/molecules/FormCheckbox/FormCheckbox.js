import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Label from "../../atoms/Label"
import Checkbox from "../../atoms/Checkbox"

// Declare Container CSS with styled components
const Container = styled.div`
  display: inline-block;
  ${props => (props.disabled ? "opacity: 0.3;" : "")}
  > div {
    display: flex;
    align-items: center;
    > * + * {
      margin-left: 0.5rem;
    }
    input,
    label {
      ${props => (props.disabled ? "cursor:not-allowed !important;" : "")}
    }
  }
`
Container.displayName = "Container"

// Declare FormCheckbox React Component
const FormCheckbox = props => {
  // Refactored values out of props (ES6)
  const { id, className, label, name, onChange, value, checked, disabled } = props

  return (
    <Container disabled={disabled}>
      <div>
        <Checkbox
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          checked={checked}
          disabled={disabled}
        />
        <Label className={className} htmlFor={id}>
          {label}
        </Label>
      </div>
    </Container>
  )
}

// Declare the display name of component for static build
// Display name should match export name
FormCheckbox.displayName = "FormCheckbox"

// Declare propTypes values for FormCheckbox
FormCheckbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default FormCheckbox
