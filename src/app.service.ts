import { Injectable, Inject } from '@nestjs/common';
import { Start } from './app.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('START_REPOSITORY')
    @Inject('ACCOUNT_REPOSITORY')
    @Inject('SETTING_REPOSITORY')
    private startRepository: typeof Start,
  ) {}

  async findAll(): Promise<Start[]> {
    return this.startRepository.findAll<Start>();
  }

  // Get Hello World
  getHello(): string {
    return 'Hello World!';
  }

  //   Create a new start
  async create(start: Start): Promise<Start> {
    return this.startRepository.create({ start: start });
  }
}
