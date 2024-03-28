import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ModelService } from './model.service';
import { CreateModelInput } from './dto/create-model.input';
import { UpdateModelInput } from './dto/update-model.input';
import { ModelEntity } from 'src/model/entities/model.entity';

@Resolver('Model')
export class ModelResolver {
  constructor(private readonly modelService: ModelService) {}

  // @Mutation('createModel')
  // create(@Args('createModelInput') createModelInput: CreateModelInput) {
  //   return this.modelService.create(createModelInput);
  // }

  @Query(()=>[ModelEntity])
  async getAllUsers(): Promise<ModelEntity[]>{
    {
      return await this.modelService.findAll();
    }
  }

  // @Query('model')
  // findOne(@Args('id') id: number) {
  //   return this.modelService.findOne(id);
  // }

  // @Mutation('updateModel')
  // update(@Args('updateModelInput') updateModelInput: UpdateModelInput) {
  //   return this.modelService.update(updateModelInput.id, updateModelInput);
  // }

  // @Mutation('removeModel')
  // remove(@Args('id') id: number) {
  //   return this.modelService.remove(id);
  // }
}
