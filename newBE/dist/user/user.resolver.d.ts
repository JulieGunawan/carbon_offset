import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<UserEntity[]>;
    findOneUser(id: number): Promise<UserEntity>;
}
