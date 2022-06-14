import { Invoice, DueStatus } from "models/invoices";
import { asUTC } from "./as-utc";

export const getInvoiceDueStatus = (invoice: Invoice): DueStatus => {
  const days = Math.ceil(
    (new Date(invoice.dueDate).getTime() - asUTC(new Date()).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return invoice.paid ? "paid" : days < 0 ? "overdue" : "due";
};
