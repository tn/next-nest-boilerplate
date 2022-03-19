import { Module } from '@nestjs/common'
import { PrismaService } from '@/server/prisma/prisma.service'
import { UserModule } from '@/server/user/user.module'
import { AppController } from '@/server/app/app.controller'

@Module({
  controllers: [AppController],
  imports: [UserModule, PrismaService]
})

export class AppModule {}
