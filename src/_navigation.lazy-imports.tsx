import { lazy } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { SmallSpinnit } from "components/small-spinnit";

const Dashboard = lazy(() => import("routes/dashboard"));
const Accounts = lazy(() => import("routes/accounts"));
const Expenses = lazy(() => import("routes/expenses"));
const Reports = lazy(() => import("routes/reports"));
const Sales = lazy(() => import("routes/sales"));
const SalesLayout = lazy(() => import("routes/sales/_layout"));
const SalesCustomers = lazy(() => import("routes/sales/customers"));
const SalesDeposits = lazy(() => import("routes/sales/deposits"));
const SalesSubscriptions = lazy(() => import("routes/sales/subscriptions"));
const SalesInvoices = lazy(() => import("routes/sales/invoices"));
const SalesInvoicesLayout = lazy(() =>
  import("routes/sales/invoices/_layout")
);
const SalesInvoicesDetail = lazy(() =>
  import("routes/sales/invoices/detail")
);
const Home = lazy(() => import("routes/home"));

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
