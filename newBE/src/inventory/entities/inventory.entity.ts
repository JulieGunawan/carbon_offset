import { BelongsTo, Column, CreatedAt, DataType, DeletedAt, ForeignKey, HasOne, Model, Table, UpdatedAt } from "sequelize-typescript";
import { Field, Float, Int } from "@nestjs/graphql";
import { UserEntity } from "src/user/entities/user.entity";
import { MakeEntity } from "src/make/entities/make.entity";
import { ModelEntity } from "src/model/entities/model.entity";

export type InventoryAttributes = {
    inventory_id: number;
    make: string;
    model: string;
    trim: string;
    year: number;
    fuel_type: string;
    mileage:number,
    tree_to_km:number;
    planted_tree:number;
    image?: string;
    fk_user_id:number;
    fk_model_id:number;
    fk_make_id:number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
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
      inventory_id: number;
    
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
        field:"fuel_type"
      })
      @Field()
      fuel_type: string;
    
      @Column({
        type: DataType.INTEGER,
        field:"mileage"
      })
      @Field((type) => Int)
      mileage: number;
    
      @Column({
        type: DataType.INTEGER,
        field:"planted_tree"
      })
      @Field((type) => Int)
      planted_tree: number;
    
      @Column({ type: DataType.STRING, field: "image", allowNull: true })
      @Field({nullable: true})
      image?: string;

      @ForeignKey(() => UserEntity)
      @Column({
        type: DataType.INTEGER,
        field: "fk_user_id",
        allowNull: false,
      })
      fk_user_id: number;

      @BelongsTo(() => UserEntity)
      user: UserEntity;

      @ForeignKey(() => MakeEntity)
      @Column({
        type: DataType.INTEGER,
        field: "fk_make_id",
        allowNull: true,
      })
      fk_make_id: number;

      @BelongsTo(() => MakeEntity)
      make_entity: MakeEntity;

      @ForeignKey(() => ModelEntity)
      @Column({
        type: DataType.INTEGER,
        field: "fk_model_id",
        allowNull: true,
      })
      fk_model_id: number;

      @BelongsTo(() => ModelEntity)
      model_entity: ModelEntity;
    
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