import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { userProvider } from './user.provider';

@Module({
  providers: [UserResolver, UserService, ...userProvider],
})
export class UserModule {}
