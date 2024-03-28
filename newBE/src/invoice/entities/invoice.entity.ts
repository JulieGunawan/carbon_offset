import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Float, Int } from "@nestjs/graphql";
import { UserEntity } from "src/user/entities/user.entity";
import { InventoryEntity } from "src/inventory/entities/inventory.entity";


export type InvoiceAttributes = {
    order_id: number;
    amount: number;
    tpurchased_tree: number;
    fk_user_id: number;
    fk_inventory_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
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
    order_id: number;
  
    @Column({
        type: DataType.FLOAT,
        field:"amount",
        allowNull: false
    })
    @Field((type) => Float)
    amount!: number;

    @Column({
        type: DataType.INTEGER,
        field:"purchased_tree",
        allowNull: false
    })
    @Field((type) => Int)
    purchased_tree!: number;
  
    @ForeignKey(() => UserEntity)
    @Column({
    type: DataType.INTEGER,
    field:"fk_user_id",
    allowNull: false
    })
    fk_user_id!: number;

    @BelongsTo(() => UserEntity)
    user: UserEntity;
  
    @Column({ 
    type: DataType.STRING, 
    field: "fk_vehicle_id",
    allowNull: false })
    @ForeignKey(()=>InventoryEntity)
    fk_vehicle_id!: number;

    @BelongsTo(() => InventoryEntity)
    inventory: InventoryEntity;
  
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