import { Column, Model, Table, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table({tableName:'Vehicles'})
export class Vehicle extends Model {
  @Column
  id: number;

  @Column
  make: string;

  @Column
  model: string;

  @Column
  year: number;

  @Column
  trim: string;

  @Column
  fuelType: string;

  @Column
  mileage: number;

  @Column
  treeRatio: number;

  @Column
  treePlanted: number;

  @Column
  image?: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}