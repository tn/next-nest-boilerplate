import { styled } from 'stitches.config'

export const Layout = styled('div', {
  padding: '$lg',
})

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    flow: {
      horizontal: {
        flexFlow: 'row',
      },
      vertical: {
        flexFlow: 'column',
      },
    },
    inline: {
      true: {
        display: 'inline-flex',
      },
    },
    align: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    valign: {
      top: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      bottom: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
  },
  defaultVariants: {
    align: 'left',
    valign: 'top',
    flow: 'horizontal',
    inline: false,
  },
})

export const Box = styled('div')
