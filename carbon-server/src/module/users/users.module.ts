import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersResolver } from './endpoints/users/users.resolver';
import { UsersService } from './services/users/users.service';
import { User } from './entities/user.entities';

@Module({
    imports:[SequelizeModule.forFeature([User])],
    providers: [UsersService, UsersResolver],
    controllers: [],
})
export class UsersModule {}
