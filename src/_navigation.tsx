import { Routes, Route } from "react-router-dom";
import MainLayout from "routes/layout";
import Home from "routes/home";
import Dashboard from "routes/dashboard";
import Accounts from "routes/accounts";
import Expenses from "routes/expenses";
import Reports from "routes/reports";
import Sales from "routes/sales";
import SalesLayout from "routes/sales/layout";
import SalesCustomers from "routes/sales/customers";
import SalesDeposits from "routes/sales/deposits";
import SalesSubscriptions from "routes/sales/subscriptions";
import SalesInvoices from "routes/sales/invoices";
import SalesInvoicesLayout from "routes/sales/invoices/layout";
import SalesInvoicesDetail from "routes/sales/invoices/detail";

export function Navigation() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<Home />} index />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="sales" element={<SalesLayout />}>
          <Route element={<Sales />} index />
          <Route path="invoices" element={<SalesInvoicesLayout />}>
            <Route element={<SalesInvoices />} index />
            <Route path=":invoiceId" element={<SalesInvoicesDetail />} />
          </Route>
          <Route path="customers" element={<SalesCustomers />} />
          <Route path="deposits" element={<SalesDeposits />} />
          <Route path="subscriptions" element={<SalesSubscriptions />} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}
