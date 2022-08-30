import { Inject, Injectable } from '@nestjs/common';
import { Account } from '../entity/account.entity';

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
  async create(account: Account): Promise<Account> {
    return this.accountRepository.create({ account: account });
  }

  //   Find a user by name
  async findByName(name: string): Promise<Account> {
    return this.accountRepository.findOne<Account>({ where: { name } });
  }
}
