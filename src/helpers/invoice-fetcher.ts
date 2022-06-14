import type { QueryFunctionContext } from "react-query";
import { Invoice } from "~/models/invoices";
import { unfetch } from "./unfetch";

export const invoiceFetcher = (invoiceId: string) => async ({
  signal
}: QueryFunctionContext) =>
  unfetch<Invoice>(`/api/invoices/${invoiceId}.json`, { signal });
