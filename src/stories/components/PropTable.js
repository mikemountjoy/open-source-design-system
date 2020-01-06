import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { colourPalette } from "../../brandColours.ts"
import RowLayout from "../../index"

const { primary, secondary, black, error, surface, complimentary } = colourPalette.examplePalette

const ComponentProp = styled.div`
  margin-bottom: 2rem;
`

const OuterBox = styled.div`
  border: 1px solid ${black.tint40.hex};
  background-color: ${surface.hex};
  border-radius: 10px;
  padding: 0.5rem 1rem;
  &.required {
    border-color: ${error.main.hex};
  }
  + * {
    margin-top: 0.5rem;
  }
  p.description {
    margin: 0.5rem 0 0;
  }
`

const StyledPropName = styled.div`
  width: 30%;
  h6 {
    font-size: 0.75rem;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 1rem;
    &.property {
      color: ${primary.main.hex};
    }
    &.type {
      color: ${secondary.main.hex};
    }
    &.default {
      color: ${complimentary.dark.hex};
    }
  }
`
// Reusable component for displaying individual props
const PropName = prop => {
  const { className, title, value } = prop
  return (
    <StyledPropName>
      <h6>{title}</h6>
      <p className={className}>{(typeof value === "string" && value) || "n/a"}</p>
    </StyledPropName>
  )
}

const getTypeName = propType => {
  if (typeof propType === "string") return propType
  return (propType && propType.name) || ""
}

// The main component to replace existing propTables
// Pulls propDefinitions from storybook.
// 'propDefinitions' is variable given by storybook
const PropTable = ({ propDefinitions }) => {
  // Maps through the different props and renders a template which is put into the variable props
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      const name = getTypeName(propType)
      return (
        <OuterBox className={required ? "required" : ""} key={property}>
          <RowLayout>
            <PropName className="property" title="name" value={property} />
            <PropName className="type" title="type" value={name} />
            <PropName className="default" title="default" value={defaultValue} />
          </RowLayout>
          {description ? <p className="description">{description}</p> : ""}
        </OuterBox>
      )
    },
  )
  // Returns the newly mapped array
  return <ComponentProp>{props}</ComponentProp>
}

PropTable.propTypes = {
  propDefinitions: PropTypes.array,
}

export { PropTable }
