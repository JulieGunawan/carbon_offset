import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from './entities/user.entity';
import { INTEGER } from 'sequelize';


@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // @Mutation('createUser')
  // create(@Args('createUserInput') createUserInput: CreateUserInput) {
  //   return this.userService.create(createUserInput);
  // }

  @Query(()=>[UserEntity])
  async getAllUsers(): Promise<UserEntity[]>{
    {
      return await this.userService.findAll();
    }
  }

  @Query(()=>UserEntity)
  async getOneUserById(@Args('id') id: number): Promise<UserEntity> {
    return this.userService.findOne(id);
  }

  // @Mutation('updateUser')
  // update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.userService.update(updateUserInput.id, updateUserInput);
  // }

  @Mutation(()=> UserEntity)
  async removeUserById(@Args('id') id: number) {
    return await this.userService.removeOne(id);
  }
}