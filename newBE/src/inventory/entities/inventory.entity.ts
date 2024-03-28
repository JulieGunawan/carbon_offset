import { Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Float, Int } from "@nestjs/graphql";
import { UserEntity } from "src/user/entities/user.entity";

export type InventoryAttributes = {
    id: number;
    make: string;
    model: string;
    trim: string;
    year: number;
    mileage:number,
    image?: string;
    treeRatio?:number;
    treePlanted?:number;
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
        type: DataType.FLOAT,
        field:"treeRatio"
      })
      @Field((type) => Float)
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
  
      @ForeignKey(() => UserEntity)
      @Column({
        type: DataType.INTEGER,
        field: "fk_vehicle_id",
        allowNull: false,
    })
      userId: number;
}