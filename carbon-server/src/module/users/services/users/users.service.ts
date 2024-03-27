import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../entities/user.entities';


@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User) private userModel: typeof User
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.findAll();
    }

    // async getOneUser(id:number): Promise<User>{
    //     return await this.userModel.findOne({ where: {id} });
    // }

    // async deleteUser(id:number): Promise<number>{
    //     return await this.userModel.destroy({ where: {id} });
    // }
}
