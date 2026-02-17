'use client';

import { Search, Bell, Menu } from 'lucide-react';

type HeaderProps = {
  onToggleSidebar?: () => void;
};

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-white px-4 shadow-sm sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        )}

        <div className="hidden items-center gap-2 sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F5FFF] text-xs font-semibold tracking-tight text-white shadow-sm">
            XC
          </div>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Xtreme
            </p>
            <p className="text-sm font-semibold text-slate-900">Computer</p>
          </div>
        </div>
      </div>

      <div className="hidden flex-1 px-4 md:flex lg:px-0">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search companies, users, licences..."
            className="h-10 w-full rounded-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all focus:border-[#0F5FFF] focus:bg-white focus:ring-2 focus:ring-[#0F5FFF]/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 shadow-sm transition hover:bg-slate-200">
          <Bell className="h-4 w-4" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
            10
          </span>
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0F5FFF] to-[#4B8DFF] text-sm font-semibold text-white shadow-sm">
            JD
          </div>
          <div className="hidden text-left text-xs leading-tight sm:block">
            <p className="font-semibold text-slate-900">John Doe</p>
            <p className="text-[11px] text-slate-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}

