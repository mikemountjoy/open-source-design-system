import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colourPalette } from "../../../brandColours.ts"

const StyledBox = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > * {
    padding: 0.5rem 1rem;
  }
  ${props =>
    props.onClick &&
    `
    :hover {
      cursor: pointer;
    }
  `}
`
StyledBox.displayName = "StyledBox"

const Title = styled.div`
  background-color: ${props => props.theme.primary.main.hex};
  width: 100%;
  border-radius: 10px 10px 0 0;
  > h4 {
    margin: 0;
    color: ${props => props.theme.primary.main.on};
    font-size: 1.2rem;
  }
`
Title.defaultProps = {
  theme: colourPalette.examplePalette,
}
Title.displayName = "Title"

const Body = styled.div`
  background-color: ${props => props.theme.surface.hex};
  border-radius: ${props => (props.flatTop ? "0 0 10px 10px" : "10px")};
  border: 1px solid ${props => props.theme.primary.main.hex};
`
Body.defaultProps = {
  theme: colourPalette.examplePalette,
}
Body.displayName = "Body"

const Box = props => {
  const { title, children, id, className, ...other } = props
  return (
    <StyledBox id={id} className={className} {...other}>
      {title && (
        <Title>
          <h4>{title}</h4>
        </Title>
      )}
      <Body flatTop={!!title}>{children}</Body>
    </StyledBox>
  )
}
Box.displayName = "Box"

Box.propTypes = {
  title: PropTypes.any,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Box
