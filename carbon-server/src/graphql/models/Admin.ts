import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Admin {
    @Field((type) => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    role: string;
}