import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Label from "../../../atoms/Label/Label"
import { DateTimePicker } from "../../../molecules/DateTimePicker/DateTimePicker"

export const ErrorMessage = styled.div`
  font-weight: bold;
  color: ${props => props.theme.error.main.hex};
  margin-top: 0.5rem;
`
ErrorMessage.displayName = "ErrorMessage"

const FormikDateTimePicker = props => {
  const { id, labelMessage, value, onChange, errorMessage, touched, ...others } = props
  return (
    <>
      <Label htmlFor={id}>{labelMessage}</Label>
      <DateTimePicker id={id} selectedDate={value} onChange={onChange} {...others} />
      {errorMessage && touched && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  )
}

FormikDateTimePicker.propTypes = {
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  labelMessage: PropTypes.object,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  touched: PropTypes.bool,
}

export default FormikDateTimePicker
