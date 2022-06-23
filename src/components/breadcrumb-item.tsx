import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export interface BreadcrumbItemProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export function BreadcrumbItem({ to, children }: BreadcrumbItemProps) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? 'font-bold text-black' : '')} end>
      {children}
    </NavLink>
  );
}
