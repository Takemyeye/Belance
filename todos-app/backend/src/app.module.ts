import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthGuard } from './guard/auth.guard';

@Module({
  imports: [TodosModule, PrismaModule ],
  controllers: [UserController],
  providers: [UserService, AuthGuard],
}) 

export class AppModule {}

