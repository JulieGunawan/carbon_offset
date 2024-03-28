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
  async getAllModels(): Promise<ModelEntity[]>{
    {
      return await this.modelService.findAll();
    }
  }

  @Query(()=>ModelEntity)
  async getOneModelById(@Args('id') id: number): Promise<ModelEntity> {
    return this.modelService.findOne(id);
  }

  // @Mutation('updateModel')
  // update(@Args('updateModelInput') updateModelInput: UpdateModelInput) {
  //   return this.modelService.update(updateModelInput.id, updateModelInput);
  // }

  @Mutation(()=> Boolean)
  async removeModelByName(@Args('model') model: string):Promise<Boolean> {
    return await this.modelService.removeOne(model);
  }
}
