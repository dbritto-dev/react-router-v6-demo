import { Invoice } from "~/models/invoices";
import { getInvoiceLineItemAmount } from "./get-invoice-line-item-amount";

export const getInvoiceAmount = (invoice: Invoice): number => {
  if (!invoice) return 0;
  return invoice.lineItems.reduce(
    (output, current) => output + getInvoiceLineItemAmount(current),
    0
  );
};
