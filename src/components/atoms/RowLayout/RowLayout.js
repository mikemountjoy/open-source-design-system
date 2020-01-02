import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledRowLayout = styled.div`
  display: flex;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : "flex-start")};
  align-items: ${props => (props.alignItems ? props.alignItems : "flex-start")};
  flex-wrap: ${props => (props.flexWrap ? props.flexWrap : "wrap")};
  > * + * {
    margin-left: 1rem;
  }
`
StyledRowLayout.displayName = "StyledRowLayout"

const RowLayout = ({ id, className, children, justifyContent, alignItems, flexWrap }) => (
  <StyledRowLayout
    id={id}
    className={className}
    justifyContent={justifyContent}
    alignItems={alignItems}
    flexWrap={flexWrap}
  >
    {children}
  </StyledRowLayout>
)
RowLayout.displayName = "RowLayout"

RowLayout.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexWrap: PropTypes.string,
  children: PropTypes.node,
}

export default RowLayout
