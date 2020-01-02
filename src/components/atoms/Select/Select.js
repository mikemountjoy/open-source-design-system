import React from "react"
import styled, { withTheme } from "styled-components"
import PropTypes from "prop-types"
import { colourPalette } from "brandColours"

// Using react-select, read more here. https://github.com/JedWatson/react-select
import ReactSelect from "react-select"
import styles from "./SelectStyles"

const Title = styled.div`
  margin-bottom: 0.25rem;
`
Title.displayName = "Title"

class CustomSelect extends React.Component {
  // Create function to convert given options object to the correct format (objects within an array)
  renderOptions = optionsObject =>
    Object.keys(optionsObject).map(key => ({
      value: key,
      label: optionsObject[key],
    }))

  buildDefaultValue = defaultVal => {
    if (typeof defaultVal === "string") {
      if (this.props.options[defaultVal] !== undefined) {
        return { label: this.props.options[defaultVal], value: defaultVal }
      }
      if (this.props.options === undefined || Object.entries(this.props.options).length === 0) {
        return { label: defaultVal, value: defaultVal }
      }
    }
    return defaultVal
  }

  render() {
    const {
      title,
      id,
      name,
      placeholder,
      options,
      onChange,
      onBlur,
      value,
      isDisabled,
      isClearable,
      isMulti,
      defaultValue,
      blacklistedOptions,
      className,
    } = this.props
    const filteredValue =
      isMulti && value && value.filter(v => !blacklistedOptions.includes(v.value))
    const selectId = id ? `${id}-select` : ""
    return (
      <label id={id} htmlFor={selectId} className={className}>
        <Title>{title}</Title>
        <ReactSelect
          id={selectId}
          styles={styles(this.props.theme)}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
          value={filteredValue || value}
          options={this.renderOptions(options)}
          onChange={onChange}
          isDisabled={isDisabled}
          isClearable={isClearable}
          isMulti={isMulti}
          defaultValue={this.buildDefaultValue(defaultValue)}
        />
      </label>
    )
  }
}

// Declare the display name for Storybook static
// Name should match the export name
CustomSelect.displayName = "CustomSelect"

// Declare the default props of CustomSelect
CustomSelect.defaultProps = {
  placeholder: "Type to search from the dropdown list...",
  blacklistedOptions: [],
  theme: colourPalette.examplePalette,
}

// Declare the value types of CustomSelect Props
CustomSelect.propTypes = {
  id: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  options: PropTypes.object,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  isClearable: PropTypes.bool,
  onBlur: PropTypes.func,
  isMulti: PropTypes.bool,
  defaultValue: PropTypes.string,
  blacklistedOptions: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  theme: PropTypes.object,
}

const Select = withTheme(CustomSelect)
Select.displayName = "Select"

export default Select
