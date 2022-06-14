import type { QueryFunctionContext } from "react-query";
import { Invoice } from "models/invoices";
import { unfetch } from "./unfetch";

export const invoicesFetcher = ({ signal }: QueryFunctionContext) =>
  unfetch<Invoice[]>("/api/invoices.json", { signal });
