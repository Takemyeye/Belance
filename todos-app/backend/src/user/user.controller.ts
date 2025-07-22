import { User } from '@prisma/client';
import { Id } from './addon/user.decorator';
import { UserService } from './user.service';
import { AuthGuard } from '../guard/auth.guard';
import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService : UserService) {}

  // current user
  @UseGuards(AuthGuard)
  @Get('current')
  getCurrentUser(@Id() uid: User['id']) {
    return this.userService.findUser(uid);
  }

  // crerate user
  @Post()
  createUser(@Body() body: { name: string; email: string; password: string }) { 
    const { name, email, password } = body;
    return this.userService.create(name, email, password);
  }
}
