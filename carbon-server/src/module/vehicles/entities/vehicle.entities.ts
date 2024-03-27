import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Model, Table, CreatedAt, UpdatedAt, DeletedAt, DataType } from 'sequelize-typescript';

@ObjectType()
export class Vehicle extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  @Field((type) => Int)
  id: number;

  @Column({
    type: DataType.STRING,
    field:"make"
  })
  @Field()
  make: string;

  @Column({
    type: DataType.STRING,
    field:"model"
  })
  @Field()
  model: string;

  @Column({
    type: DataType.INTEGER,
    field:"year"
  })
  @Field((type) => Int)
  year: number;

  @Column({
    type: DataType.STRING,
    field:"trim"
  })
  @Field()
  trim: string;

  @Column({
    type: DataType.STRING,
    field:"fuelType"
  })
  @Field()
  fuelType: string;

  @Column({
    type: DataType.INTEGER,
    field:"mileage"
  })
  @Field((type) => Int)
  mileage: number;

  @Column({
    type: DataType.INTEGER,
    field:"treeRatio"
  })
  @Field((type) => Int)
  treeRatio: number;

  @Column({
    type: DataType.INTEGER,
    field:"treePlanted"
  })
  @Field((type) => Int)
  treePlanted: number;

  @Column({ type: DataType.STRING, field: "image", allowNull: true })
  @Field({nullable: true})
  image?: string;

  @CreatedAt
  @Column({ type: DataType.DATE, field: "createdAt" })
  createdAt!: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE, field: "updatedAt" })
  updatedAt: Date;

  @DeletedAt
  @Column({ type: DataType.DATE, field: "deletedAt", allowNull:true })
  @Field({nullable: true})
  deletedAt?: Date;
}



