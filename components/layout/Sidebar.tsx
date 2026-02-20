"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "/svgs/dashboard.svg",
  },
  {
    title: "Companies",
    href: "/users",
    icon: "/svgs/company.svg",
  },
  {
    title: "Branch",
    href: "/powerstation",
    icon: "/svgs/branch.svg",
  },
  {
    title: "HR",
    href: "/hr/department",
    icon: "/svgs/HR.svg",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "/svgs/user.svg",
  },
];

type SidebarProps = {
  mobileOpen?: boolean;
  setMobileOpen?: (open: boolean) => void;
};

export function Sidebar({ mobileOpen, setMobileOpen }: SidebarProps) {
  const pathname = usePathname();
  const [internalOpen, setInternalOpen] = useState(false);

  const isOpen = mobileOpen ?? internalOpen;
  const setIsOpen = setMobileOpen ?? setInternalOpen;

  return (
    <>
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen border-r border-[#E2E5EA] bg-[#FAFAFA] transition-all duration-300",
          "w-60",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-between border-b border-gray-200 bg-[#FAFAFA] px-4">
            <Link href="/dashboard" className="flex items-center">
              <Image
                src="/images/logocompany.png"
                alt="Company Logo"
                width={130}
                height={36}
                className="flex items-center justify-center ml-7"
                priority
              />
            </Link>
          </div> 
            <div className="text-[15px]  px-3 mt-7 font-semibold uppercase text-[#5B5F62]">
              Admin
            </div>
        
          <nav className="flex-1 space-y-1 overflow-y-auto px-2 py-4">
            {menuItems.map((item) => {
              const isActive =
                item.title === "HR"
                  ? pathname.startsWith("/hr")
                  : pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                    isActive
                      ? "bg-[#04499E] text-white shadow-sm hover:bg-[#04499E]"
                      : "text-black hover:bg-[#E9EEF5] hover:text-black"
                  )}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={16}
                    height={16}
                    className={cn(
                      "h-4 w-4 shrink-0",
                      isActive && "brightness-0 invert"
                    )}
                  />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
