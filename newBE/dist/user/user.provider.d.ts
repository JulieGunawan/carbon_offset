import { UserEntity } from "./entities/user.entity";
export declare const userProvider: {
    provide: "USER_PROVIDER";
    useValue: typeof UserEntity;
}[];
