import { css } from "styled-components"

const screenSizes = {
  desktop: 1200,
  tabletLandscape: 960,
  tabletPortrait: 768,
}

// Builds an object with the correct sizes for the media queries
export const media = Object.keys(screenSizes).reduce((acc, size) => {
  const emWidth = screenSizes[size] / 16
  acc[size] = (...responsiveCss) => css`
    @media all and (min-width: ${emWidth}em) {
      ${css(...responsiveCss)}
    }
  `
  return acc
}, {})
