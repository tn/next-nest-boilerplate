import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { getSession } from 'next-auth/client'

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest()
    const session = await getSession({ req })

    return !!session
  }
}
