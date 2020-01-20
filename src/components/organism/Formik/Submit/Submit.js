import React from "react"
import { connect } from "formik"
import PropTypes from "prop-types"
import Button from "../../../atoms/Button"

const CustomSubmit = props => {
  const { formik, children, id, className } = props
  const { isSubmitting } = formik
  return (
    <Button id={id} className={className} disabled={isSubmitting} type="submit">
      {children}
    </Button>
  )
}
CustomSubmit.displayName = "CustomSubmit"

CustomSubmit.propTypes = {
  formik: PropTypes.object,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
}

const Submit = connect(CustomSubmit)
Submit.displayName = "Submit"

export default Submit
