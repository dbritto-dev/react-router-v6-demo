import { InvoiceLineItem } from "~/models/invoices";

export const getInvoiceLineItemAmount = (
  invoiceLineItem: InvoiceLineItem
): number => {
  return invoiceLineItem.quantity * invoiceLineItem.unitPrice;
};
