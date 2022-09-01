import { Inject, Injectable } from '@nestjs/common';
import { where } from 'sequelize/types';
import { Setting } from 'src/entity/setting.entity';
import { SettingDTO } from './setting.dto';

@Injectable()
export class SettingService {
  constructor(
    @Inject('SETTING_REPOSITORY')
    private settingRepository: typeof Setting,
  ) {}

  async findAll(): Promise<Setting[]> {
    return this.settingRepository.findAll<Setting>();
  }

  async create(setting: SettingDTO): Promise<Setting> {
    return this.settingRepository.create({
      ...setting,
    });
  }

  async update(id: number, value: string) {
    return this.settingRepository.update(
      { value: value },
      {
        where: {
          id: id,
        },
      },
    );
  }

  async delete(id: number) {
    // Paranoid delete
    return this.settingRepository.destroy({
      where: {
        id: id,
      },
    });
  }

  async findByName(name: string): Promise<Setting> {
    return this.settingRepository.findOne<Setting>({ where: { name } });
  }

  async findById(id: number): Promise<Setting> {
    return this.settingRepository.findOne<Setting>({ where: { id } });
  }
}
