import React from "react"
import { connect } from "formik"
import PropTypes from "prop-types"
import Select from "../../../atoms/Select"
import { StyledErrorMessage } from "../ErrorMessage/ErrorMessage"

export class CustomSelect extends React.PureComponent {
  state = {
    touched: false,
  }

  onChange = value => {
    this.props.onChange(this.props.name, value)
    this.props.formik.setFieldValue(this.props.name, value)
  }

  onBlur = () => {
    this.setState({ touched: true })
  }

  render() {
    const { name, id } = this.props
    const { values, errors } = this.props.formik
    return (
      <div>
        <Select
          {...this.props}
          id={id}
          onChange={this.onChange}
          value={values && values[name]}
          onBlur={this.onBlur}
        />
        {errors && errors[name] && this.state.touched ? (
          <StyledErrorMessage>{errors[name]}</StyledErrorMessage>
        ) : null}
      </div>
    )
  }
}
CustomSelect.displayName = "CustomSelect"

CustomSelect.propTypes = {
  formik: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  isClearable: PropTypes.bool,
  blacklistedOptions: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
}

const FormikSelect = connect(CustomSelect)
FormikSelect.displayName = "FormikSelect"

export default FormikSelect
