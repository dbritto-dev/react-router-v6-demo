import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export function BreadcrumbItem({
  to,
  children
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "font-bold text-black" : "")}
      end
    >
      {children}
    </NavLink>
  );
}
