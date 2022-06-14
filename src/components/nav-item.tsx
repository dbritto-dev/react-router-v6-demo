import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export function NavItem({
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
      className={({ isActive }) =>
        `my-1 py-1 px-2 pr-16 text-[length:14px] ${
          isActive ? "rounded-md bg-gray-100" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
}
