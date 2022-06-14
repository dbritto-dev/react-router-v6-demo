export type DueStatus = "overdue" | "due" | "paid";

export interface InvoiceListItem {
  id: string;
  total: number;
  number: number;
  dueDisplay: string;
  dueStatus: DueStatus;
  name: string;
}

export interface InvoiceLineItem {
  id: string;
  description: string;
  unitPrice: number;
  quantity: number;
}

export interface Invoice {
  id: string;
  name: string;
  number: number;
  invoiceDate: string;
  dueDate: string;
  paid: boolean;
  lineItems: InvoiceLineItem[];
}
