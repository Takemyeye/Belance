import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

const SECRET_KEY = process.env.SECRET_KEY || "";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // current user
  async findUser(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        name: true,
        email: true,
      }
    })
  }

  // create user
  async create(name: string, email: string, password: string) {
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

    return {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
  }
}