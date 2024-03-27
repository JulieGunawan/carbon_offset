import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private userModel;
    constructor(userModel: typeof UserEntity);
    findAll(): Promise<UserEntity[]>;
}
