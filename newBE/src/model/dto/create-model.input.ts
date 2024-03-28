import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateModelInput {
    @Field()
    model: string;

    @Field(() => Float)
    tree_to_km: number;

    @Field(() => Int)
    fk_make_id: number;

}