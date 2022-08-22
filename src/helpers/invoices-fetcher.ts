import type { QueryFunction } from '@tanstack/react-query';
import { Invoice } from 'models/invoices';
import { unfetch } from './unfetch';

export const getInvoicesFetcherQueryKey = () => ['invoices'];

export const invoicesFetcher: QueryFunction<Invoice[]> = ({ signal }) =>
  unfetch('/api/invoices.json', { signal });
