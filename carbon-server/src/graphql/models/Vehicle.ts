import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Vehicle {
    @Field((type) => Int)
    id: number;

    @Field()
    make: string;

    @Field()
    model: string;

    @Field((type) => Int)
    year: number;

    @Field()
    mileage: string;

    @Field()
    fuelType: string;

    @Field()
    trim: string;

    @Field((type) => Int)
    treeRatio: number;

    @Field((type) => Int)
    treePlanted: number;
}