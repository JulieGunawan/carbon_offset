import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MakeService } from './make.service';
import { CreateMakeInput } from './dto/create-make.input';
import { UpdateMakeInput } from './dto/update-make.input';
import { MakeEntity } from './entities/make.entity';

@Resolver('Make')
export class MakeResolver {
  constructor(private readonly makeService: MakeService) {}

  @Mutation(()=>MakeEntity)
  createMake(@Args('createMakeInput') createMakeInput: CreateMakeInput) {
    return this.makeService.create(createMakeInput);
  }

  @Query(()=>[MakeEntity])
  async getAllMakes(): Promise<MakeEntity[]>{
    {
      return await this.makeService.findAll();
    }
  }

  @Query(()=>MakeEntity)
  async getOneMakeById(@Args('id') id: number): Promise<MakeEntity> {
    return this.makeService.findOne(id);
  }

//   @Mutation('updateMake')
//   update(@Args('updateMakeInput') updateMakeInput: UpdateMakeInput) {
//     return this.makeService.update(updateMakeInput.id, updateMakeInput);
//   }

  @Mutation(()=> Boolean)
  // async removeMakeByName(@Args('make') make: string):Promise<Boolean> {
  //   return await this.makeService.removeOne(make);
  // }

  async removeMakeById(@Args('id') id: number):Promise<Boolean> {
    return await this.makeService.removeOne(id);
  }
}
