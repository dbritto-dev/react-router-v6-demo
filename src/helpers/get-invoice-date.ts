import { Invoice } from "models/invoices";

export function getInvoiceDate(invoice: Invoice) {
  return new Date(invoice.invoiceDate).toLocaleDateString();
}
