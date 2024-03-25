import { Module } from '@nestjs/common';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [],
  controllers: [CustomerController, AdminController],
  providers: [CustomerService],
})
export class AppModule {}
