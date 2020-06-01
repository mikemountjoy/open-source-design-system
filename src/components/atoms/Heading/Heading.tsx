import React from "react"
import styled from "styled-components"

interface IStyledHeadingProps {
  level: number;
}

const StyledHeading = styled.h1<IStyledHeadingProps>`
  color: ${props => props.theme.primary.main.hex};
  font-weight: 800;
  margin: 0 0 0.5rem;
  font-size: ${props => {
    switch (props.level) {
      case 1:
        return "3rem"
      case 2:
        return "2.5rem"
      case 3:
        return "2.0rem"
      case 4:
        return "1.5rem"
      case 5:
        return "1.25rem"
      case 6: 
        return "1.125rem"
      default:
        return "3rem"
    }
  }};
`

interface IHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Heading = ({ level = 1, children }: IHeadingProps) => {
  const headingTag = `h${level}` as HeadingTag;
  return (
    <StyledHeading level={level} as={headingTag}>
      {children}
    </StyledHeading>
  )
}

export default Heading
