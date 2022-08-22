import type { QueryFunction } from '@tanstack/react-query';
import { Invoice } from 'models/invoices';
import { unfetch } from './unfetch';

export const getInvoiceFetcherQueryKey = (invoiceId: string) => ['invoice', invoiceId];

export const invoiceFetcher =
  (invoiceId: string): QueryFunction<Invoice> =>
  async ({ signal }) =>
    unfetch(`/api/invoices/${invoiceId}.json`, { signal });
