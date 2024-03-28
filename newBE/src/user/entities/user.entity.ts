import { Column, CreatedAt, DataType, DeletedAt, ForeignKey, HasMany, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Int } from "@nestjs/graphql";
import { InventoryEntity } from "src/inventory/entities/inventory.entity";

export type UserAttributes = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export const UserProvider = "USER_PROVIDER" as const;

@Table({
    tableName:'Users',
    paranoid: true,
    timestamps: true,
})
export class UserEntity extends Model<UserAttributes>{
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
        field:"name"
      })
      @Field()
      name: string;
  
      @Column({
        type: DataType.STRING,
        validate: { isEmail: true, isLowercase: true },
      })
      @Field()
      email: string;
  
      @Column({
        type: DataType.STRING,
      })
      @Field()
      password: string;
  
      @Column({ type: DataType.STRING, field: "role" })
      @Field()
      role: string;
  
      @Column({ type: DataType.STRING, field: "avatar", allowNull: true })
      @Field({nullable: true})
      avatar?: string;
  
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

      @HasMany(()=>InventoryEntity)
      inventory?: InventoryEntity[]

      
  
}
