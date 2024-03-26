import { Vehicle } from "./entities/vehicle.entities";

export const vehicleProviders = [
    {
        provide: 'VEHICLE_REPOSITORY',
        useValue: Vehicle
    }
]