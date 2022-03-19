import { styled } from 'stitches.config'

export default styled('input', {
  display: 'block',
  padding: '$md',
  border: '1px solid $gray',
  borderRadius: '$sm',
  '&:focus': {
    borderColor: '$secondary',
  },
  variants: {
    invalid: {
      true: {
        borderColor: '$invalid',
      },
    },
  },
})
