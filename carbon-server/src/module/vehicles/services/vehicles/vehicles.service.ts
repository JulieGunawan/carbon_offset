import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Vehicle } from '../../entities/vehicle.entities';

@Injectable()
export class VehiclesService {

    constructor(
        @InjectModel(Vehicle) private vehicleEntity: typeof Vehicle
    ) {}
    
    async getAllVehicles(){
        return await this.vehicleEntity.findAll();
    }

    async findOneVehicle(id:number): Promise<Vehicle>{
        return await this.vehicleEntity.findOne({ where: {id} });
    }
}
