import React from "react"
import PropTypes from "prop-types"

import Checkbox from "atoms/Checkbox"

class CheckboxRenderer extends React.Component {
  handleOnChange = () => this.props.setValue(!this.props.value)

  render() {
    return (
      <Checkbox
        disabled={this.props.isDisabled}
        checked={this.props.value}
        onChange={this.handleOnChange}
        theme={this.props.theme}
      />
    )
  }
}

CheckboxRenderer.displayName = "CheckboxRenderer"

CheckboxRenderer.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  theme: PropTypes.object,
}

export default CheckboxRenderer
