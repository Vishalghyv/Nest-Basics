import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Setting extends Model {
  // - id: int, primary key, auto increment
  // - name: string
  // - account_id: foreign key pointing to accounts
  // - value: string
  // - createdAt, updatedAt, deletedAt - DateTime format
  @Column
  name: string;
  @Column
  account_id: number;
  @Column
  value: string;
  @Column
  createdAt: Date;
  @Column
  updatedAt: Date;
  @Column
  deletedAt: Date;
}
