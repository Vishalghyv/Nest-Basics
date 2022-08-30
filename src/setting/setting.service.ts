import { Inject, Injectable } from '@nestjs/common';
import { Setting } from 'src/entity/setting.entity';

@Injectable()
export class SettingService {
  constructor(
    @Inject('SETTING_REPOSITORY')
    private settingRepository: typeof Setting,
  ) {}

  async findAll(): Promise<Setting[]> {
    return this.settingRepository.findAll<Setting>();
  }

  async create(Setting: Setting): Promise<Setting> {
    return this.settingRepository.create({ Setting: Setting });
  }

  async findByName(name: string): Promise<Setting> {
    return this.settingRepository.findOne<Setting>({ where: { name } });
  }
}
