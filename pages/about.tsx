import { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/header/header'
import { Layout } from '@/components/layout/layout'

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Nest Boilerplate</title>
      </Head>
      <Header />
      <Layout>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit accusantium molestiae fugit nobis, consectetur aspernatur praesentium unde veritatis, magnam nulla necessitatibus possimus. Laborum illo fuga animi fugiat, dolore doloremque quod!</p>
      </Layout>
    </>
  )
}

export default AboutPage
