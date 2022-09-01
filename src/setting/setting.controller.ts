import {
  Controller,
  Post,
  Body,
  Header,
  Headers,
  Put,
  Delete,
  UseGuards,
  HttpException,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '../auth.guard';
import { Setting } from '../entity/setting.entity';
import { UserService } from '../user/user.service';
import { SettingDTO } from './setting.dto';
import { SettingService } from './setting.service';

@Controller('setting')
export class SettingController {
  constructor(
    private readonly settingService: SettingService,
    private readonly userService: UserService,
  ) {}

  @Post('create')
  @UseGuards(AuthGuard)
  async create(@Body() setting: SettingDTO): Promise<Setting> {
    // Move data_type to setting
    const user = await this.userService.findById(setting.account_id);

    //  DTO
    if (user === null) {
      throw new HttpException('User not found', 404);
    }

    if (setting.data_type !== typeof setting.value) {
      throw new HttpException('Data type not match', 404);
    }

    return this.settingService.create(setting);
  }

  @Put('update/:id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: number, @Body() value: string): Promise<any> {
    const userSetting = await this.settingService.findById(id);

    if (userSetting === null) {
      throw new HttpException('Setting not found', 404);
    }
    return this.settingService.update(id, value);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async delete(@Param('id') id: number): Promise<any> {
    const userSetting = await this.settingService.findById(id);

    if (userSetting === null) {
      throw new HttpException('Setting not found', 404);
    }
    return this.settingService.delete(id);
  }
}
