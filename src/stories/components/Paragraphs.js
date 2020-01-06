import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colourPalette } from "../../brandColours.ts"

const { black } = colourPalette.examplePalette

const StyledParagraph = styled.div`
  margin: 0 0 1rem;
  > h3 {
    font-size: 1.125rem;
    margin: 0;
    color: ${black.main.hex};
  }
  > hr {
    margin: 0 0 1rem;
    border: none;
    border-top: 1px solid ${black.main.hex};
  }
  > p {
    margin: 0 0 0.5rem;
    color: ${black.main.hex};
  }
`
const Paragraphs = props => {
  const { heading, paragraphs } = props
  // Checks if para is an array or string
  // If it is an array, it will put each one in a surrounding <p> tag
  const renderParagraphs = para => {
    if (Array.isArray(para)) {
      const paragraphsText = []
      para.map(
        (p, index) => paragraphsText.push(<p key={index}>{p}</p>), // eslint-disable-line
      )
      return paragraphsText
    }
    if (typeof para === "string") {
      return <p>{para}</p>
    }
    return null
  }
  // Checks to see if heading exists and renders it.
  // React.Fragment allows for multiple children without a top level div
  const renderHeading = text => (
    <React.Fragment>
      <h3>{text}</h3>
      <hr />
    </React.Fragment>
  )

  return (
    <StyledParagraph>
      {renderHeading(heading)}
      {renderParagraphs(paragraphs)}
    </StyledParagraph>
  )
}

Paragraphs.propTypes = {
  heading: PropTypes.string,
  paragraphs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export { Paragraphs }
