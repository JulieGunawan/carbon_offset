import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity, UserProvider } from './entities/user.entity';
import { isEmpty } from 'rxjs';

@Injectable()
export class UserService {

  constructor(
    @Inject(UserProvider) private userModel: typeof UserEntity
) {}
  // create(createUserInput: CreateUserInput) {
  //   return 'This action adds a new user';
  // }

  async findAll(): Promise<UserEntity[]> {
    return await this.userModel.findAll();
  }

  async findOne(id: number): Promise<UserEntity> {
    return await this.userModel.findByPk(id);
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  //remove User from the role but not database
  async removeOne(id: number):Promise<UserEntity> {
    const removedUser = (await this.userModel.findByPk(id)).update({ role:'', deleted_at: new Date() });
    if (!removedUser) {
      throw new Error(`User with ID ${id} not found.`);
    }
    return await removedUser;
  }
}

  
