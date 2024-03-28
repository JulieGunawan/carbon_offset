import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMakeInput {
    @Field()
    make: string;
}
