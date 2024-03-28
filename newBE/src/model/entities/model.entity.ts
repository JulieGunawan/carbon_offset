import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Float, Int } from "@nestjs/graphql";
import { MakeEntity } from "src/make/entities/make.entity";

export type ModelAttributes = {
    modelId: number;
    fkMakeId: number;
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
      modelId: number;
  
      @Column({
        type: DataType.STRING,
        field:"model",
        allowNull: false
      })
      @Field()
      model: string;

      @ForeignKey(() => MakeEntity)
      @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field:"fkMakeId"
      })
      @Field((type) => Int)
      fkMakeId: number;

      @BelongsTo(() => MakeEntity)
      make: MakeEntity;
  
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