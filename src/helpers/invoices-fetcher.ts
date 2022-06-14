import type { QueryFunctionContext } from "react-query";
import { Invoice } from "models/invoices";
import { unfetch } from "./unfetch";

export const invoicesFetcher = (_: QueryFunctionContext) =>
  unfetch<Invoice[]>("/api/invoices.json");
