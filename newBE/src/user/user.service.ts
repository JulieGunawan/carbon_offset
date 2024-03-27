import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity, UserProvider } from './entities/user.entity';

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

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
