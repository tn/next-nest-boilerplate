import { styled } from 'stitches.config'

export default styled('button', {
  margin: 0,
  padding: '$md $lg',
  backgroundColor: '$gray',
  color: '$black',
  border: 0,
  borderRadius: '$sm',
  cursor: 'pointer',

  variants: {
    kind: {
      primary: {
        backgroundColor: '$primary',
      },
    },
  },
})
