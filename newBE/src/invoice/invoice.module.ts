import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { invoiceProvider } from './invoice.provider';

@Module({
  providers: [InvoiceResolver, InvoiceService, ...invoiceProvider],
})
export class InvoiceModule {}
