import { Inject, Injectable } from '@nestjs/common';
import { where } from 'sequelize/types';
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

  async create(setting: Setting): Promise<Setting> {
    return this.settingRepository.create({
      ...setting,
    });
  }

  async update(setting: Setting) {
    return this.settingRepository.update(
      { ...setting },
      {
        where: {
          name: setting.name,
        },
      },
    );
  }

  async delete(id: number) {
    return this.settingRepository.destroy({
      where: {
        id: id,
      },
    });
  }

  async findByName(name: string): Promise<Setting> {
    return this.settingRepository.findOne<Setting>({ where: { name } });
  }
}
