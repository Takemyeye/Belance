import { Controller, Get, Query, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  redirectToGoogle(@Res() res: Response) {
    const url = this.authService.getGoogleAuthUrl();
    return res.redirect(url);
  }

  @Get('google/callback')
    async googleCallback(@Query('code') code: string, @Res() res: Response) {
      const result = await this.authService.loginWithGoogle(code);

      res.cookie('token', result.token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        secure: false,
        sameSite: 'lax',
      });

    return res.redirect('http://localhost:3000/home');
  }
}