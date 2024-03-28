import { Inject, Injectable } from '@nestjs/common';
import { CreateMakeInput } from './dto/create-make.input';
import { UpdateMakeInput } from './dto/update-make.input';
import { MakeEntity, MakeProvider } from './entities/make.entity';

@Injectable()
export class MakeService {

  constructor(
    @Inject(MakeProvider) private makeModel: typeof MakeEntity
) {}
//   create(createMakeInput: CreateMakeInput) {
//     return 'This action adds a new make';
//   }

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

//   remove(id: number) {
//     return `This action removes a #${id} make`;
//   }
}
