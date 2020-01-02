import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
`
StyledGrid.displayName = "StyledGrid"

const PageGrid = props => {
  const { children, rows, className, id } = props
  return (
    <StyledGrid id={id} rows={rows} className={className}>
      {children}
    </StyledGrid>
  )
}

PageGrid.defaultProps = {
  rows: 1,
}

PageGrid.propTypes = {
  children: PropTypes.node,
  rows: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
}

export default PageGrid
