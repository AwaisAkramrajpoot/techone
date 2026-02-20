"use client";

import { useState } from "react";
import { Eye, EyeOff, Upload } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F7F8FB]">
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        setMobileOpen={setMobileSidebarOpen}
      />

      <div className="flex flex-1 flex-col lg:ml-60 transition-all duration-300">
        <Header
          onToggleSidebar={() => setMobileSidebarOpen((open) => !open)}
        />

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-5">
            <h1 className="text-4xl font-semibold text-black">Settings</h1>
            <p className="mt-1 text-[28px] text-[#6B7280]">
              Manage your account settings and preferences
            </p>
          </div>

          <section className="rounded-xl border border-[#DADDE3] bg-white p-6">
            <h2 className="text-4xl font-semibold text-black">
              Profile Information
            </h2>
            <p className="mt-1 text-[26px] text-[#6B7280]">
              Update your personal details
            </p>

            <div className="mt-5 flex flex-col gap-4 border-b border-[#E5E7EB] pb-6">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#254C7D] text-3xl font-medium text-white">
                  SS
                </div>
                <div>
                  <Button
                    variant="outline"
                    className="h-10 border-[#D1D5DB] bg-white px-4 text-base text-black hover:bg-[#F9FAFB]"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Change Photo
                  </Button>
                  <p className="mt-2 text-sm text-[#6B7280]">
                    JPG, PNG or GIF. Max size 2MB
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-black">Role:</span>
                <span className="rounded-full bg-[#E9EEF5] px-3 py-1 text-base text-[#1F4B7B]">
                  Event Organizer
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <Label className="text-lg text-black">
                  Username <span className="text-red-500">*</span>
                </Label>
                <Input
                  defaultValue="sead"
                  className="mt-2 h-12 border-[#D1D5DB] bg-white text-lg"
                />
              </div>
              <div>
                <Label className="text-lg text-black">Email</Label>
                <Input
                  defaultValue="wsds@gmail.com"
                  disabled
                  className="mt-2 h-12 border-[#D1D5DB] bg-[#F8FAFC] text-lg text-[#6B7280]"
                />
                <p className="mt-2 text-sm text-[#6B7280]">
                  Email cannot be changed
                </p>
              </div>
              <div>
                <Label className="text-lg text-black">First Name</Label>
                <Input
                  defaultValue="sad"
                  className="mt-2 h-12 border-[#D1D5DB] bg-white text-lg"
                />
              </div>
              <div>
                <Label className="text-lg text-black">Last Name</Label>
                <Input
                  defaultValue="sad"
                  className="mt-2 h-12 border-[#D1D5DB] bg-white text-lg"
                />
              </div>
              <div className="md:col-span-1">
                <Label className="text-lg text-black">Phone</Label>
                <Input
                  defaultValue="+2348012345678"
                  className="mt-2 h-12 border-[#D1D5DB] bg-white text-lg"
                />
              </div>
            </div>

            <Button className="mt-6 h-11 bg-[#04499E] px-5 text-base text-white hover:bg-[#033E87]">
              Save Changes
            </Button>
          </section>

          <section className="mt-6 rounded-xl border border-[#DADDE3] bg-white p-6">
            <h2 className="text-4xl font-semibold text-black">Security</h2>
            <p className="mt-1 text-[26px] text-[#6B7280]">
              Manage your password and security settings
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <Label className="text-lg text-black">Current Password</Label>
                <div className="relative mt-2">
                  <Input
                    type={showCurrentPassword ? "text" : "password"}
                    className="h-12 border-[#D1D5DB] pr-10 text-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label className="text-lg text-black">New Password</Label>
                <div className="relative mt-2">
                  <Input
                    type={showNewPassword ? "text" : "password"}
                    className="h-12 border-[#D1D5DB] pr-10 text-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label className="text-lg text-black">Confirm New Password</Label>
                <div className="relative mt-2">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    className="h-12 border-[#D1D5DB] pr-10 text-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Button className="mt-6 h-11 bg-[#04499E] px-5 text-base text-white hover:bg-[#033E87]">
              Update Password
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
}
