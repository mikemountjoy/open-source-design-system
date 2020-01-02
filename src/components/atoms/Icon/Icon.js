import React from "react"
import PropTypes from "prop-types"
import styled, { withTheme } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"

import { colourPalette } from "brandColours"

import {
  faCheck,
  faTimes,
  faBars,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faUserCircle,
  faLink,
  faUnlink,
  faAngleRight,
  faAngleLeft,
  faSave,
  faPlusCircle,
  faUpload,
  faFile,
  faLock,
  faLockOpen,
  faEye,
  faEyeSlash,
  faUsers,
  faEnvelope,
  faEnvelopeOpen,
  faEdit,
  faSearch,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons"
// See list here: https://origin.fontawesome.com/icons?d=gallery&s=solid&m=free

library.add(faCheck)
library.add(faTimes)
library.add(faBars)
library.add(faLongArrowAltDown)
library.add(faLongArrowAltUp)
library.add(faUserCircle)
library.add(faLink)
library.add(faUnlink)
library.add(faAngleRight)
library.add(faAngleLeft)
library.add(faSave)
library.add(faPlusCircle)
library.add(faUpload)
library.add(faFile)
library.add(faLock)
library.add(faLockOpen)
library.add(faEye)
library.add(faEyeSlash)
library.add(faUsers)
library.add(faEnvelope)
library.add(faEnvelopeOpen)
library.add(faEdit)
library.add(faSearch)
library.add(faCommentDots)

const IconContainer = styled.div`
  ${props => props.rotateDegrees && `transform: rotate(${props.rotateDegrees}deg);`}
  ${props => !props.isVisible && "display: none;"}
`
IconContainer.displayName = "IconContainer"

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme[props.color][props.shade].hex};
  ${props => props.onClick && "cursor: pointer;"}
`
StyledFontAwesomeIcon.displayName = "StyledFontAwesomeIcon"

const IconWithTheme = ({
  name,
  color,
  onClick,
  size,
  rotateDegrees,
  isVisible,
  shade,
  theme,
  id,
  className,
}) => (
  <IconContainer rotateDegrees={rotateDegrees} isVisible={isVisible} id={id} className={className}>
    <StyledFontAwesomeIcon
      icon={name}
      color={color}
      shade={shade}
      onClick={onClick}
      theme={theme}
      size={size}
    />
  </IconContainer>
)

// Available sizes
// https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons

IconWithTheme.defaultProps = {
  color: "black",
  shade: "main",
  size: "sm",
  isVisible: true,
  theme: colourPalette.examplePalette,
}

IconWithTheme.displayName = "IconWithTheme"
IconWithTheme.propTypes = {
  color: PropTypes.string,
  shade: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
  rotateDegrees: PropTypes.number,
  isVisible: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.object,
}

const Icon = withTheme(IconWithTheme)
Icon.displayName = "Icon"

export default Icon
