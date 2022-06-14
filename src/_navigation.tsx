import { Routes, Route, Outlet } from "react-router-dom";
import { SmallSpinnit } from "~/components/small-spinnit";
import Dashboard from "~/routes/dashboard";
import Accounts from "~/routes/accounts";
import Expenses from "~/routes/expenses";
import Reports from "~/routes/reports";
import Sales from "~/routes/sales";
import SalesLayout from "~/routes/sales/_layout";
import SalesCustomers from "~/routes/sales/customers";
import SalesDeposits from "~/routes/sales/deposits";
import SalesSubscriptions from "~/routes/sales/subscriptions";
import SalesInvoices from "~/routes/sales/invoices";
import SalesInvoicesLayout from "~/routes/sales/invoices/_layout";
import SalesInvoicesDetail from "~/routes/sales/invoices/detail";
import Home from "~/routes/home";

function SmallSpinnitLayoutRoute() {
  return (
    <SmallSpinnit>
      <Outlet />
    </SmallSpinnit>
  );
}

export function Navigation() {
  return (
    <Routes>
      <Route element={<SmallSpinnitLayoutRoute />}>
        <Route element={<Home />} index />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="sales" element={<SalesLayout />}>
          <Route element={<Sales />} index />
          <Route path="invoices" element={<SalesInvoicesLayout />}>
            <Route element={<SalesInvoices />} index />
            <Route path=":inoviceId" element={<SalesInvoicesDetail />} />
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
