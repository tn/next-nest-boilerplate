import Head from 'next/head'
import { NextPage, NextPageContext } from 'next'
import { getSession, useSession } from 'next-auth/client'
import Header from '../components/header/header'
import UserForm from '../forms/user'
import { Avatar, Box, Container, Heading, Text } from '@theme-ui/components'

const AccountPage: NextPage = () => {
  const [ session, loading ] = useSession()

  if (typeof window !== 'undefined' && loading) return null

  const handleSuccess = () => {
    alert('User updated!')
  }

  const handleFail = () => {
    alert('User updating failed.')
  }

  return (
    <>
      <Head>
        <title>Next Nest Boilerplate</title>
      </Head>
      <Header />
      <Container px={4} py={3}>
        {!session ? <h1>Access denied</h1> : (
          <>
            <Box bg="muted" p={4} mb={3}>
              <Avatar src={session.user.image} sx={{ height: '48px' }} />
              <Heading>{session.user.name}</Heading>
              <Text as="strong">{session.user.email}</Text>
            </Box>
            <UserForm
              name={session.user.name || ''}
              image={session.user.image || ''}
              onSuccess={handleSuccess}
              onFail={handleFail}
            />
          </>
        )}
      </Container>
    </>
  )
}

export async function getServerSideProps (ctx: NextPageContext) {
  const session = await getSession(ctx)

  return {
    props: {
      session
    }
  }
}

export default AccountPage
