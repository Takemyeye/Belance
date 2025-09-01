import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from '@prisma/client';

const SECRET_KEY = process.env.SECRET_KEY || "";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // current user
  async findUser(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        name: true,
        email: true,
        id: true,
      }
    })

    if(!user){
      return { message: "user not found" };
    }

    return user;
  }

  // create user
  async create(name: string, email: string, password: string) {

    const existUser = await this.prisma.user.findFirst({
      where: { email },
      select: {
        id: true
      }
    });

    if(existUser) { 
      const token = jwt.sign({ id: existUser.id }, SECRET_KEY, { expiresIn: '1d'})
      return { message: "User alredy exist", token };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        date: new Date()
      },
    });

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1d' });

    console.log("token:", token);

    return {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
  }

  async deleteUser(id: User['id']) {
   await this.prisma.user.delete({
      where: { id }
    });
    return{ message: "User was deleted" };
  }
}