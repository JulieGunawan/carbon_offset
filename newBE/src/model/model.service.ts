import { Inject, Injectable } from '@nestjs/common';
import { CreateModelInput } from './dto/create-model.input';
import { UpdateModelInput } from './dto/update-model.input';
import { ModelEntity, ModelProvider } from './entities/model.entity';
import { Mode } from 'fs';

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

  async findOne(id: number): Promise<ModelEntity> {
    return await this.modelModel.findByPk(id);
  }

  // update(id: number, updateModelInput: UpdateModelInput) {
  //   return `This action updates a #${id} model`;
  // }

  async removeOne(model: string):Promise<Boolean> {
    const removedModel = await this.modelModel.findOne({ where: { model } });
    if (!removedModel) {
      throw new Error(`Model with name ${model} not found.`);
    }
    removedModel.destroy();
    return await true;
  }
}
