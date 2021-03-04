/** @jsx jsx */
import { Box, Container, Flex, jsx, NavLink, useThemeUI } from 'theme-ui'
import { signIn, signOut, useSession } from 'next-auth/client'
import { FC, MouseEvent, useCallback } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'theme-ui'
import UserIcon from '../icons/user.svg'

const Header: FC = () => {
  const [session] = useSession()
  const router = useRouter()
  const { theme: { colors } } = useThemeUI()

  const handleLogout = useCallback(async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    // @ts-ignore
    const data = await signOut({ redirect: false, callbackUrl: '/' })
    // @ts-ignore
    router.push(data.url)
  }, [])

  const handleSignin = useCallback(() => {
    signIn()
  }, [])

  return (
    <Container
      as="header"
      px={4}
      py={3}
      bg="background"
      sx={{
        borderBottom: `1px solid ${colors.muted}`
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <a
            sx={{
              fontWeight: 700,
              textDecoration: 'none',
              color: 'primary'
            }}
            href="/"
          >
            Next Nest Boilerplate
          </a>
        </Box>
        <Box>
          {!session ? <Button variant="primary" onClick={handleSignin}>Signin</Button> : (
            <Flex as="nav">
              <NavLink href="/account" mr={4}>
                <UserIcon style={{ marginRight: '6px' }} />
                Account
              </NavLink>
              <NavLink href="#" onClick={handleLogout}>
                Logout
              </NavLink>
            </Flex>
          )}
        </Box>
      </Flex>
    </Container>
  )
}

export default Header
