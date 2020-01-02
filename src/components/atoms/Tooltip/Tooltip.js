import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ReactTooltip from "react-tooltip"
import TooltipIcon from "assets/tooltip-icon.svg"

const Container = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-basis: content;
  align-items: center;
`

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 5px;
`

const ToolTipContainer = styled.div`
  > div.visible-on-hover {
    pointer-events: auto !important;
    &:hover {
      visibility: visible !important;
    }
  }
`

const Tooltip = props => (
  <>
    <Container data-tip data-for={props.id}>
      {props.children}
      {props.showIcon && <Icon src={TooltipIcon} />}
    </Container>
    <ToolTipContainer className={props.className}>
      <ReactTooltip
        className="visible-on-hover"
        delayHide={500}
        effect="solid"
        type="success"
        id={props.id}
      >
        {props.tooltipContent}
      </ReactTooltip>
    </ToolTipContainer>
  </>
)

Tooltip.defaultProps = {
  showIcon: true,
  tooltipContent: () => null,
}

Tooltip.propTypes = {
  children: PropTypes.node,
  tooltipContent: PropTypes.node,
  showIcon: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
}

export default Tooltip
