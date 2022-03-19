import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: '#000',
      secondary: '#14213d',
      primary: '#fca311',
      gray: '#e5e5e5',
      white: '#fff',
      invalid: '#fc2d11',
    },
    space: {
      sm: '4px',
      md: '8px',
      lg: '16px',
    },
    radii: {
      sm: '4px',
    },
  },
})
