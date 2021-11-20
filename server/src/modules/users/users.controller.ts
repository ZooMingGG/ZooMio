import { Controller, Get } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  public constructor(private readonly usersService: UsersService) { }

  @Get('/get-current-user')
  public getCurrentUser(): any {
    return this.usersService.getCurrentUser();
  }
}
