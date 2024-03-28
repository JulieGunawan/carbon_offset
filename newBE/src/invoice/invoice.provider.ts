import { InvoiceEntity, InvoiceProvider } from "./entities/invoice.entity";

export const invoiceProvider = [
    {
        provide: InvoiceProvider,
        useValue: InvoiceEntity
    }
]