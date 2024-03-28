// export class Make {}

import { Column, CreatedAt, DataType, DeletedAt, HasMany, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Int } from "@nestjs/graphql";
import { ModelEntity } from "src/model/entities/model.entity";

export type MakeAttributes = {
    make_id: number;
    make: string;
    logo:string,
    models?: ModelEntity[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
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
      make_id: number;
  
      @Column({
        type: DataType.STRING,
        unique:true,
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
      @Column({ type: DataType.DATE, field: "created_at" })
      created_at!: Date;
  
      @UpdatedAt
      @Column({ type: DataType.DATE, field: "updated_at" })
      updated_at: Date;
  
      @DeletedAt
      @Column({ type: DataType.DATE, field: "deleted_at", allowNull:true })
      @Field({nullable: true})
      deleted_at?: Date;

      @HasMany(() => ModelEntity)
      models?: ModelEntity[]
  
}