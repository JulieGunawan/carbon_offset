import { Column, CreatedAt, DataType, DeletedAt, ForeignKey, HasMany, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Int } from "@nestjs/graphql";
import { InventoryEntity } from "src/inventory/entities/inventory.entity";
import { InvoiceEntity } from "src/invoice/entities/invoice.entity";

export type UserAttributes = {
    user_idd: number;
    name: string;
    email: string;
    password: string;
    role: string;
    avatar?: string;
    inventory?: InventoryEntity[];
    order?: InvoiceEntity[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
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
      user_id: number;
  
      @Column({
        type: DataType.STRING,
        field:"name"
      })
      @Field()
      name!: string;
  
      @Column({
        type: DataType.STRING,
        validate: { isEmail: true, isLowercase: true },
        field:"email",
        allowNull: false
      })
      @Field()
      email!: string;
  
      @Column({
        type: DataType.STRING,
        field:"password",
        allowNull: false
      })
      @Field()
      password!: string;
  
      @Column({ type: DataType.STRING, field: "role" ,allowNull: false })
      @Field()
      role!: string;
  
      @Column({ type: DataType.STRING, field: "avatar", allowNull: true })
      @Field({nullable: true})
      avatar?: string;
  
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

      @HasMany(()=>InventoryEntity)
      inventory?: InventoryEntity[]

      @HasMany(()=>InvoiceEntity)
      order?: InvoiceEntity[]
  
}
