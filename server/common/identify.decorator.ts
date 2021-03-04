import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { getSession } from 'next-auth/client'

const Identify = createParamDecorator(async (_, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest()
  const session = await getSession({ req })

  return session?.user?.email
})

export default Identify
