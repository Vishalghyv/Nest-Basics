import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { startProviders } from './app.providers';
import { DatabaseModule } from './provider/database.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { SettingController } from './setting/setting.controller';
import { SettingService } from './setting/setting.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UserController, SettingController],
  providers: [AppService, ...startProviders, UserService, SettingService],
})
export class AppModule {}
