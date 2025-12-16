import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('send-otp')
  async sendOtp(@Body() body: { phone: string }) {
    const { phone } = body;
    return this.auth.sendOtp(phone);
  }

  @Post('verify-otp')
  async verifyOtp(@Body() body: { phone: string; otp: string }) {
    const { phone, otp } = body;
    return this.auth.verifyOtp(phone, otp);
  }
}
