import { IsNotEmpty, IsString } from 'class-validator';
import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  paranoid: true,
})
export class Account extends Model {
  // - id: int, primary key, auto increment
  // - name: string
  // - data_type: string
  // - createdAt, updatedAt, deletedAt - DateTime format
  @Column
  @IsString()
  @IsNotEmpty()
  name: string;
  @Column
  createdAt: Date;
  @Column
  updatedAt: Date;
  @Column
  deletedAt: Date;
}
