import Head from 'next/head'
import { NextPage, NextPageContext } from 'next'
import { getSession, useSession } from 'next-auth/react'
import Header from '@/components/header/header'
import UserForm from '@/forms/user'
import { Flex, Layout } from '@/components/layout/layout'
import { Text } from '@/components/typography/typography'
import Avatar from '@/components/avatar/avatar'

const AccountPage: NextPage = () => {
  const { data: session } = useSession()

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
      <Layout>
        {!session ? <h1>Access denied</h1> : (
          <>
            <Flex css={{ marginBottom: '20px' }} valign="center">
              <Avatar src={session.user.image} name={session.user.name} />
              <Flex flow="vertical" css={{ marginLeft: '10px' }}>
                <h1>{session.user.name}</h1>
                <Text as="strong">{session.user.email}</Text>
              </Flex>
            </Flex>
            <UserForm
              name={session.user.name || ''}
              image={session.user.image || ''}
              onSuccess={handleSuccess}
              onFail={handleFail}
            />
          </>
        )}
      </Layout>
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
