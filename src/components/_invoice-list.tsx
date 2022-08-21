import { NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { invoicesFetcher } from 'helpers/invoices-fetcher';
import { getInvoiceDueStatus } from 'helpers/get-invoice-due-status';
import { getInvoiceTotal } from 'helpers/get-invoice-total';

export interface InvoiceListProps {
  children?: React.ReactNode;
}

export function InvoiceList({ children }: InvoiceListProps) {
  const { data: invoiceListItems } = useQuery('invoices', invoicesFetcher, {
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
            className={({ isActive }) =>
              'block border-b border-gray-50 py-3 px-4 hover:bg-gray-50' +
              ' ' +
              (isActive ? 'bg-gray-50' : '')
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
                  'uppercase' +
                  ' ' +
                  (getInvoiceDueStatus(invoice) === 'paid'
                    ? 'text-green-400'
                    : getInvoiceDueStatus(invoice) === 'overdue'
                    ? 'text-red-400'
                    : '')
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
