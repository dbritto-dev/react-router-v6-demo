import { Suspense } from "react";
import type { ReactNode } from "react";
import { Spinner } from "./spinner";

export interface SmallSpinnitProps {
  children?: ReactNode;
}

export const SmallSpinnit = ({ children }: SmallSpinnitProps) => (
  <Suspense fallback={<Spinner className="p-8 h-[6rem]" />}>
    {children}
  </Suspense>
);
