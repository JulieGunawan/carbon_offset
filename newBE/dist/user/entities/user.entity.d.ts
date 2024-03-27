import { Model } from "sequelize-typescript";
export type UserAttributes = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    avatar?: string;
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
}
