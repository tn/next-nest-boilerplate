import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from '../guards/auth.guard'

@Controller('app')
export class AppController {
  @Get('/hello')
  helloWorld() {
    return 'Hello, world!'
  }

  @Get('/protected')
  @UseGuards(AuthGuard)
  protected() {
    return 'I am protected!'
  }
}
