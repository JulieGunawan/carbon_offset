import { MakeEntity, MakeProvider } from "./entities/make.entity";

export const makeProvider = [
    {
        provide: MakeProvider,
        useValue: MakeEntity
    }
]