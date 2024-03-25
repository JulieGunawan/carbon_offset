import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService {
   admins = [];

   getAllAdmins() {
      return this.admins;
   }

   createAdmin(admin){
    this.admins.push(admin);
   }
}