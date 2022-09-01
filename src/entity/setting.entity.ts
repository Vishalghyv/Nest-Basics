import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  paranoid: true,
})
export class Setting extends Model {
  // - id: int, primary key, auto increment
  // - name: string
  // - account_id: foreign key pointing to accounts
  // - value: string
  // - createdAt, updatedAt, deletedAt - DateTime format
  @Column
  @IsString()
  @IsNotEmpty()
  name: string;
  @Column
  @IsNumber()
  @IsNotEmpty()
  account_id: number;
  @Column
  @IsNotEmpty()
  value: string;
  @Column
  @IsString()
  @IsNotEmpty()
  data_type: string;
  @Column
  createdAt: Date;
  @Column
  updatedAt: Date;
  @Column
  deletedAt: Date;
}
