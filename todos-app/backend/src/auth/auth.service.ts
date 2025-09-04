import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';


@Injectable()
export class AuthService {
  private client: OAuth2Client;
  private SECRET_KEY = process.env.SECRET_KEY || '';

    constructor(private readonly prisma: PrismaService) {
    this.client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );
  }

   getGoogleAuthUrl() {
    return this.client.generateAuthUrl({
      access_type: 'offline',
      scope: ['email', 'profile'],
    });
  }

  async loginWithGoogle(code: string) {
    const { tokens } = await   this.client.getToken(code);
    this.client.setCredentials(tokens);

    const ticket = await this.client.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    if(!payload?.email) {
      throw new Error('Google auth failed: no email');
    }

    let user = await this.prisma.user.findFirst({ 
      where: { 
        email: payload.email, 
        provider: "Google" 
      } 
    })

     if (!user) {
      user = await this.prisma.user.create({
        data: {
          name: payload.name || "", 
          provider: "Google",
          email: payload.email,
          avatar: payload.picture,
          date: new Date(),
        },
      });
    }

    const token = jwt.sign({ id: user.id }, this.SECRET_KEY, { expiresIn: '1d' });

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
    };
  }
}
