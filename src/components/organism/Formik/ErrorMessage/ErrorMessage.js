import React from "react"
import { ErrorMessage as Error } from "formik"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colourPalette } from "brandColours"

export const StyledErrorMessage = styled.div`
  font-weight: bold;
  color: ${props => props.theme.error.main.hex};
  margin-top: 0.5rem;
`
StyledErrorMessage.defaultProps = {
  theme: colourPalette.examplePalette,
}
StyledErrorMessage.displayName = "StyledErrorMessage"

const ErrorMessage = props => {
  const { name, id, className } = props
  return <Error name={name} component={StyledErrorMessage} id={id} className={className} />
}
ErrorMessage.displayName = "ErrorMessage"

ErrorMessage.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
}

export default ErrorMessage
