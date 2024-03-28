import { Inject, Injectable } from '@nestjs/common';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { UpdateInvoiceInput } from './dto/update-invoice.input';
import { InvoiceEntity, InvoiceProvider } from './entities/invoice.entity';

@Injectable()
export class InvoiceService {

  constructor(
    @Inject(InvoiceProvider) private invoiceModel: typeof InvoiceEntity
    ) {}
  // create(createInvoiceInput: CreateInvoiceInput) {
  //   return 'This action adds a new invoice';
  // }

  async getAllInvoices(): Promise<InvoiceEntity[]> {
    return await this.invoiceModel.findAll();
  }

  async findOne(id: number): Promise<InvoiceEntity> {
    return await this.invoiceModel.findByPk(id);
  }

  // update(id: number, updateInvoiceInput: UpdateInvoiceInput) {
  //   return `This action updates a #${id} invoice`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} invoice`;
  // }
}
