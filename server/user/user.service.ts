import { Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UserService {
  constructor (private db: PrismaService) {}

  async updateCurrentUser(data: Prisma.UserUpdateInput, email: string): Promise<User> {
    const user = await this.db.user.update({
      where: {
        email
      },
      data
    })

    return user
  }
}
