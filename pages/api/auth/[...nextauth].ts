import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'

import { PrismaClient } from '@prisma/client'

// too many connections during local development
let prisma

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
    Providers.Email({
      server: process.env.EMAIL_SERVER, 
      from: process.env.EMAIL_FROM
    })
    // ...add more providers here
  ],

  adapter: Adapters.Prisma.Adapter({ prisma }),
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;