import {
  Controller,
  Post,
  Body,
  Header,
  Headers,
  Put,
  Delete,
} from '@nestjs/common';
import { Account } from '../entity/account.entity';
import { Setting } from '../entity/setting.entity';
import { UserService } from '../user/user.service';
import { SettingService } from './setting.service';

@Controller('setting')
export class SettingController {
  constructor(
    private readonly settingService: SettingService,
    private readonly userService: UserService,
  ) {}

  @Post('create')
  async create(
    @Body() setting: Setting,
    @Headers('authorization') token: string,
  ): Promise<Setting> {
    //  Get authorization token from header
    if (token !== 'BearerTest') {
      throw new Error('Unauthorized');
    }

    if (!setting.name) {
      throw new Error('Name is required');
    }

    if (!this.userService.findByName(setting.name)) {
      throw new Error("User with the given name doesn't exists");
    }

    const user = await this.userService.findByName(setting.name);

    if (typeof user.data_type !== typeof setting.value) {
      throw new Error('Data type is not correct');
    }

    return this.settingService.create(setting);
  }

  @Put('update')
  async update(
    @Body() setting: Setting,
    @Headers('authorization') token: string,
  ): Promise<any> {
    //  Get authorization token from header
    if (token !== 'BearerTest') {
      throw new Error('Unauthorized');
    }

    if (!setting.name) {
      throw new Error('Name is required');
    }

    // Todo: Compare user id from account id and name are from same user
    if (!this.userService.findByName(setting.name)) {
      throw new Error("Name doesn't exists");
    }
    return this.settingService.update(setting);
  }

  @Delete('delete')
  async delete(
    @Body() setting: Setting,
    @Headers('authorization') token: string,
  ): Promise<any> {
    //  Get authorization token from header
    if (token !== 'BearerTest') {
      throw new Error('Unauthorized');
    }

    if (!setting.name) {
      throw new Error('Name is required');
    }

    if (!this.settingService.findByName(setting.name)) {
      throw new Error("Setting doesn't exists");
    }

    return this.settingService.delete(setting.id);
  }
}
