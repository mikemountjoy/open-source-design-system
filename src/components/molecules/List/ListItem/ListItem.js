import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colourPalette } from "../../../../brandColours.ts"

const StyledListItem = styled.li`
  padding: ${props => (props.padding ? "0.5rem 1rem" : "0")};
  border-bottom: 1px ${props => props.theme.black.tint20.hex} solid;
`
StyledListItem.defaultProps = {
  theme: colourPalette.examplePalette,
}
StyledListItem.displayName = "StyledListItem"

export const ListItem = props => {
  const { children, padding, id, className } = props
  return (
    <StyledListItem padding={padding} id={id} className={className}>
      {children}
    </StyledListItem>
  )
}
ListItem.displayName = "ListItem"
ListItem.defaultProps = {
  padding: true,
}
ListItem.propTypes = {
  padding: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
}

export default ListItem
