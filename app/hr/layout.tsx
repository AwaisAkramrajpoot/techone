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
      <div className="flex bg-[#F7F8FB]">
        <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

        <div className="flex flex-1 flex-col transition-all duration-300 lg:ml-60">
          <Header onToggleSidebar={() => setMobileSidebarOpen((open) => !open)} />

          <main className="flex-1 px-4 py-4 sm:px-6 lg:px-8">
            <div className="rounded-md border border-[#E4E7EC] bg-white">
              <div className="flex flex-col gap-4 p-4 lg:flex-row">
                {showInnerSidebar && <HrInnerSidebar />}
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </HrLayoutProvider>
  );
}
