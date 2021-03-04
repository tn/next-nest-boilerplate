import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header/header'
import { Container, Heading, Text } from '@theme-ui/components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Nest Boilerplate</title>
      </Head>
      <Header />
      <Container px={4} py={3}>
        <Heading mb={2}>Pages:</Heading>
        <Text mb={3}>
          <Link href="/account">Account [protected]</Link>
          <br />
          <Link href="/about">About [public]</Link>
        </Text>
        <Heading mb={2}>Apis:</Heading>
        <Text mb={3}>
          <a href="/api/app/protected">api/protected</a>
          <br />
          <a href="/api/app/hello">api/hello</a>
        </Text>
      </Container>
    </>
  )
}

export default Home
