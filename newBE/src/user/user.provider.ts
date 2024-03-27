import { UserEntity, UserProvider } from "./entities/user.entity";

export const userProvider = [
    {
        provide: UserProvider,
        useValue: UserEntity
    }
]