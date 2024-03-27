import { Query, Resolver, Args, Int, Mutation } from '@nestjs/graphql';
import { User } from '../../entities/user.entities';
import { UsersService } from '../../services/users/users.service';



@Resolver(of => User)
export class UsersResolver {
    constructor(
        private usersService: UsersService
    ) {}

    @Query(returns => [User])
    async getAllUsers(): Promise<User[]> {
        // console.log('getAllUsers', await this.usersService.findAll());
        return await this.usersService.findAll();
    }

    // @Query(returns => UserEntity, {nullable: true})
    // async getOneUser(@Args('id', {type: () => Int }) id: number): Promise<UserEntity> {
    //     return await this.usersService.findById(id);
    // }

    // @Mutation(returns => User, {nullable: true})
    // async updateUser(@Args('id', {type: () => Int }) id: number, @Args('user',{type:() => User}) user: User): Promise<User> {
    //     return await this.usersService.updateUser(id, user);
    // }

    // @Mutation(returns => Number, {nullable: true} )
    // async deleteAllUser(): Promise<number>{
    //     return await this.usersService.deleteAll();
    // }

    // @Mutation(returns => Number, {nullable: true} )
    // async deleteUser(@Args('id', {type: () => Int }) id: number): Promise<UserEntity>{
    //     return await this.usersService.deleteById();
    // }
 
}
