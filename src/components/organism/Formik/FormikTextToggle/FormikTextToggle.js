import React from "react"
import { connect } from "formik"
import styled from "styled-components"
import PropTypes from "prop-types"
import TextToggle from "../../../atoms/TextToggle"

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: ${props => (props.row ? "row" : "column")};
  align-items: flex-start;
  > * + * {
    margin-left: ${props => (props.row ? "1rem" : "0")};
    margin-top: ${props => (props.row ? "0" : "0.5rem")};
  }
`

class CustomFormikTextToggle extends React.PureComponent {
  componentDidMount = () => {
    this.props.formik.setFieldTouched(this.props.name, true)
  }

  render() {
    const {
      name,
      label,
      trueOption,
      falseOption,
      isDisabled,
      className,
      width,
      row = true,
      id,
      ...other
    } = this.props
    const { values, handleChange, handleBlur } = this.props.formik
    const textToggleId = id ? `${id}-textToggle` : ""
    return (
      <Container className={className} row={row}>
        <label id={id} htmlFor={textToggleId}>
          {label}
        </label>
        <TextToggle
          id={textToggleId}
          name={name}
          label={label}
          value={values && values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          trueOption={trueOption}
          falseOption={falseOption}
          isDisabled={isDisabled}
          width={width}
          {...other}
        />
      </Container>
    )
  }
}
CustomFormikTextToggle.displayName = "CustomFormikTextToggle"

CustomFormikTextToggle.propTypes = {
  name: PropTypes.string,
  label: PropTypes.node,
  trueOption: PropTypes.string,
  falseOption: PropTypes.string,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  formik: PropTypes.shape({
    values: PropTypes.object,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    setFieldTouched: PropTypes.func,
  }),
  className: PropTypes.string,
  width: PropTypes.string,
  row: PropTypes.bool,
}

const FormikTextToggle = connect(CustomFormikTextToggle)
FormikTextToggle.displayName = "FormikTextToggle"

export default FormikTextToggle
