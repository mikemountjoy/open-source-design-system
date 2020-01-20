import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Palette = styled.div`
  display: flex;
`
Palette.displayName = "Palette"

const Color = styled.div`
  width: 100%;
  position: relative;
  border: ${props => (props.border ? "1px solid #272727" : null)};
  :after {
    content: "";
    display: block;
    padding-bottom: ${props => (props.single ? "50%" : "100%")};
    background-color: ${props => props.color};
  }
  &.altColors {
    :after {
      padding-bottom: 50%;
    }
  }
  &.tintColors {
    :after {
      padding-bottom: 25%;
    }
  }
`
Color.displayName = "Color"

const SubColor = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
SubColor.displayName = "SubColor"

const Label = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
  color: ${props => props.color};
  p {
    margin: 0;
  }
`
Label.displayName = "Label"

export const PaletteTemplate = props => {
  const { colorName, color } = props
  const { main, light, dark } = color

  return (
    <Palette>
      <Color color={main.hex}>
        <Label color={main.on}>
          <p>{colorName}</p>
        </Label>
      </Color>
      <SubColor>
        <Color className="altColors" color={light.hex}>
          <Label color={light.on}>
            <p>Light Variant</p>
          </Label>
        </Color>
        <Color className="altColors" color={dark.hex}>
          <Label color={dark.on}>
            <p>Dark Variant</p>
          </Label>
        </Color>
      </SubColor>
    </Palette>
  )
}
PaletteTemplate.displayName = "PaletteTemplate"
PaletteTemplate.propTypes = {
  colorName: PropTypes.string,
  color: PropTypes.object,
}

export const SinglePaletteTemplate = props => {
  const { color, colorName, border } = props
  return (
    <Color color={color.hex} border={border} single>
      <Label color={color.on}>
        <p>{colorName}</p>
      </Label>
    </Color>
  )
}
SinglePaletteTemplate.displayName = "SinglePaletteTemplate"
SinglePaletteTemplate.propTypes = {
  color: PropTypes.object,
  colorName: PropTypes.string,
  border: PropTypes.bool,
}

export const TwinPaletteTemplate = props => {
  const { color, colorName } = props
  const { main, dark } = color
  return (
    <Palette>
      <Color color={main.hex}>
        <Label color={main.on}>{colorName}</Label>
      </Color>
      <Color color={dark.hex}>
        <Label color={main.on}>
          <p>Dark Variant</p>
        </Label>
      </Color>
    </Palette>
  )
}
TwinPaletteTemplate.displayName = "TwinPaletteTemplate"
TwinPaletteTemplate.propTypes = {
  color: PropTypes.object,
  colorName: PropTypes.string,
}

export const BlackPaletteTemplate = props => {
  const { color, colorName } = props
  const { main, tint80, tint60, tint40, tint20 } = color
  return (
    <Palette>
      <Color color={main.hex}>
        <Label color={main.on}>{colorName}</Label>
      </Color>
      <SubColor>
        <Color color={tint80.hex} className="tintColors">
          <Label color={tint80.on}>
            <p>Tint80</p>
          </Label>
        </Color>
        <Color color={tint60.hex} className="tintColors">
          <Label color={tint60.on}>
            <p>Tint60</p>
          </Label>
        </Color>
        <Color color={tint40.hex} className="tintColors">
          <Label color={tint40.on}>
            <p>Tint40</p>
          </Label>
        </Color>
        <Color color={tint20.hex} className="tintColors">
          <Label color={tint20.on}>
            <p>Tint20</p>
          </Label>
        </Color>
      </SubColor>
    </Palette>
  )
}
BlackPaletteTemplate.displayName = "BlackPaletteTemplate"
BlackPaletteTemplate.propTypes = {
  color: PropTypes.object,
  colorName: PropTypes.string,
}
