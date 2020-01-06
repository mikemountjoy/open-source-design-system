import React from "react"
import styled from "styled-components"
import { Field as FormikField, connect } from "formik"
import PropTypes from "prop-types"
import { colourPalette } from "../../../../brandColours"
import ErrorMessage from "../ErrorMessage"

const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? "row" : "column")};
  align-items: ${props => (props.row ? "center" : "stretch")};
`
InputWrapper.displayName = "InputWrapper"

const Label = styled.label`
  font-size: 1rem;
  line-height: 100%;
`
Label.displayName = "Label"

const StyledFormikField = styled(FormikField)`
  border: none;
  border-bottom: 1px solid ${props => props.theme.black.tint40.hex};
  padding: 0.5rem 0.25rem 0.25rem;
  outline: none;
  font-size: 1rem;
  color: ${props => props.theme.black.main.hex};
  order: 2;
  margin: ${props => (props.type === "checkbox" || props.type === "radio" ? "0 0 0 0.5rem" : "0")};
  cursor: ${props => (props.type === "checkbox" || props.type === "radio" ? "pointer" : "text")};
  :active,
  :focus {
    ${props =>
      props.type !== "textarea" && `border-bottom: solid 1px ${props.theme.secondary.dark.hex}`};
    + label {
      order: 1;
      color: ${props => props.theme.secondary.dark.hex};
      font-weight: bold;
    }
  }
  ${props => props.type === "textarea" && "height: 10rem"};
  ${props => props.type === "textarea" && `border: 1px solid ${props.theme.black.tint40.hex};`};
  ${props => props.type === "textarea" && "margin-top: 0.5rem;"};
  ${props => props.type === "textarea" && "border-radius: 5px;"};
`
StyledFormikField.defaultProps = {
  theme: colourPalette.examplePalette,
}
StyledFormikField.displayName = "StyledFormikField"

const CustomField = props => {
  const { values, handleChange, handleBlur, errors, touched } = props.formik
  const { name, children, isValid, row, title, type, id, className, ...other } = props
  return (
    <div className={className}>
      <InputWrapper row={row} type={type}>
        <StyledFormikField
          id={id}
          type={type}
          component={type === "textarea" ? "textarea" : undefined}
          name={name}
          value={values && values[name] ? values[name] : ""}
          onChange={handleChange}
          onBlur={handleBlur}
          {...other}
        />
        <Label htmlFor={id}>{title}</Label>
      </InputWrapper>
      {errors && errors[name] && touched && touched[name] ? <ErrorMessage name={name} /> : null}
    </div>
  )
}
CustomField.displayName = "CustomField"

CustomField.propTypes = {
  children: PropTypes.node,
  formik: PropTypes.object,
  /** Label for the input field */
  title: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  /** Set as true to have label and input on the same row (useful for radio and checkboxes) */
  row: PropTypes.bool,
  /** Set as true to have validation available on this field */
  isValid: PropTypes.bool,
  className: PropTypes.string,
}

const Field = connect(CustomField)
Field.displayName = "Field"

export default Field
