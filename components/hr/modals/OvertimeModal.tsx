"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type OvertimeFormValues = {
  employee: string;
  startDate: string;
  startTime: string;
  endTime: string;
  overtimeType: string;
  hourlyRate: string;
  reason: string;
  description: string;
};

type OvertimeModalProps = {
  isOpen: boolean;
  values: OvertimeFormValues;
  errors: Partial<Record<keyof OvertimeFormValues, string>>;
  onFieldChange: <K extends keyof OvertimeFormValues>(
    field: K,
    value: OvertimeFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function OvertimeModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: OvertimeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Overtime Request</h2>
          <button type="button" onClick={onClose} className="text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Employee</label>
            <select
              value={values.employee}
              onChange={(e) => onFieldChange("employee", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.employee ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select employee</option>
              <option value="Kaleem">Kaleem</option>
              <option value="Amir">Amir</option>
              <option value="waseem">waseem</option>
            </select>
            {errors.employee ? <p className="mt-1 text-xs text-red-500">{errors.employee}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Start Date</label>
            <Input
              type="date"
              value={values.startDate}
              onChange={(e) => onFieldChange("startDate", e.target.value)}
              className={`h-11 ${errors.startDate ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.startDate ? <p className="mt-1 text-xs text-red-500">{errors.startDate}</p> : null}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#374151]">Start Time</label>
              <Input
                type="time"
                value={values.startTime}
                onChange={(e) => onFieldChange("startTime", e.target.value)}
                className={`h-11 ${errors.startTime ? "border-red-500" : "border-[#E5E7EB]"}`}
              />
              {errors.startTime ? <p className="mt-1 text-xs text-red-500">{errors.startTime}</p> : null}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[#374151]">End Time</label>
              <Input
                type="time"
                value={values.endTime}
                onChange={(e) => onFieldChange("endTime", e.target.value)}
                className={`h-11 ${errors.endTime ? "border-red-500" : "border-[#E5E7EB]"}`}
              />
              {errors.endTime ? <p className="mt-1 text-xs text-red-500">{errors.endTime}</p> : null}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Overtime Type</label>
            <select
              value={values.overtimeType}
              onChange={(e) => onFieldChange("overtimeType", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.overtimeType ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select overtime type</option>
              <option value="Weekday (1.5x rate)">Weekday (1.5x rate)</option>
              <option value="Weekend (2x rate)">Weekend (2x rate)</option>
            </select>
            {errors.overtimeType ? (
              <p className="mt-1 text-xs text-red-500">{errors.overtimeType}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Hourly Rate</label>
            <Input
              value={values.hourlyRate}
              onChange={(e) => onFieldChange("hourlyRate", e.target.value)}
              placeholder="Enter hourly rate"
              className={`h-11 ${errors.hourlyRate ? "border-red-500" : "border-[#E5E7EB]"}`}
            />
            {errors.hourlyRate ? <p className="mt-1 text-xs text-red-500">{errors.hourlyRate}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Reason for Overtime</label>
            <select
              value={values.reason}
              onChange={(e) => onFieldChange("reason", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.reason ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select reason</option>
              <option value="Project deadline">Project deadline</option>
              <option value="Client delivery">Client delivery</option>
              <option value="System maintenance">System maintenance</option>
            </select>
            {errors.reason ? <p className="mt-1 text-xs text-red-500">{errors.reason}</p> : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">Description</label>
            <textarea
              value={values.description}
              onChange={(e) => onFieldChange("description", e.target.value)}
              placeholder="Provide details about the overtime work"
              className={`min-h-[84px] w-full rounded-md border p-3 text-sm outline-none focus:border-[#04499E] ${
                errors.description ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.description ? (
              <p className="mt-1 text-xs text-red-500">{errors.description}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button onClick={onSave} className="h-11 bg-[#04499E] text-white hover:bg-[#033E87]">
            Submit Request
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

