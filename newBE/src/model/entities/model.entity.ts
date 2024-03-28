import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Float, Int } from "@nestjs/graphql";
import { MakeEntity } from "src/make/entities/make.entity";

export type ModelAttributes = {
    model_id: number;
    fk_make_id: number;
    model: string;
    tree_to_km: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
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
      model_id: number;
  
      @Column({
        type: DataType.STRING,
        field:"model",
        allowNull: false
      })
      @Field()
      model!: string;

      @ForeignKey(() => MakeEntity)
      @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field:"fk_make_id"
      })
      @Field((type) => Int)
      fk_make_id!: number;

      @BelongsTo(() => MakeEntity)
      make: MakeEntity;
  
      @Column({
        type: DataType.FLOAT,
        field:"tree_to_km"
      })
      @Field((type) => Float)
      tree_to_km: number;
  
      @CreatedAt
      @Column({ type: DataType.DATE, field: "created_at" })
      created_at!: Date;
  
      @UpdatedAt
      @Column({ type: DataType.DATE, field: "updated_at" })
      updated_at: Date;
  
      @DeletedAt
      @Column({ type: DataType.DATE, field: "deleted_at", allowNull:true })
      @Field({nullable: true})
      deleted_at?: Date;
  
}