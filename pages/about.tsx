import { Container } from '@theme-ui/components'
import { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/header'

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Nest Boilerplate</title>
      </Head>
      <Header />
      <Container px={4} py={3}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit accusantium molestiae fugit nobis, consectetur aspernatur praesentium unde veritatis, magnam nulla necessitatibus possimus. Laborum illo fuga animi fugiat, dolore doloremque quod!</p>
      </Container>
    </>
  )
}

export default AboutPage
