import { InventoryEntity, InventoryProvider } from "./entities/inventory.entity";

export const inventoryProvider = [
    {
        provide: InventoryProvider,
        useValue: InventoryEntity
    }
]