"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = ["Features", "Pricing", "Guarantee", "FAQ", "Contact"];

export function LandingNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-[#B9D8E5] bg-[#102A3DEB] px-4 py-3 shadow-[0_10px_30px_rgba(8,34,49,0.25)] backdrop-blur-md sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F766E] to-[#0891B2] text-xl font-semibold text-white">
            H
          </div>
          <span className="text-2xl font-semibold leading-none text-white">HRMS</span>
          <span className="ml-2 hidden rounded-lg bg-[#194864] px-3 py-1 text-xs font-semibold text-[#D6F3FF] md:inline">
            Built for Growing Teams
          </span>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link} href="#" className="text-sm font-medium text-[#B7C7DE] transition hover:text-white">
              {link}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link href="/login" className="text-sm font-semibold text-[#C2D5EF] transition hover:text-white">
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0891B2] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-95"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-[#335377] p-2 text-[#D7E8FF] md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
          <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[#B9D8E5] bg-[#102A3DEB] px-4 py-4 shadow-[0_10px_30px_rgba(8,34,49,0.25)] backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="rounded-lg px-2 py-1 text-sm font-medium text-[#B7C7DE] transition hover:bg-[#1E3252] hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-[#C2D5EF]">
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0891B2] px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
