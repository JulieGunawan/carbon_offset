import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Float, Int } from "@nestjs/graphql";
import { UserEntity } from "src/user/entities/user.entity";
import { MakeEntity } from "src/make/entities/make.entity";
import { ModelEntity } from "src/model/entities/model.entity";

export type InventoryAttributes = {
    id: number;
    makeName: string;
    modelName: string;
    trim: string;
    year: number;
    mileage:number,
    image?: string;
    treePlanted?:number;
    fkUserId?:number;
    fkModelId?:number;
    fkMakeId?:number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export const InventoryProvider = "INVENTORY_PROVIDER" as const;

@Table({
    tableName:'inventory',
    paranoid: true,
    timestamps: true,
})
export class InventoryEntity extends Model<InventoryAttributes>{
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
        field:"makeName"
      })
      @Field()
      makeName: string;
    
      @Column({
        type: DataType.STRING,
        field:"modelName"
      })
      @Field()
      modelName: string;
    
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
        field:"treePlanted"
      })
      @Field((type) => Int)
      treePlanted: number;
    
      @Column({ type: DataType.STRING, field: "image", allowNull: true })
      @Field({nullable: true})
      image?: string;

      @ForeignKey(() => UserEntity)
      @Column({
        type: DataType.INTEGER,
        field: "fkUserId",
        allowNull: true,
      })
      fkUserId: number;

      @BelongsTo(() => UserEntity)
      user: UserEntity;

      @ForeignKey(() => MakeEntity)
      @Column({
        type: DataType.INTEGER,
        field: "fkMakeId",
        allowNull: true,
      })
      fkMakeId: number;

      @BelongsTo(() => MakeEntity)
      make: MakeEntity;
    
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