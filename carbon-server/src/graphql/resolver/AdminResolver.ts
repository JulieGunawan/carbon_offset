import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Admin } from "../models/Admin";
import { mockAdmins } from "src/_mocks_/mockAdmins";

@Resolver()
export class AdminResolver {
    @Query((returns) => Admin, {nullable: true})
    getAdminById(@Args('id', {type: ()=> Int}) id: number) {
        return mockAdmins.find(admin => admin.id === id);
    }

    @Query((returns) => [Admin])
    getAdmins() {
        return mockAdmins;
    }
}