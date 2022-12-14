import { Inject, Injectable } from '@nestjs/common';
import { Account } from '../entity/account.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: typeof Account,
  ) {}

  async findAll(): Promise<Account[]> {
    return this.accountRepository.findAll<Account>();
  }

  //   Create a new user
  async create(account: UserDTO): Promise<Account> {
    return this.accountRepository.create({
      ...account,
    });
  }

  //   Find a user by name
  async findByName(name: string): Promise<Account> {
    return this.accountRepository.findOne<Account>({ where: { name } });
  }

  //   Find a user by id
  async findById(id: number): Promise<Account> {
    return this.accountRepository.findOne<Account>({ where: { id } });
  }
}
