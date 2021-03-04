import { darken } from '@theme-ui/color'
import { base } from '@theme-ui/presets'
import { Theme } from 'theme-ui'

export default {
  ...base,
  styles: {
    ...base.styles
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      cursor: 'pointer',
      '&:hover': {
        bg: darken('primary', 0.04)
      }
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
      cursor: 'pointer',
      '&:hover': {
        bg: darken('secondary', 0.04)
      }
    },
    default: {
      color: 'text',
      bg: 'muted',
      cursor: 'pointer',
      '&:hover': {
        bg: darken('muted', 0.04)
      }
    }
  },
  text: {
    error: {
      color: 'red'
    }
  }
} as Theme
