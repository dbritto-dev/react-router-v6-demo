import { Invoice } from "models/invoices";

export const getInvoiceTotal = (invoice: Invoice): number => {
  if (!invoice) return 0;
  return invoice.lineItems.reduce(
    (output, current) => output + current.quantity * current.unitPrice,
    0
  );
};
