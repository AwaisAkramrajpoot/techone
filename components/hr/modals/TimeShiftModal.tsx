"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type TimeShiftFormValues = {
  shiftName: string;
  shiftCode: string;
  startTime: string;
  endTime: string;
  lateArrival: string;
  breakDuration: string;
  applyDay: string;
};

type TimeShiftModalProps = {
  isOpen: boolean;
  values: TimeShiftFormValues;
  errors: Partial<Record<keyof TimeShiftFormValues, string>>;
  onFieldChange: <K extends keyof TimeShiftFormValues>(
    field: K,
    value: TimeShiftFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function TimeShiftModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: TimeShiftModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Shift</h2>
          <button type="button" onClick={onClose} className="text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Shift Name
            </label>
            <Input
              value={values.shiftName}
              onChange={(e) => onFieldChange("shiftName", e.target.value)}
              placeholder="e.g. Morning Shift, Night Shift"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.shiftName ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.shiftName ? (
              <p className="mt-1 text-xs text-red-500">{errors.shiftName}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Shift Code
            </label>
            <Input
              value={values.shiftCode}
              onChange={(e) => onFieldChange("shiftCode", e.target.value)}
              placeholder="e.g. MS, NS, ES"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.shiftCode ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.shiftCode ? (
              <p className="mt-1 text-xs text-red-500">{errors.shiftCode}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Shift Timing
            </label>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <Input
                  type="time"
                  value={values.startTime}
                  onChange={(e) => onFieldChange("startTime", e.target.value)}
                  className={`h-11 focus-visible:ring-[#04499E] ${
                    errors.startTime ? "border-red-500" : "border-[#E5E7EB]"
                  }`}
                />
                {errors.startTime ? (
                  <p className="mt-1 text-xs text-red-500">{errors.startTime}</p>
                ) : null}
              </div>
              <div>
                <Input
                  type="time"
                  value={values.endTime}
                  onChange={(e) => onFieldChange("endTime", e.target.value)}
                  className={`h-11 focus-visible:ring-[#04499E] ${
                    errors.endTime ? "border-red-500" : "border-[#E5E7EB]"
                  }`}
                />
                {errors.endTime ? (
                  <p className="mt-1 text-xs text-red-500">{errors.endTime}</p>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Late Arrival Time
            </label>
            <Input
              value={values.lateArrival}
              onChange={(e) => onFieldChange("lateArrival", e.target.value)}
              placeholder="e.g. 60 minutes"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.lateArrival ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.lateArrival ? (
              <p className="mt-1 text-xs text-red-500">{errors.lateArrival}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Break Duration (Minutes)
            </label>
            <Input
              value={values.breakDuration}
              onChange={(e) => onFieldChange("breakDuration", e.target.value)}
              placeholder="e.g. 60"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.breakDuration ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.breakDuration ? (
              <p className="mt-1 text-xs text-red-500">{errors.breakDuration}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Apply Day
            </label>
            <select
              value={values.applyDay}
              onChange={(e) => onFieldChange("applyDay", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.applyDay ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select Days</option>
              <option value="Monday-Friday">Monday-Friday</option>
              <option value="Monday-Saturday">Monday-Saturday</option>
              <option value="All Days">All Days</option>
            </select>
            {errors.applyDay ? (
              <p className="mt-1 text-xs text-red-500">{errors.applyDay}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button
            onClick={onSave}
            className="h-11 bg-[#04499E] text-white hover:bg-[#033E87]"
          >
            Add Shift
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

