import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useQueryClient } from "react-query";
import { NavItem } from "components/nav-item";
import { SmallSpinnit } from "components/small-spinnit";
import { FakebooksLogo } from "components/fakebooks-logo";
import { invoicesFetcher } from "helpers/invoices-fetcher";

export default function Layout() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetchInvoices = async () =>
      void (await queryClient.prefetchQuery("invoices", invoicesFetcher));

    prefetchInvoices();
  }, [queryClient]);

  return (
    <div className="relative flex h-full rounded-lg bg-white text-gray-600">
      <div className="border-r border-gray-100 bg-gray-50">
        <div className="p-4">
          <Link to="." className="flex items-center text-[color:#23BF1F]">
            <FakebooksLogo className="relative top-[1px] h-[18px] w-[18px]" />
            <div className="w-1" />
            <div className="font-display text-d-p-sm">Fakebooks</div>
          </Link>
          <div className="h-7" />
          <div className="flex flex-col font-bold text-gray-800">
            <NavItem to="dashboard">Dashboard</NavItem>
            <NavItem to="accounts">Accounts</NavItem>
            <NavItem to="sales">Sales</NavItem>
            <NavItem to="expenses">Expenses</NavItem>
            <NavItem to="reports">Reports</NavItem>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <SmallSpinnit>
          <Outlet />
        </SmallSpinnit>
      </div>
    </div>
  );
}
