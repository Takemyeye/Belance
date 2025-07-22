import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

const SECRET_KEY = process.env.SECRET_KEY;

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();


    const authHeader = req.headers['authorization'];
    const tokenFromHeader = authHeader?.startsWith('Bearer ')
      ? authHeader.slice(7)
      : null;

    const tokenFromCookie = req.cookies?.token;
    const tokenFromBody = req.body?.token;

    const token = tokenFromHeader || tokenFromCookie || tokenFromBody;

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY) as { id: string };
      const user = await this.prisma.user.findUnique({
        where: { id: decoded.id },
        select: { id:true }
      });

      if (!user) {
        throw new UnauthorizedException('Invalid token');
      }

      (req as any).user = user;
      return true;
    } catch {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
