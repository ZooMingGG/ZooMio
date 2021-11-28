import { Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  public signUp(): any {
    return this.authService.signUp();
  }
}
