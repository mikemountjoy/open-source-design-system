import React from "react"
import styled, { withTheme } from "styled-components"
import PropTypes from "prop-types"

import Icon from "../Icon"
import { colourPalette } from "../../../brandColours"

// The container has padding so that it accommodates for
// the new size of the button when it is focused.
// Otherwise the box shadow can be clipped out off screen
const ButtonContainer = styled.div`
  display: inline-block;
  padding: 0.1rem;
`
ButtonContainer.displayName = "ButtonContainer"

// Declare variable which will apply CSS to button via styled component
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-family: "Gentona", "Montserrat";
  transition: 0.3s ease all;
  outline: none;
  color: ${props => props.theme.color};
  border: ${props => props.theme.border} 2px solid;
  background-color: ${props => props.theme.background};
  ${props => props.theme.fontWeight && `font-weight: ${props.theme.fontWeight};`}
  :disabled {
    opacity: 0.4;
  }
  :disabled:hover {
    cursor: not-allowed;
    background-color: ${props => props.buttonType.background};
    border-color: ${props => props.buttonType.border};
    color: ${props => props.buttonType.color};
  }
  :active:enabled,
  :hover:enabled {
    cursor: pointer;
    border: ${props => props.theme.hover.border} 2px solid;
    background-color: ${props => props.theme.hover.background};
    color: ${props => props.theme.hover.color};
    svg {
      color: ${props => props.theme.hover.iconColor} !important;
    }
  }
  :focus:enabled {
    border: ${props => props.theme.focus.border} 2px solid;
    box-shadow: ${props => props.theme.focus.boxShadow};
    ${props =>
      props.theme.focus.textDecoration && `text-decoration: ${props.theme.focus.textDecoration};`}
  }
  &.small {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
  &.xsmall {
    font-size: 0.875rem;
    padding: 0 0.25rem;
  }
  svg {
    font-size: ${props => props.size}rem;
    margin-right: 0.5rem;
    color: ${props => props.theme.iconColor} !important;
  }
`
StyledButton.displayName = "StyledButton"

export const buttonTypeStyles = theme => ({
  default: {
    border: theme.action.main.hex,
    background: theme.action.main.hex,
    color: theme.action.main.on,
    iconColor: theme.action.main.on,
    hover: {
      background: theme.action.dark.hex,
      color: theme.action.dark.on,
      border: theme.action.dark.hex,
    },
    focus: {
      border: theme.white.hex,
      boxShadow: `0 0 0 0.1rem  ${theme.action.main.hex}`,
    },
  },
  outline: {
    border: theme.action.main.hex,
    background: "transparent",
    color: theme.action.main.hex,
    iconColor: theme.action.main.hex,
    fontWeight: "700",
    hover: {
      background: "transparent",
      color: theme.action.dark.hex,
      border: `0.1rem solid ${theme.action.dark.hex}`,
      iconColor: theme.action.dark.hex,
    },
    focus: {
      border: theme.action.main.hex,
      textDecoration: "underline",
    },
  },
  complimentary: {
    background: theme.complimentary.main.hex,
    border: theme.complimentary.main.hex,
    color: theme.white.hex,
    hover: {
      background: theme.complimentary.dark.hex,
      border: theme.complimentary.dark.hex,
      color: theme.white.hex,
    },
    focus: {
      background: theme.complimentary.dark.hex,
      border: theme.white.hex,
      shadow: theme.complimentary.dark.hex,
      color: theme.white.hex,
    },
  },
  ghost: {
    border: "transparent",
    background: "transparent",
    color: theme.action.main.hex,
    iconColor: theme.action.main.hex,
    fontWeight: "700",
    hover: {
      background: "transparent",
      color: theme.action.dark.hex,
      iconColor: theme.action.dark.hex,
      border: "transparent",
    },
    focus: {
      border: "transparent",
      textDecoration: "underline",
    },
  },
  error: {
    background: theme.error.main.hex,
    border: theme.error.main.hex,
    color: theme.white.hex,
    hover: {
      background: theme.error.dark.hex,
      border: theme.error.dark.hex,
      color: theme.white.hex,
    },
    focus: {
      background: theme.error.dark.hex,
      border: theme.white.hex,
      shadow: theme.error.dark.hex,
      color: theme.white.hex,
    },
  },
})

const ButtonWithTheme = props => {
  const {
    id,
    icon,
    disabled,
    onClick,
    children,
    size,
    theme,
    onClickIcon,
    buttonType,
    className,
  } = props
  const buttonTypes = Object.keys(buttonTypeStyles(theme))
  const getButtonTypeStyle = () => {
    if (buttonTypes.includes(buttonType)) {
      return buttonTypeStyles(theme)[buttonType]
    }
    return buttonTypeStyles(theme).default
  }
  const styledButtonClassName = className
    ? `Button__StyledButton ${className}`
    : "Button__StyledButton"

  const styledButton = (
    <ButtonContainer className={className}>
      <StyledButton
        {...props}
        className={styledButtonClassName}
        id={id}
        disabled={disabled}
        onClick={onClick}
        size={size}
        theme={getButtonTypeStyle()}
      >
        {icon && <Icon name={icon} onClick={onClickIcon} />}
        {children}
      </StyledButton>
    </ButtonContainer>
  )

  return styledButton
}

ButtonWithTheme.displayName = "ButtonWithTheme"

ButtonWithTheme.defaultProps = {
  size: 1.5,
  buttonType: "default",
  theme: colourPalette.examplePalette,
}

ButtonWithTheme.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onClickIcon: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.number,
  theme: PropTypes.object,
  className: PropTypes.string,
}

const Button = withTheme(ButtonWithTheme)
Button.displayName = "Button"

export default Button
