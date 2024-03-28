import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Float, Int } from "@nestjs/graphql";
import { UserEntity } from "src/user/entities/user.entity";
import { InventoryEntity } from "src/inventory/entities/inventory.entity";


export type InvoiceAttributes = {
    orderId: number;
    amount: number;
    treePurchased: number;
    fkUserId: number;
    fkInventoryId: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export const InvoiceProvider = "INVOICE_PROVIDER" as const;

@Table({
    tableName:'Invoices',
    paranoid: true,
    timestamps: true,
})

export class InvoiceEntity extends Model<InvoiceAttributes>{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      })
    @Field((type) => Int)
    orderId: number;
  
    @Column({
        type: DataType.FLOAT,
        field:"amount"
    })
    @Field((type) => Float)
    amount: number;

    @Column({
        type: DataType.INTEGER,
        field:"treePurchased"
    })
    @Field((type) => Int)
    treePurchased: number;
  
    @ForeignKey(() => UserEntity)
    @Column({
    type: DataType.INTEGER,
    field:"fkUserId",
    allowNull: false
    })
    fkUserId: number;

    @BelongsTo(() => UserEntity)
    user: UserEntity;
  
    @Column({ 
    type: DataType.STRING, 
    field: "fkVehicleId",
    allowNull: false })
    @ForeignKey(()=>InventoryEntity)
    fkVehicleId: number;

    @BelongsTo(() => InventoryEntity)
    inventory: InventoryEntity;
  
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