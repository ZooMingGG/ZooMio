import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public getCurrentUser(): any {
    return 'Current User';
  }
}
