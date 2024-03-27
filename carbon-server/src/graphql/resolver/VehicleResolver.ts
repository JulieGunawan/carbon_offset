// import { Args, Int, Query, Resolver } from "@nestjs/graphql";
// import { Vehicle } from "../models/Vehicle";
// import { mockVehicles } from "src/_mocks_/mockVehicles";

// @Resolver()
// export class VehicleResolver {
//     @Query((returns) => Vehicle, {nullable: true})
//     getVehicleById(@Args('id', {type: ()=> Int}) id: number) {
//         return mockVehicles.find(vehicle => vehicle.id === id);
//     }

//     @Query((returns) => [Vehicle])
//     getVehicles() {
//         return mockVehicles;
//     }
// }