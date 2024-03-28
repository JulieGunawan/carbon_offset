import { Inject, Injectable } from '@nestjs/common';
import { CreateModelInput } from './dto/create-model.input';
import { UpdateModelInput } from './dto/update-model.input';
import { ModelEntity, ModelProvider } from './entities/model.entity';

@Injectable()
export class ModelService {

  constructor(
    @Inject(ModelProvider) private modelModel: typeof ModelEntity
    ) {}

  // create(createModelInput: CreateModelInput) {
  //   return 'This action adds a new model';
  // }

  async findAll(): Promise<ModelEntity[]> {
    return await this.modelModel.findAll();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} model`;
  // }

  // update(id: number, updateModelInput: UpdateModelInput) {
  //   return `This action updates a #${id} model`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} model`;
  // }
}
