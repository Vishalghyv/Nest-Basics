import { Controller, Post, Body } from '@nestjs/common';
import { Account } from 'src/entity/account.entity';
import { Setting } from 'src/entity/setting.entity';
import { UserService } from 'src/user/user.service';
import { SettingService } from './setting.service';

@Controller('setting')
export class SettingController {
  constructor(
    private readonly settingService: SettingService,
    private readonly userService: UserService,
  ) {}

  @Post('create')
  async create(@Body() setting: Setting): Promise<Setting> {
    if (!setting.name) {
      throw new Error('Name is required');
    }

    if (!this.userService.findByName(setting.name)) {
      throw new Error("Name doesn't exists");
    }

    this.userService.findByName(setting.name).then((user) => {
      if (typeof user.data_type !== typeof setting.value) {
        throw new Error('Data type is not correct');
      }

      return this.settingService.create(setting);
    });
  }
}
