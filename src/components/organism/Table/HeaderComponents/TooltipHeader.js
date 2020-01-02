import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Icon from "atoms/Icon"
import Tooltip from "atoms/Tooltip"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const nextSortOrder = {
  asc: "desc",
  desc: "noSort",
  noSort: "asc",
}

const sortIcon = {
  asc: "long-arrow-alt-up",
  desc: "long-arrow-alt-down",
}

export const getCurrentSortIcon = (sort, theme) =>
  sortIcon[sort] && <Icon name={sortIcon[sort]} color="black" shade="tint60" theme={theme} />

class TooltipHeader extends Component {
  state = {
    sort: "noSort",
    hovered: false,
  }

  handleMouseEnter = () => this.setState({ hovered: true })

  handleMouseLeave = () => this.setState({ hovered: false })

  onMenuClicked = () => this.props.showColumnMenu(this.menuButton)

  onSortChanged = () => {
    this.setState(
      prevState => ({ sort: nextSortOrder[prevState.sort] }),
      () => {
        const order = this.state.sort === "noSort" ? "" : this.state.sort
        this.props.setSort(order)
      },
    )
  }

  getHeaderNameWithTooltip = () =>
    this.state.hovered ? (
      <Tooltip tooltipContent={this.props.tooltipContent} id={`tooltip-${this.props.column.colId}`}>
        {this.props.displayName}
      </Tooltip>
    ) : (
      this.props.displayName
    )

  render() {
    const { column } = this.props
    const { colDef } = column
    const { hovered } = this.state
    return (
      <Container
        onClick={colDef.sortable && this.onSortChanged}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        id={this.props.id}
        className={this.props.className}
      >
        <div>{this.getHeaderNameWithTooltip()}</div>
        {colDef.sortable && getCurrentSortIcon(this.state.sort, this.props.agGridReact.props.theme)}
        {colDef.filter && hovered && (
          <div
            ref={menuButton => {
              this.menuButton = menuButton
            }}
          >
            <Icon
              onClick={this.onMenuClicked}
              theme={this.props.agGridReact.props.theme}
              name="bars"
              color="black"
              shade="tint60"
            />
          </div>
        )}
      </Container>
    )
  }
}

TooltipHeader.displayName = "TooltipHeader"

TooltipHeader.propTypes = {
  displayName: PropTypes.string.isRequired,
  tooltipContent: PropTypes.string.isRequired,
  column: PropTypes.object,
  showColumnMenu: PropTypes.func,
  setSort: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
  agGridReact: PropTypes.shape({
    props: PropTypes.shape({
      theme: PropTypes.object,
    }),
  }),
}
export default TooltipHeader
