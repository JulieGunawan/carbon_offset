import { Injectable, Inject } from '@nestjs/common';
// import { CreateInventoryInput } from './dto/create-inventory.input';
// import { UpdateInventoryInput } from './dto/update-inventory.input';
import { InventoryEntity, InventoryProvider } from './entities/inventory.entity';

@Injectable()
export class InventoryService {

  constructor(
    @Inject(InventoryProvider) private inventoryModel: typeof InventoryEntity
  ) {}
  // create(createInventoryInput: CreateInventoryInput) {
  //   return 'This action adds a new inventory';
  // }

    async findAll(): Promise<InventoryEntity[]> {
      return await this.inventoryModel.findAll();
    }

//   findOne(id: number) {
//     return `This action returns a #${id} inventory`;
//   }

//   update(id: number, updateInventoryInput: UpdateInventoryInput) {
//     return `This action updates a #${id} inventory`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} inventory`;
//   }
}
