import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../../entities/user.entities';
import { UsersService } from '../../services/users/users.service';

@Resolver(of => User)
export class UsersResolver {
    constructor(
        private usersService: UsersService
    ) {}

    @Query(returns => [User])
    async getAllUsers(): Promise<User[]> {
        return await this.usersService.findAll();
    }
 

    // @Get(':id')
    // async findOne(@Param('id') id: number): Promise<User> {
    //     const user = await this.usersService.findOne(id);

    //     if (!user){
    //         throw new NotFoundException('User not found');
    //     }

    //     return user;
    // }
}

//this should be a resolver