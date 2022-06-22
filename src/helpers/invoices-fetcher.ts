import type { QueryFunction } from "react-query";
import { Invoice } from "models/invoices";
import { unfetch } from "./unfetch";

export const invoicesFetcher: QueryFunction<Invoice[]> = ({ signal }) =>
  unfetch("/api/invoices.json", { signal });
