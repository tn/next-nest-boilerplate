import { signIn, signOut, useSession } from 'next-auth/react'
import { FC, MouseEvent, useCallback } from 'react'
import { useRouter } from 'next/router'
import Button from '@/components/button/button'
import UserIcon from '../icons/user.svg'
import { styled } from 'stitches.config'
import { Flex } from '@/components/layout/layout'
import Link from 'next/link'

const Wrapper = styled(Flex, {
  width: '100%',
  padding: '$lg',
  borderBottom: '1px solid $gray',
})

const Logo = styled('a', {
  color: '$secondary',
  textDecoration: 'none',
  fontWeight: 700,
})

const Header: FC = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const handleLogout = useCallback(async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const data = await signOut({ redirect: false, callbackUrl: '/' })
    router.push(data.url)
  }, [router])

  const handleSignin = useCallback(() => {
    signIn()
  }, [])

  return (
    <Wrapper align="between" valign="center">
      <Logo href="/">
        Next Nest Boilerplate
      </Logo>
      {!session ? <Button onClick={handleSignin}>Signin</Button> : (
        <Flex as="nav" align="between" valign="center">
          <Link href="/account" passHref>
            <a style={{ marginRight: '10px' }}>
              <UserIcon style={{ marginRight: '6px' }} />
              Account
            </a>
          </Link>
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        </Flex>
      )}
    </Wrapper>
  )
}

export default Header
