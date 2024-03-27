import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryResolver } from './inventory.resolver';
import { inventoryProvider } from './inventory.provider';

@Module({
  providers: [InventoryResolver, InventoryService, ...inventoryProvider],
})
export class InventoryModule {}
