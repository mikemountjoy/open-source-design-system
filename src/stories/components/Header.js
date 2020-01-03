import React from "react"
import { colourPalette } from "brandColours"
import PropTypes from "prop-types"
import styled from "styled-components"

const { primary, white } = colourPalette.examplePalette

const StyledHeader = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: ${primary.main.hex};
`

const Title = styled.h1`
  font-size: 2.2rem;
  margin: 0 0 0.5rem;
  color: ${white.hex};
`

const ComponentName = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  color: ${white.hex};
  margin: 0;
`

const Header = props => {
  const { title, componentName } = props
  return (
    <StyledHeader>
      <Title>{title}</Title>
      <ComponentName>{componentName}</ComponentName>
    </StyledHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  componentName: PropTypes.string,
}

export { Header }
