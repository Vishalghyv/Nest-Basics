import { Controller, Post, Body, Req } from '@nestjs/common';
import { Account } from '../entity/account.entity';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() account: Account): Promise<Account> {
    console.log(account);

    if (!account.name) {
      throw new Error('Name is required');
    }

    const user = await this.userService.findByName(account.name);

    if (user !== null) {
      throw new Error('Name already exists');
    }

    return this.userService.create(account);
  }
}
