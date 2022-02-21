import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Protocol = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    console.log({ data });
    const request = ctx.switchToHttp().getRequest();
    return request.protocol;
  },
);
