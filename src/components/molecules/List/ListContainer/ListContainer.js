import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { colourPalette } from "brandColours"

const StyledListContainer = styled.ul`
  border: ${props => (props.border ? `1px solid ${props.theme.black.tint40.hex}` : "none")};
  border-radius: 5px;
  list-style: none;
  padding: 0;
  > li:last-child {
    border-bottom: ${props => (props.endingLine ? "" : "none")};
  }
`
StyledListContainer.defaultProps = {
  theme: colourPalette.examplePalette,
}
StyledListContainer.displayName = "StyledListContainer"

const ListContainer = props => {
  const { border, children, endingLine, id, className } = props
  return (
    <StyledListContainer id={id} className={className} border={border} endingLine={endingLine}>
      {children}
    </StyledListContainer>
  )
}
ListContainer.displayName = "ListContainer"
ListContainer.defaultProps = {
  endingLine: true,
}
ListContainer.propTypes = {
  border: PropTypes.bool,
  endingLine: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
}

export default ListContainer
