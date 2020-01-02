import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { media } from "mediaQueries"

const StyledColumn = styled.div`
  width: 100%;
  grid-column: ${props => {
    const { span = ["auto", 12] } = props
    return `${span[0]} / span ${span[1]}`
  }};
  grid-row: ${props => {
    const { row = ["auto", 1] } = props
    // Check if number or string
    // If number, prefix it with span, else just return string (for use case of end-line)
    // check css-grid for documentation
    const endingValue = typeof row[1] === "number" ? `span ${row[1]}` : row[1]
    return `${row[0]} / ${endingValue}`
  }};
  ${media.tabletPortrait`
    grid-column: ${props => {
      const { spanTabletPortrait } = props
      return spanTabletPortrait ? `${spanTabletPortrait[0]} / span ${spanTabletPortrait[1]}` : null
    }};
  `}
  ${media.tabletLandscape`
    grid-column: ${props => {
      const { spanTabletLandscape } = props
      return spanTabletLandscape
        ? `${spanTabletLandscape[0]} / span ${spanTabletLandscape[1]}`
        : null
    }};
  `}
  ${media.desktop`
    grid-column: ${props => {
      const { spanDesktop } = props
      return spanDesktop ? `${spanDesktop[0]} / span ${spanDesktop[1]}` : null
    }};
  `}
`
StyledColumn.displayName = "StyledColumn"

const Column = props => {
  const {
    children,
    span,
    spanTabletPortrait,
    spanTabletLandscape,
    spanDesktop,
    row,
    className,
    id,
  } = props
  return (
    <StyledColumn
      id={id}
      span={span}
      spanTabletPortrait={spanTabletPortrait}
      spanTabletLandscape={spanTabletLandscape}
      spanDesktop={spanDesktop}
      row={row}
      className={className}
    >
      {children}
    </StyledColumn>
  )
}
Column.displayName = "Column"
Column.propTypes = {
  children: PropTypes.node,
  span: PropTypes.array,
  spanTabletPortrait: PropTypes.array,
  spanTabletLandscape: PropTypes.array,
  spanDesktop: PropTypes.array,
  row: PropTypes.array,
  className: PropTypes.string,
  id: PropTypes.string,
}

export default Column
