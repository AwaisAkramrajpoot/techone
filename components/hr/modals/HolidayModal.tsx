"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type HolidayFormValues = {
  holidayName: string;
  holidayCode: string;
  startDate: string;
  endDate: string;
  daysCount: string;
  isActive: boolean;
};

type HolidayModalProps = {
  isOpen: boolean;
  values: HolidayFormValues;
  onFieldChange: <K extends keyof HolidayFormValues>(
    field: K,
    value: HolidayFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function HolidayModal({
  isOpen,
  values,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: HolidayModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4">
      <div className="w-full max-w-4xl rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Holidays</h2>
          <button type="button" onClick={onClose} className="text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Holiday Name
            </label>
            <Input
              value={values.holidayName}
              onChange={(e) => onFieldChange("holidayName", e.target.value)}
              placeholder="Enter holiday name"
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Holiday Abbreviation
            </label>
            <Input
              value={values.holidayCode}
              onChange={(e) => onFieldChange("holidayCode", e.target.value)}
              placeholder="Enter holiday ID"
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Start Date
            </label>
            <Input
              type="date"
              value={values.startDate}
              onChange={(e) => onFieldChange("startDate", e.target.value)}
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              End Date
            </label>
            <Input
              type="date"
              value={values.endDate}
              onChange={(e) => onFieldChange("endDate", e.target.value)}
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Number of Days Count
            </label>
            <Input
              value={values.daysCount}
              onChange={(e) => onFieldChange("daysCount", e.target.value)}
              placeholder="Enter number of employees"
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Status
            </label>
            <button
              type="button"
              onClick={() => onFieldChange("isActive", !values.isActive)}
              className={`relative h-6 w-11 rounded-full transition ${
                values.isActive ? "bg-[#04499E]" : "bg-[#CBD5E1]"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                  values.isActive ? "left-5" : "left-0.5"
                }`}
              />
            </button>
            <span className="ml-2 text-sm text-[#374151]">
              {values.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button
            onClick={onSave}
            className="h-11 bg-[#04499E] text-white hover:bg-[#033E87]"
          >
            Save Holidays
          </Button>
          <Button
            variant="outline"
            onClick={onClear}
            className="h-11 border-[#8AAEDA] bg-[#8AAEDA] text-white hover:bg-[#7A9ECB]"
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
}
