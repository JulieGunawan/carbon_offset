import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/_mocks_/mockUsers";

export let incrementalId = 3;
@Resolver()
export class UserResolver {
    @Query((returns) => User, {nullable: true})
    getUserById(@Args('id', {type: ()=> Int}) id: number) {
        return mockUsers.find(user => user.id === id);
    }

    @Query((returns) => [User])
    getUsers() {
        return mockUsers;
    }

    @Mutation(returns => User)
    createUser(
        @Args('name') name: string, 
        @Args('avatar', {nullable: true}) avatar: string,
        @Args('email') email: string,
        @Args('password') password: string,
        @Args('role') role: string)
    {
        const newUser = {name, email, id: ++incrementalId, password, role, avatar}
        mockUsers.push(newUser);
        return newUser;

    }
}