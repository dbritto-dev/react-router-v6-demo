import { Outlet } from "react-router-dom";
import { BreadcrumbItem } from "components/breadcrumb-item";
import { SmallSpinnit } from "components/small-spinnit";

export default function SalesLayout() {
  return (
    <div className="relative h-full p-10">
      <div className="font-display text-d-h3 text-black">Sales</div>
      <div className="h-6" />
      <div className="flex gap-4 border-b border-gray-100 pb-4 text-[length:14px] font-medium text-gray-400">
        <BreadcrumbItem to=".">Overview</BreadcrumbItem>
        <BreadcrumbItem to="subscriptions">Subscriptions</BreadcrumbItem>
        <BreadcrumbItem to="invoices">Invoices</BreadcrumbItem>
        <BreadcrumbItem to="customers">Customers</BreadcrumbItem>
        <BreadcrumbItem to="deposits">Deposits</BreadcrumbItem>
      </div>
      <div className="h-4" />
      <SmallSpinnit>
        <Outlet />
      </SmallSpinnit>
    </div>
  );
}
