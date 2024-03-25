import { Body, Controller, Get, Post } from "@nestjs/common";
import { AdminService } from "./admin.service";

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

   @Get()
   getAllAdmins() {
      return this.adminService.getAllAdmins;
   }

   @Post()
   createAdmin(@Body() body){
    return this.adminService.createAdmin(body);
   }
}