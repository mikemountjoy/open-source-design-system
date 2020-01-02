import React from "react"
import PropTypes from "prop-types"

class SelectValueRenderer extends React.Component {
  renderValue = () => {
    const fullOption =
      this.props.colDef.cellEditorParams &&
      this.props.colDef.cellEditorParams.values &&
      this.props.colDef.cellEditorParams.values.find(option => option.value === this.props.value)

    return fullOption ? fullOption.label : this.props.value
  }

  render = () => <div>{this.renderValue()}</div>
}

SelectValueRenderer.displayName = "SelectValueRenderer"

SelectValueRenderer.propTypes = {
  colDef: PropTypes.shape({
    cellEditorParams: PropTypes.shape({
      values: PropTypes.array,
    }),
  }),
  value: PropTypes.string,
}

export default SelectValueRenderer
