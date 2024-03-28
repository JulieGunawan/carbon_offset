import { ModelEntity, ModelProvider } from "./entities/model.entity";

export const modelProvider = [
    {
        provide: ModelProvider,
        useValue: ModelEntity
    }
]