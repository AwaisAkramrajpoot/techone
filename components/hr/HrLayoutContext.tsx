"use client";

import { createContext, useContext } from "react";

type HrLayoutContextValue = {
  showInnerSidebar: boolean;
  setShowInnerSidebar: (value: boolean) => void;
};

const HrLayoutContext = createContext<HrLayoutContextValue | null>(null);

export function HrLayoutProvider({
  value,
  children,
}: {
  value: HrLayoutContextValue;
  children: React.ReactNode;
}) {
  return (
    <HrLayoutContext.Provider value={value}>{children}</HrLayoutContext.Provider>
  );
}

export function useHrLayout() {
  return useContext(HrLayoutContext);
}
