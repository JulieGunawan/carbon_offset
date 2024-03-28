import { Model } from "sequelize-typescript";
import { InventoryEntity } from "src/inventory/entities/inventory.entity";
import { InvoiceEntity } from "src/invoice/entities/invoice.entity";
export type UserAttributes = {
    userId: number;
    name: string;
    email: string;
    password: string;
    role: string;
    avatar?: string;
    inventory?: InventoryEntity[];
    order?: InvoiceEntity[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
};
export declare const UserProvider: "USER_PROVIDER";
export declare class UserEntity extends Model<UserAttributes> {
    userId: number;
    name: string;
    email: string;
    password: string;
    role: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    inventory?: InventoryEntity[];
    order?: InvoiceEntity[];
}
