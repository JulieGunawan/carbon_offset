import { Model } from "sequelize-typescript";
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
};
export declare const UserProvider: "USER_PROVIDER";
export declare class UserEntity extends Model<UserAttributes> {
    user_id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    avatar?: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
    inventory?: InventoryEntity[];
    order?: InvoiceEntity[];
}
