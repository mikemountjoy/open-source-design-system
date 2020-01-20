import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { colourPalette } from "../../brandColours"

const { black } = colourPalette.examplePalette

const ListContainer = styled.div`
  margin: 0 0 2rem;
  > h4 {
    font-size: 1rem;
    margin: 0 0 0.5rem;
    color: ${black.main.hex};
    width: ${props => props.width};
  }
`

const StyledList = styled.ul`
  margin: 0;
  padding: 0 0 0 2rem;
  > li {
    margin: 0 0 0.5rem;
    color: ${black.main.hex};
  }
`

const List = props => {
  const { heading, list, width } = props
  // Iterates through array and renders list of li
  const renderList = li => li.map((text, index) => <li key={index}>{text}</li>) //eslint-disable-line
  // If list exists, render the component
  if (list) {
    return (
      <ListContainer width={width}>
        {heading ? <h4>{heading}</h4> : null}
        <StyledList>{renderList(list)}</StyledList>
      </ListContainer>
    )
  }
  return null
}

List.propTypes = {
  heading: PropTypes.string,
  list: PropTypes.array,
  width: PropTypes.string,
}
export { List }
