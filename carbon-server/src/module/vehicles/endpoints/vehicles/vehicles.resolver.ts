import { Controller, Get, NotFoundException, Param, UseGuards} from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { Vehicle } from '../../entities/vehicle.entities';
import { VehiclesService } from '../../services/vehicles/vehicles.service';

@Resolver(of => Vehicle)
export class VehiclesResolver {

    constructor(
        private vehicleService: VehiclesService
    ) {}

    @Query(returns => [Vehicle])
    async getAllVehicles(): Promise<Vehicle[]> {
        return this.vehicleService.getAllVehicles();
    }

    //only admin able to create the vehicle
    // @UseGuards(AuthGuard('jwt')) --> change this to @UseRoles('admin')
    // @Post()
    // async create(@Body() post: CreateVehicleDto, @Request() req): Promise<Vehicle> {
    //     return await this.vehicleService.create(post, req.user.id);

    // }
    
}

// @Controller('vehicles')
// export class VehiclesController {
//     constructor(
//         private vehicleService: VehiclesService;
//     ) {}

//     @Get()
//     async findAll() {
//         return await this.vehicleService.getAllVehicles();
//     }

//     @Get(':id')
//     async findOne(@Param('id') id: number): Promise<Vehicle> {
//         const user = await this.userService.findOne(id);

//         if (!user){
//             throw new NotFoundException('User not found');
//         }

//         return user;
//     }
// }