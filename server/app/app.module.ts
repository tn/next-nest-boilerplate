import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { UserModule } from '../user/user.module'
import { AppController } from './app.controller'

@Module({
  controllers: [AppController],
  imports: [UserModule, PrismaService]
})

export class AppModule {}
