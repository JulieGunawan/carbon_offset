import { Module } from '@nestjs/common';
import { MakeService } from './make.service';
import { MakeResolver } from './make.resolver';
import { makeProvider } from './make.provider';

@Module({
  providers: [MakeResolver, MakeService, ...makeProvider],
})
export class MakeModule {}
