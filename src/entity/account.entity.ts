import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Account extends Model {
  // - id: int, primary key, auto increment
  // - name: string
  // - data_type: string
  // - createdAt, updatedAt, deletedAt - DateTime format
  @Column
  name: string;
  @Column
  data_type: string;
  @Column
  createdAt: Date;
  @Column
  updatedAt: Date;
  @Column
  deletedAt: Date;
}
