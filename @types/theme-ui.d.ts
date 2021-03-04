declare module '@theme-ui/presets' {
  import { Theme } from 'theme-ui'
  export const future: Theme
  export const base: Theme
}

declare module '@theme-ui/color' {
  export const darken: (color: string, intensivity: number) => string
  export const lighten: (color: string, intensivity: number) => string
}
