import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import FilterableList from "../FilterableList/FilterableList"

import Icon from "../../atoms/Icon"

const ApprovedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`
ApprovedContainer.displayName = "ApprovedContainer"

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const createLabelComponent = (approvalLabel, approved, secondaryApproved, id, className) => {
  const LabelComponent = ({ label }) => (
    <ApprovedContainer id={id} className={className}>
      {label}
      <div />
      <IconContainer>
        {approved && <Icon name="check" color="primary" />}
        {secondaryApproved && <Icon name="check" color="complimentary" />}
      </IconContainer>
    </ApprovedContainer>
  )
  LabelComponent.propTypes = {
    label: PropTypes.string,
  }
  return <LabelComponent label={approvalLabel} />
}

class FilterableApprovalList extends React.Component {
  renderOptions = items =>
    items.map(({ label, key, approved, secondaryApproved, id, className }) => {
      const newLabel = createLabelComponent(label, approved, secondaryApproved, id, className)
      return {
        value: key,
        label: newLabel,
      }
    })

  render() {
    const { items, title, id, ...otherProps } = this.props
    return (
      <FilterableList {...otherProps} items={this.renderOptions(items)} title={title} id={id} />
    )
  }
}

FilterableApprovalList.displayName = "FilterableApprovalList"
FilterableApprovalList.propTypes = {
  id: PropTypes.string,
  items: PropTypes.array,
  title: PropTypes.node,
  className: PropTypes.string,
}
export default FilterableApprovalList
