// Apply custom styling to react select. https://react-select.com/styles
export default theme => ({
  // apply styling to dropdown indicator
  dropdownIndicator: provided => ({
    ...provided,
    color: theme.secondary.main.hex,
    ":hover": {
      color: theme.secondary.dark.hex,
      cursor: "pointer",
    },
  }),
  clearIndicator: provided => ({
    ...provided,
    color: theme.complimentary.main.hex,
    ":hover": {
      color: theme.complimentary.dark.hex,
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
  option: (provided, state) => {
    let backgroundColor
    if (!state.isSelected && !state.isFocused) {
      backgroundColor = theme.white.hex
    } else if (state.isSelected) {
      backgroundColor = theme.secondary.dark.hex
    } else {
      backgroundColor = theme.secondary.main.hex
    }
    return {
      ...provided,
      padding: "0.5rem 1rem",
      backgroundColor,
      color: state.isSelected || state.isFocused ? theme.white.hex : theme.black.main.hex,
      span: {
        color:
          state.isSelected || state.isFocused ? theme.secondary.main.on : theme.secondary.main.hex,
      },
      "text-transform": "capitalize",
      // problem: when an option is clicked, default styling causes it to turn blue
      // solution: this will disable the default styling when option is active/clicked
      ":active": {},
    }
  },
  // apply styling to multivalue
  multiValue: provided => ({
    ...provided,
    backgroundColor: theme.secondary.main.hex,
    color: theme.white.hex,
    borderRadius: "5px",
  }),
  // apply styling to multivalue label
  multiValueLabel: provided => ({
    ...provided,
    textAlign: "center",
    color: "inherit",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  }),
  // apply styling to multivalue remove
  multiValueRemove: provided => ({
    ...provided,
    backgroundColor: theme.secondary.dark.hex,
    borderRadius: "0 5px 5px 0",
    transition: "0.1s ease all",
    ":hover": {
      backgroundColor: theme.complimentary.main.hex,
      cursor: "pointer",
    },
  }),
  menuList: provided => {
    return {
      ...provided,
      maxHeight: "200px",
    }
  },
})
