import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserEntity[]>;
    getOneUserById(id: number): Promise<UserEntity>;
    removeUserById(id: number): Promise<UserEntity>;
}
