import { Controller, Post, Body, Req, HttpException } from '@nestjs/common';
import { Account } from '../entity/account.entity';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() account: UserDTO): Promise<Account> {
    const user = await this.userService.findByName(account.name);

    if (user !== null) {
      throw new HttpException('User already exists', 404);
    }

    return this.userService.create(account);
  }
}
