"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hrTabs } from "@/components/hr/hr-tabs";

export function HrInnerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 rounded-md border border-[#E6EAF0] bg-[#FBFCFE] p-2 font-[poppins] lg:w-56">
      <div className="space-y-1">
        {hrTabs.map((tab) => {
          const isActive = pathname === `/hr/${tab.slug}`;

          return (
            <Link
              key={tab.slug}
              href={`/hr/${tab.slug}`}
              className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-xs font-medium transition ${
                isActive
                  ? "bg-[#04499E] text-white"
                  : "text-[#334155] hover:bg-[#EAF0FF]"
              }`}
            >
              <Image
                src={tab.icon}
                alt={tab.label}
                width={14}
                height={14}
                className={`h-3.5 w-3.5 shrink-0 brightness-0 ${isActive ? "invert" : ""}`}
              />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
