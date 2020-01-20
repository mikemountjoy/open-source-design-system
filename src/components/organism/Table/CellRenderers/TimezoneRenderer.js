import React from "react"
import PropTypes from "prop-types"
import TimezoneSelect from "../../../molecules/TimezoneSelect"

export default class TimezoneRenderer extends React.Component {
  state = {
    value: "",
  }

  handleChange = ({ value }) => this.setState({ value })

  getValue = () => this.state.value

  render() {
    return (
      <TimezoneSelect
        id="timezone"
        name="timezone"
        onChange={this.handleChange}
        isDisabled={this.props.isDisabled}
        useFormik={false}
      />
    )
  }
}

TimezoneRenderer.propTypes = {
  isDisabled: PropTypes.bool,
}

TimezoneRenderer.displayName = "TimezoneRenderer"
