import { Module } from '@nestjs/common';
import { ModelService } from './model.service';
import { ModelResolver } from './model.resolver';
import { modelProvider } from './model.provider';

@Module({
  providers: [ModelResolver, ModelService, ...modelProvider],
})
export class ModelModule {}
