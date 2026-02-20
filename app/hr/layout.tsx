"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { HrInnerSidebar } from "@/components/hr/HrInnerSidebar";
import { HrLayoutProvider } from "@/components/hr/HrLayoutContext";

export default function HrLayout({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showInnerSidebar, setShowInnerSidebar] = useState(true);

  return (
    <HrLayoutProvider value={{ showInnerSidebar, setShowInnerSidebar }}>
      <div className="flex overflow-x-hidden bg-[#F7F8FB]">
        <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

        <div className="flex min-w-0 flex-1 flex-col transition-all duration-300 lg:ml-60">
          <Header onToggleSidebar={() => setMobileSidebarOpen((open) => !open)} />

          <main className="min-w-0 flex-1 px-4 py-4 sm:px-6 lg:px-2">
            <div className="   ">
              <div className="flex min-w-0 flex-col gap-4 p-4 lg:flex-row">
                {showInnerSidebar && <HrInnerSidebar />}
                <div className="min-w-0 flex-1">{children}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </HrLayoutProvider>
  );
}
