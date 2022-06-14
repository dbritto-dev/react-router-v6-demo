import { Invoice } from "models/invoices";
import { asUTC } from "./as-utc";

export function getInvoiceDueFromNow(invoice: Invoice) {
  const days = Math.ceil(
    (new Date(invoice.dueDate).getTime() - asUTC(new Date()).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  if (invoice.paid) return "Paid";
  if (days < 0) return "Overdue";
  if (days === 0) return "Due Today";
  return `Due in ${days} Days`;
}
