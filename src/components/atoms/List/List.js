import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledList = styled.ul`
  color: ${props => props.theme.black.main.hex};
  font-size: 1rem;
  li {
    margin-bottom: 0.5rem;
  }
`

StyledList.displayName = "StyledList"

const List = props => {
  return <StyledList as={props.listType}>{props.children}</StyledList>
}

export default List

List.defaultProps = {
  listType: "ul",
}

List.propTypes = {
  listType: PropTypes.oneOf(["ul", "ol"]),
  children: PropTypes.node,
}
