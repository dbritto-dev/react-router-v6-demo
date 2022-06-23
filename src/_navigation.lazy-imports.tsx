import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "routes/layout";

const Dashboard = lazy(
  () =>
    import(
      /* webpackChunkName: "dashboard" */
      /* webpackPrefetch: true */
      "routes/dashboard"
    )
);
const Accounts = lazy(
  () =>
    import(
      /* webpackChunkName: "accounts" */
      /* webpackPrefetch: true */
      "routes/accounts"
    )
);
const Expenses = lazy(
  () =>
    import(
      /* webpackChunkName: "expenses" */
      /* webpackPrefetch: true */
      "routes/expenses"
    )
);
const Reports = lazy(
  () =>
    import(
      /* webpackChunkName: "reports" */
      /* webpackPrefetch: true */
      "routes/reports"
    )
);
const Sales = lazy(
  () =>
    import(
      /* webpackChunkName: "sales" */
      /* webpackPrefetch: true */
      "routes/sales"
    )
);
const SalesLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "sales-layout" */
      /* webpackPrefetch: true */
      "routes/sales/layout"
    )
);
const SalesCustomers = lazy(
  () =>
    import(
      /* webpackChunkName: "sales-customers" */
      /* webpackPreload: true */
      "routes/sales/customers"
    )
);
const SalesDeposits = lazy(
  () =>
    import(
      /* webpackChunkName: "sales-deposits" */
      /* webpackPrefetch: true */
      "routes/sales/deposits"
    )
);
const SalesSubscriptions = lazy(
  () =>
    import(
      /* webpackChunkName: "sales-subscriptions" */
      /* webpackPrefetch: true */
      "routes/sales/subscriptions"
    )
);
const SalesInvoices = lazy(
  () =>
    import(
      /* webpackChunkName: "sales-invoices" */
      /* webpackPrefetch: true */
      "routes/sales/invoices"
    )
);
const SalesInvoicesLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "sales-invoices-layout" */
      /* webpackPrefetch: true */
      "routes/sales/invoices/layout"
    )
);
const SalesInvoicesDetail = lazy(
  () =>
    import(
      /* webpackChunkName: "sales-invoices-detail" */
      /* webpackPrefetch: true */
      "routes/sales/invoices/detail"
    )
);
const Home = lazy(
  () =>
    import(
      /* webpackChunkName: "home" */
      /* webpackPrefetch: true */
      "routes/home"
    )
);
const NotFound = lazy(
  () =>
    import(
      /* webpackChunkName: "not-found" */
      /* webpackPrefetch: true */
      "routes/not-found"
    )
);

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
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
        <Route path="reports" element={<Reports />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
