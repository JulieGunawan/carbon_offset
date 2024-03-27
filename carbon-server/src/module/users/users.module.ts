import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entities';
import { UsersResolver } from './endpoints/users/users.resolver';
import { UsersService } from './services/users/users.service';

@Module({
    imports:[SequelizeModule.forFeature([User])],
    providers: [UsersService, UsersResolver ],
    controllers: [],
})
export class UsersModule {}
