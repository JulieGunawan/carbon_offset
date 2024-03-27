import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InventoryService } from './inventory.service';
import { InventoryEntity } from './entities/inventory.entity';
// import { CreateInventoryInput } from './dto/create-inventory.input';
// import { UpdateInventoryInput } from './dto/update-inventory.input';

@Resolver('Inventory')
export class InventoryResolver {
  constructor(private readonly inventoryService: InventoryService) {}

//   @Mutation('createInventory')
//   create(@Args('createInventoryInput') createInventoryInput: CreateInventoryInput) {
//     return this.inventoryService.create(createInventoryInput);
//   }

  @Query(()=>[InventoryEntity])
  async getAllInventories(): Promise<InventoryEntity[]>{
    {
      return await this.inventoryService.findAll();
    }
  }

  @Query(()=>InventoryEntity)
  getOneInventory(@Args('id') id: number): Promise<InventoryEntity> {
    return this.inventoryService.findOne(id);
  }

//   @Mutation('updateInventory')
//   update(@Args('updateInventoryInput') updateInventoryInput: UpdateInventoryInput) {
//     return this.inventoryService.update(updateInventoryInput.id, updateInventoryInput);
//   }

//   @Mutation('removeInventory')
//   remove(@Args('id') id: number) {
//     return this.inventoryService.remove(id);
//   }
}
