import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { LabelText } from "components/label-text";
import { SmallSpinnit } from "components/small-spinnit";
import { invoicesFetcher } from "helpers/invoices-fetcher";
import { getInvoiceDueStatus } from "helpers/get-invoice-due-status";
import { getInvoiceTotal } from "helpers/get-invoice-total";
import { InvoicesInfo } from "components/invoices-info";
import { InvoiceList } from "components/invoice-list";

export default function Layout() {
  const { data: invoiceListItems } = useQuery("invoices", invoicesFetcher, {
    suspense: true,
  });

  if (invoiceListItems === undefined) return null;

  const overdueAmount = invoiceListItems.reduce(
    (output, invoice) =>
      output +
      (getInvoiceDueStatus(invoice) === "overdue"
        ? getInvoiceTotal(invoice)
        : 0),
    0
  );
  const dueSoonAmount = invoiceListItems.reduce(
    (output, invoice) =>
      output +
      (getInvoiceDueStatus(invoice) === "due" ? getInvoiceTotal(invoice) : 0),
    0
  );
  const hundo = dueSoonAmount + overdueAmount;
  const dueSoonPercent = Math.floor((dueSoonAmount / hundo) * 100);

  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-4">
        <InvoicesInfo label="Overdue" amount={overdueAmount} />
        <div className="flex h-4 flex-1 overflow-hidden rounded-full">
          <div className="flex-1 bg-yellow-400" />
          <div
            className="bg-green-400"
            style={{ width: `${dueSoonPercent}%` }}
          />
        </div>
        <InvoicesInfo label="Due Soon" amount={dueSoonAmount} right />
      </div>
      <div className="h-4" />
      <LabelText>Invoice List</LabelText>
      <div className="h-2" />
      <InvoiceList>
        <SmallSpinnit>
          <Outlet />
        </SmallSpinnit>
      </InvoiceList>
    </div>
  );
}
