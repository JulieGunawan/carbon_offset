// export class Make {}

import { Column, CreatedAt, DataType, DeletedAt, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Int } from "@nestjs/graphql";

export type MakeAttributes = {
    id: number;
    make: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export const MakeProvider = "MAKE_PROVIDER" as const;

@Table({
    tableName:'Makes',
    paranoid: true,
    timestamps: true,
})
export class MakeEntity extends Model<MakeAttributes>{
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
        field:"logo",
        allowNull: true
      })
      @Field()
      logo?: string;
  
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