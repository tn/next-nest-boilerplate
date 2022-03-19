import Avvvatars from 'avvvatars-react'
import { FC } from 'react'
import { styled } from 'stitches.config'

const Image = styled('img', {
  width: '42px',
  height: '42px',
  borderRadius: '50%',
})

interface AvatarProps {
  src?: string
  name?: string
}

const Avatar: FC<AvatarProps> = props => props.src
  ? <Image src={props.src} alt={props.name} />
  : <Avvvatars value={props.name} size={42} />

export default Avatar
