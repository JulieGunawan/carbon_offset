import { Injectable,Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../entities/user.entities';


export const UserProvider = "USER_PROVIDER" as const;


@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User) private userModel: typeof User
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.findAll();
    }

    // async findById(id:number): Promise<UserEntity>{
    //     return await this.userModel.findOne({ where: {id} });
    // }

    // async updateUser(id:number, input:UserEntity): Promise<UserEntity>{

    //     const tempUser = this.userModel.findOne({ where: {id} });

    //     const [updatedRowCount] = await this.userModel.update(
    //         { user: input },
    //         { where: { id }, returning: true }
    //     );
    //     if (updatedRowCount === 0) {
    //         throw new Error(`User with id ${id} not found.`);
    //     }
    //     return tempUser;
    // }

    // async deleteAll(): Promise<number>{
    //     const deletedRows = await this.userModel.destroy({
    //         where: {},
    //         truncate: true // Ensure that the entire table is truncated
    //     });
    //     return deletedRows;
    // }

    // async deleteById(id:number): Promise<number>{
    //     return await this.userModel.destroy({ where: {id} });
    // }
}
