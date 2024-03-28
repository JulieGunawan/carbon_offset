import { Model } from "sequelize-typescript";
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
};
export declare const UserProvider: "USER_PROVIDER";
export declare class UserEntity extends Model<UserAttributes> {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    inventory?: InventoryEntity[];
}
