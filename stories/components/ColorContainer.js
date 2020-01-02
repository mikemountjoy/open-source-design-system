import styled from "styled-components"

export const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > * {
    flex: 0 1 48%;
    margin-bottom: 4%;
  }
`
ColorContainer.displayName = "ColorContainer"
