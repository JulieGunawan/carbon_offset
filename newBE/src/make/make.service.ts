import { Inject, Injectable } from '@nestjs/common';
import { CreateMakeInput } from './dto/create-make.input';
import { UpdateMakeInput } from './dto/update-make.input';
import { MakeEntity, MakeProvider } from './entities/make.entity';

@Injectable()
export class MakeService {

  constructor(
    @Inject(MakeProvider) private makeModel: typeof MakeEntity
) {}
  async create(createMakeInput: CreateMakeInput) {
    return await this.makeModel.create({
      make: createMakeInput.make
    })
  }

  async findAll(): Promise<MakeEntity[]> {
    console.log('lalalla')
    return await this.makeModel.findAll();
  }

    async findOne(id: number): Promise<MakeEntity> {
      return await this.makeModel.findByPk(id);
    }

//   update(id: number, updateMakeInput: UpdateMakeInput) {
//     return `This action updates a #${id} make`;
//   }

  // async removeOne(make: string):Promise<Boolean> {
  //   const removedMake = (await this.makeModel.destroy({ where: { make } }));
  //   if (!removedMake) {
  //     throw new Error(`Model with name ${make} not found.`);
  //   }

  //   return await true;
  // }

    async removeOne(id: number):Promise<Boolean> {
    const removedMake = (await this.makeModel.destroy({ where: { make_id:id } }));
    if (!removedMake) {
      throw new Error(`Model with id ${id} not found.`);
    }

    return await true;
  }
}
