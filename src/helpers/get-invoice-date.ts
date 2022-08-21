import { Invoice } from 'models/invoices';

export const getInvoiceDate = (invoice: Invoice): string =>
  new Date(invoice.invoiceDate).toLocaleDateString();
