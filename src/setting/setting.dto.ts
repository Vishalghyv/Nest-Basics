import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SettingDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  account_id: number;
  @IsNotEmpty()
  value: string;
  @IsString()
  @IsNotEmpty()
  data_type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
