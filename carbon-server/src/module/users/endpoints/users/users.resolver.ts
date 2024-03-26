import { Query, Resolver } from '@nestjs/graphql';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { User } from '../../entities/user.entities';
import { UsersService } from '../../services/users/users.service';

@Resolver(of => User)
export class UsersResolver {
    constructor(
        private userService: UsersService
    ) {}

    @Query(returns => [User])
    async findAll(): Promise<User[]> {
        return await this.userService.getAllUsers();
    }
 

    // @Get(':id')
    // async findOne(@Param('id') id: number): Promise<User> {
    //     const user = await this.userService.findOne(id);

    //     if (!user){
    //         throw new NotFoundException('User not found');
    //     }

    //     return user;
    // }
}

//this should be a resolver