import React from "react"
import { connect } from "formik"
import styled from "styled-components"
import Label from "atoms/Label"
import Checkbox from "atoms/Checkbox"
import PropTypes from "prop-types"

const Container = styled.div`
  ${props => (props.disabled ? `opacity: 0.3;` : ``)}
  display: flex;
  flex-direction: row;
  align-items: center;
  input,
  label {
    ${props => (props.disabled ? `cursor:not-allowed !important;` : ``)}
  }
`

const StyledLabel = styled(Label)`
  margin-left: 0.5rem;
`

const CustomCheckbox = props => {
  const { name, label } = props
  const { setFieldValue, values } = props.formik
  const onChange = event => {
    props.onChange(name, event.target.checked)
    setFieldValue(name, event.target.checked)
  }
  return (
    <Container disabled={props.disabled}>
      <Checkbox {...props} onChange={onChange} checked={values && values[name]} />
      <StyledLabel htmlFor={props.id}>{label}</StyledLabel>
    </Container>
  )
}
CustomCheckbox.displayName = "CustomCheckbox"

CustomCheckbox.defaultProps = {
  onChange: () => {},
}

CustomCheckbox.propTypes = {
  formik: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}

const FormikCheckbox = connect(CustomCheckbox)
FormikCheckbox.displayName = "FormikCheckbox"

export default FormikCheckbox
