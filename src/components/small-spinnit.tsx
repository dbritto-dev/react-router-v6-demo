import { Suspense } from "react";
import type { ReactNode } from "react";
import { Spinner } from "./spinner";

export const SmallSpinnit = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<Spinner className="p-8 h-[6rem]" />}>
    {children}
  </Suspense>
);
