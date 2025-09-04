import { Module } from '@nestjs/common';
import { AuthGuard } from './guard/auth.guard';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [PrismaModule, AuthModule, UserModule],
  controllers: [UserController],
  providers: [UserService, AuthGuard],
}) 

export class AppModule {}
