'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Bell, Menu } from 'lucide-react';

type HeaderProps = {
  onToggleSidebar?: () => void;
};

export function Header({ onToggleSidebar }: HeaderProps) {
  const router = useRouter();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 sm:h-20 items-center justify-between border-b bg-white px-3 sm:px-4 shadow-sm lg:px-8">
      <div className="flex items-center gap-2 sm:gap-3">
        {onToggleSidebar && (
          <button
            type="button"
            onClick={onToggleSidebar}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        )} 
      </div>

      <div className="hidden flex-1 px-4 md:flex lg:px-0">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search companies, users, licences..."
            className="h-10 w-full rounded-sm border border-slate-100 bg-[#F5F6FA] pl-10 pr-4 text-sm text-slate-700 outline-none transition-all focus:border-[#0F5FFF] focus:bg-white focus:ring-2 focus:ring-[#0F5FFF]/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#F5F6FA] text-slate-600 shadow-sm transition hover:bg-slate-200">
          <Bell className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-red-500 text-[9px] sm:text-[10px] font-semibold text-white">
            10
          </span>
        </button>
        <div className="relative" ref={profileMenuRef}>
          <button
            type="button"
            onClick={() => setProfileMenuOpen((prev) => !prev)}
            className="flex items-center gap-1.5 rounded-md p-1 sm:gap-2 hover:bg-slate-100"
          >
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0F5FFF] to-[#4B8DFF] text-xs sm:text-sm font-semibold text-white shadow-sm">
              JD
            </div>
            <div className="hidden text-left text-xs leading-tight sm:block">
              <p className="font-semibold text-slate-900">John Doe</p>
              <p className="text-[11px] text-slate-500">Admin</p>
            </div>
          </button>

          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-md border border-slate-200 bg-white py-1 shadow-lg">
              <button
                type="button"
                onClick={() => {
                  setProfileMenuOpen(false);
                  router.push('/settings');
                }}
                className="w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
              >
                Profile
              </button>
              <button
                type="button"
                onClick={() => {
                  setProfileMenuOpen(false);
                  router.push('/login');
                }}
                className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
