import React from "react"
import styled from "styled-components"
import { Formik, Form as FormikForm } from "formik"
import PropTypes from "prop-types"

// The css selector ( > * + * ) is called a lobotomized owl.
// It selects all direct child that has a previous sibling
const StyledFormikForm = styled(FormikForm)`
  > * + * {
    margin-top: ${props => props.spacing}rem;
  }
`
StyledFormikForm.displayName = "StyledFormikForm"

// Apply displayName for static rendering in tests and storybook
FormikForm.displayName = "FormikForm"

const Form = props => {
  const {
    initialValues,
    enableReinitialize = true,
    onSubmit,
    validate,
    validationSchema,
    children,
    id,
    className,
  } = props
  return (
    <Formik
      enableReinitialize={enableReinitialize}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      validationSchema={validationSchema}
      id={id}
      className={className}
    >
      <StyledFormikForm spacing={props.spacing}>{children}</StyledFormikForm>
    </Formik>
  )
}
Form.displayName = "Form"

Form.defaultProps = {
  spacing: 1.5,
}

Form.propTypes = {
  /** Set initial/default values of the form */
  initialValues: PropTypes.object,
  /** Set function to handle onSubmit (Remember to set isSubmitting back to false) */
  onSubmit: PropTypes.func,
  /** Create function to validate the fields. Pass values as the paramenter, and validate with values[name]. Return an object of errors */
  validate: PropTypes.func,
  validationSchema: PropTypes.func,
  spacing: PropTypes.number,
  enableReinitialize: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
}

export default Form
