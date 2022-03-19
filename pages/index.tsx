import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/components/header/header'
import { Box, Layout } from '@/components/layout/layout'
import { P } from '@/components/typography/typography'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Nest Boilerplate</title>
      </Head>
      <Header />
      <Layout>
        <Box css={{ marginBottom: '20px' }}>
          <h1>Next-Nest Boilerplate</h1>
          <ul style={{ marginLeft: '20px' }}>
            <li>Next.js</li>
            <li>Nest.js</li>
            <li>Prisma ORM + Postgres</li>
            <li>Next-Auth</li>
            <li>Stitches</li>
            <li>Formik + Yup</li>
            <li>Avvvatars</li>
          </ul>
        </Box>
        <h2>Pages:</h2>
        <P>
          <Link href="/account">Account [protected]</Link>
          <br />
          <Link href="/about">About [public]</Link>
        </P>
        <h2>Apis:</h2>
        <P>
          <Link href="/api/app/protected">api/protected</Link>
          <br />
          <Link href="/api/app/hello">api/hello</Link>
        </P>
      </Layout>
    </>
  )
}

export default Home
