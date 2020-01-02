import React from "react"
import styled, { withTheme } from "styled-components"
import PropTypes from "prop-types"

import { colourPalette } from "brandColours"
import ReactSelect, { components } from "react-select"

// Apply custom styling to react select. https://react-select.com/styles
export const styles = theme => ({
  // apply styling to dropdown indicator
  dropdownIndicator: provided => ({
    ...provided,
    color: theme.secondary.main.hex,
    ":hover": {
      color: theme.secondary.dark.hex,
      cursor: "pointer",
    },
  }),
  // apply styling to value container
  control: (provided, state) => ({
    ...provided,
    boxShadow: state.isFocused ? `0 0 0 1px ${theme.secondary.dark.hex}` : "none",
    border: state.isFocused
      ? `1px solid ${theme.secondary.dark.hex}`
      : `1px solid ${theme.black.tint40.hex}`,
    ":hover, :active, :focus": {
      boxShadow: `0 0 0 1px ${theme.secondary.dark.hex}`,
      border: `1px solid ${theme.secondary.dark.hex}`,
    },
    ":hover": {
      cursor: "text",
    },
  }),
  // apply styling to the dropdown options
  option: (provided, state) => ({
    ...provided,
    backgroundColor: theme.white.hex,
    color: state.isSelected ? theme.primary.main.hex : theme.black.main.hex,
    fontWeight: state.isSelected ? 900 : 100,
    ":active": {},
    "text-transform": "capitalize",
    borderBottom: `3px solid ${theme.secondary.main.hex}`,
    borderTop: `1px solid ${theme.black.tint20.hex}`,
  }),
  menu: provided => ({
    ...provided,
    marginTop: "1rem",
    position: "relative",
    border: "none",
    boxShadow: "none",
  }),
  menuList: provided => ({
    ...provided,
    border: "none",
    boxShadow: "none",
  }),
})

const Title = styled.div`
  margin-bottom: 0.25rem;
`
Title.displayName = "Title"

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <span />
  </components.DropdownIndicator>
)

export class FilterableListWithTheme extends React.Component {
  state = {
    inputValue: "",
  }

  onInputChange = (inputValue, { action }) =>
    this.setState(prevState => ({
      inputValue: action === "input-change" ? inputValue : prevState.inputValue,
    }))

  render() {
    const { inputValue } = this.state
    const { items, title, id, hideChevron, className, ...otherProps } = this.props
    if (hideChevron) {
      styles.indicatorSeparator = base => ({
        ...base,
        display: "none",
      })
      otherProps.components = { DropdownIndicator }
    }
    const selectId = id ? `${id}-select` : ""
    return (
      <label id={id} htmlFor={selectId} className={className}>
        <Title>{title}</Title>
        <ReactSelect
          {...otherProps}
          id={selectId}
          menuIsOpen
          placeholder=""
          inputValue={inputValue}
          onInputChange={this.onInputChange}
          styles={styles(this.props.theme)}
          options={items}
          hideSelectedOptions={false}
          controlShouldRenderValue={false}
          backspaceRemovesValue={false} // because controlShouldRenderValue={false}
          isClearable={false} // because controlShouldRenderValue={false}
          isMulti={false}
          closeMenuOnSelect={false}
          blurInputOnSelect={false}
        />
      </label>
    )
  }
}

FilterableListWithTheme.displayName = "FilterableListWithTheme"

FilterableListWithTheme.defaultProps = {
  theme: colourPalette.examplePalette,
}
FilterableListWithTheme.propTypes = {
  hideChevron: PropTypes.bool,
  id: PropTypes.string,
  items: PropTypes.array,
  title: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object,
}
const FilterableList = withTheme(FilterableListWithTheme)
FilterableList.displayName = "FilterableList"

export default FilterableList
