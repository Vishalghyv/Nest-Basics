import { Sequelize } from 'sequelize-typescript';
import { Start } from '../app.entity';
import { Account } from '../entity/account.entity';
import { Setting } from '../entity/setting.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'myPassword',
        database: 'nest',
      });
      sequelize.addModels([Start, Account, Setting]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
