import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { LabelText } from "components/label-text";
import { LineItem } from "components/line-item";
import { invoiceFetcher } from "helpers/invoice-fetcher";
import { getInvoiceTotal } from "helpers/get-invoice-total";
import { getInvoiceDueFromNow } from "helpers/get-invoice-due-from-now";
import { getInvoiceDate } from "helpers/get-invoice-date";
import { getInvoiceLineItemAmount } from "helpers/get-invoice-line-item-amount";

export default function SalesInvoicesDetail() {
  const { invoiceId = "" } = useParams<{ invoiceId: string }>();
  const { data: invoice } = useQuery(
    ["invoice", invoiceId],
    invoiceFetcher(invoiceId),
    { suspense: true, enabled: !!invoiceId }
  );

  if (invoice === undefined) return null;

  return (
    <div className="relative p-10">
      <div className="text-[length:14px] font-bold leading-6">
        {invoice.name}
      </div>
      <div className="text-[length:32px] font-bold leading-[40px]">
        ${getInvoiceTotal(invoice).toLocaleString()}
      </div>
      <LabelText>
        {getInvoiceDueFromNow(invoice)} • Invoiced {getInvoiceDate(invoice)}
      </LabelText>
      <div className="h-4" />
      {invoice.lineItems.map((item) => (
        <LineItem
          key={item.id}
          label={item.description}
          amount={getInvoiceLineItemAmount(item)}
        />
      ))}
      <LineItem bold label="Net Total" amount={getInvoiceTotal(invoice)} />
    </div>
  );
}
