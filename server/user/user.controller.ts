import { Body, Controller, Put, UseGuards } from '@nestjs/common'
import { User } from '@prisma/client'
import Identify from '@/server/common/identify.decorator'
import { AuthGuard } from '@/server/guards/auth.guard'
import { UserDTO } from '@/server/user/user.dto'
import { UserService } from '@/server/user/user.service'

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor (private userService: UserService) {}

  @Put()
  updateCurrentUser (@Body() data: UserDTO, @Identify() email: string): Promise<User> {
    return this.userService.updateCurrentUser(data, email)
  }
}
