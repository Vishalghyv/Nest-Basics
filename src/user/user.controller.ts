import { Controller, Post, Body } from '@nestjs/common';
import { Account } from 'src/entity/account.entity';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() account: Account): Promise<Account> {
    if (!account.name) {
      throw new Error('Name is required');
    }

    if (this.userService.findByName(account.name)) {
      throw new Error('Name already exists');
    }

    return this.userService.create(account);
  }
}
