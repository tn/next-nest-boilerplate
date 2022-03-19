import { styled } from 'stitches.config'

export const Text = styled('span', {
  variants: {
    invalid: {
      true: {
        color: '$invalid',
      },
    },
  },
})

export const P = styled('p', {
  margin: '18px 0',
  fontSize: 'inherit',
  lineHeight: 1.5,
})
