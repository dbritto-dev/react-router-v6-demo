import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FakebooksLogo } from "./fakebooks-logo";
import { NavItem } from "./nav-item";

export function Layout({ children }: { children?: ReactNode }) {
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
      <div className="flex-1">{children}</div>
    </div>
  );
}
