import { Column, CreatedAt, DataType, DeletedAt, ForeignKey, HasMany, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Float, Int } from "@nestjs/graphql";


export type InvoiceAttributes = {
    orderId: number;
    amount: number;
    treePurchased: number;
    fkUserId: number;
    fkVehicleId: number;
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
        type: DataType.DECIMAL,
        field:"amount"
      })
      @Field((type) => Float)
      amount: number;
  
      @Column({
        type: DataType.INTEGER,
        field:"treePurchased"
      })
      @Field((type) => Int)
      treePurchase: number;
  
    //   @Column({
    //     type: DataType.INTEGER,
    //     field:"fkUserId",
    //     allowNull: false
    //   })
    //   @ForeignKey(() => UserEntity)
    //   fkUserId: number;
  
    //   @Column({ 
    //     type: DataType.STRING, 
    //     field: "fkVehicleId",
    //     allowNull: false })
    //   @ForeignKey(()=>InventoryEntity)
    //   fkVehicleId: number;
  
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