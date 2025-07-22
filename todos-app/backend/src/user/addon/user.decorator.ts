import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "@prisma/client";

export const Id = createParamDecorator(
  async (_, context: ExecutionContext): Promise<User> => {
    return context.switchToHttp().getRequest().user.id;
  },
);
