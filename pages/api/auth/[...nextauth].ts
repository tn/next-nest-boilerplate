import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { PrismaClient } from '@prisma/client'

// too many connections during local development
let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

const options = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER, 
      from: process.env.EMAIL_FROM
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],

  adapter: PrismaAdapter(prisma),
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)

export default authHandler
