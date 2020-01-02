import React from "react"
import PropTypes from "prop-types"

import TextToggle from "atoms/TextToggle"

export default class ToggleRenderer extends React.Component {
  handleOnChange = () => {
    this.props.onChange(!this.props.value) // redux change
    this.props.setValue(!this.props.value) // visual change
  }

  render() {
    return (
      <TextToggle
        isDisabled={this.props.isDisabled}
        checked={this.props.value}
        onChange={this.handleOnChange}
        theme={this.props.theme}
      />
    )
  }
}

ToggleRenderer.displayName = "ToggleRenderer"

ToggleRenderer.propTypes = {
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  theme: PropTypes.object,
}
