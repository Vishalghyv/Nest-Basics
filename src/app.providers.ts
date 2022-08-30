import { Start } from './app.entity';
import { Account } from './entity/account.entity';
import { Setting } from './entity/setting.entity';

export const startProviders = [
  {
    provide: 'START_REPOSITORY',
    useValue: Start,
  },
  {
    provide: 'ACCOUNT_REPOSITORY',
    useValue: Account,
  },
  {
    provide: 'SETTING_REPOSITORY',
    useValue: Setting,
  },
];
