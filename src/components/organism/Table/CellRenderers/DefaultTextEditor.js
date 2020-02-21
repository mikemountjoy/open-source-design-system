import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Cell = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`

const DefaultTextEditor = props => <Cell className="DefaultTextEditor">{props.value}</Cell>

DefaultTextEditor.propTypes = {
  value: PropTypes.any,
}

export default DefaultTextEditor
