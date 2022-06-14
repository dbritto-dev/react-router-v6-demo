import { NavLink, Outlet } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { LabelText } from "components/label-text";
import { SmallSpinnit } from "components/small-spinnit";
import { invoicesFetcher } from "helpers/invoices-fetcher";
import { getInvoiceDueStatus } from "helpers/get-invoice-due-status";
import { getInvoiceTotal } from "helpers/get-invoice-total";
import { invoiceFetcher } from "helpers/invoice-fetcher";

function InvoicesInfo({
  label,
  amount,
  right,
}: {
  label: string;
  amount: number;
  right?: boolean;
}) {
  return (
    <div className={right ? "text-right" : ""}>
      <LabelText>{label}</LabelText>
      <div className="text-[length:18px] text-black">
        ${amount.toLocaleString()}
      </div>
    </div>
  );
}

function InvoiceList({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const { data: invoiceListItems } = useQuery("invoices", invoicesFetcher, {
    suspense: true,
  });

  if (invoiceListItems === undefined) return null;

  return (
    <div className="flex rounded-lg border border-gray-100">
      <div className="w-1/2 border-r border-gray-100">
        {invoiceListItems.map((invoice, index) => (
          <NavLink
            key={index}
            to={invoice.id}
            onMouseEnter={async () =>
              void (await queryClient.prefetchQuery(
                ["invoice", invoice.id],
                invoiceFetcher(invoice.id),
                { staleTime: 1000 * 2 }
              ))
            }
            className={({ isActive }) =>
              "block border-b border-gray-50 py-3 px-4 hover:bg-gray-50" +
              " " +
              (isActive ? "bg-gray-50" : "")
            }
          >
            <div className="flex justify-between text-[length:14px] font-bold leading-6">
              <div>{invoice.name}</div>
              <div>${getInvoiceTotal(invoice).toLocaleString()}</div>
            </div>
            <div className="flex justify-between text-[length:12px] font-medium leading-4 text-gray-400">
              <div>{invoice.number}</div>
              <div
                className={
                  "uppercase" +
                  " " +
                  (getInvoiceDueStatus(invoice) === "paid"
                    ? "text-green-400"
                    : getInvoiceDueStatus(invoice) === "overdue"
                    ? "text-red-400"
                    : "")
                }
              >
                {getInvoiceDueStatus(invoice)}
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="w-1/2">{children}</div>
    </div>
  );
}

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
