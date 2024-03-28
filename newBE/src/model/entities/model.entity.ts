import { Column, CreatedAt, DataType, DeletedAt, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Float, Int } from "@nestjs/graphql";

export type ModelAttributes = {
    id: number;
    makeId: number;
    model: string;
    treeRatio: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export const ModelProvider = "MODEL_PROVIDER" as const;

@Table({
    tableName:'Models',
    paranoid: true,
    timestamps: true,
})
export class ModelEntity extends Model<ModelAttributes>{
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
        field:"model",
        allowNull: false
      })
      @Field()
      model: string;

      @Column({
        type: DataType.INTEGER,
        field:"makeId"
      })
      @Field((type) => Int)
      makeId: number;
  
      @Column({
        type: DataType.FLOAT,
        field:"treeRatio"
      })
      @Field((type) => Float)
      treeRatio: number;
  
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