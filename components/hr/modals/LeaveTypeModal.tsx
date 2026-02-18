"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type LeaveTypeFormValues = {
  company: string;
  branch: string;
  leaveType: string;
  abbreviation: string;
  description: string;
  maxDays: string;
};

type LeaveTypeModalProps = {
  isOpen: boolean;
  values: LeaveTypeFormValues;
  onFieldChange: <K extends keyof LeaveTypeFormValues>(
    field: K,
    value: LeaveTypeFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function LeaveTypeModal({
  isOpen,
  values,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: LeaveTypeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full max-w-4xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Leave Type</h2>
          <button type="button" onClick={onClose} className="text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Company
            </label>
            <select
              value={values.company}
              onChange={(e) => onFieldChange("company", e.target.value)}
              className="h-11 w-full rounded-md border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#04499E]"
            >
              <option value="">Select company</option>
              <option value="Tech Solutions Pvt Ltd">Tech Solutions Pvt Ltd</option>
              <option value="Global Enterprises">Global Enterprises</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Branch
            </label>
            <select
              value={values.branch}
              onChange={(e) => onFieldChange("branch", e.target.value)}
              className="h-11 w-full rounded-md border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#04499E]"
            >
              <option value="">Select Branch</option>
              <option value="Tech Solutions - Main">Tech Solutions - Main</option>
              <option value="Tech Solutions - East">Tech Solutions - East</option>
              <option value="Global Enterprise">Global Enterprise</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Leave type
            </label>
            <Input
              value={values.leaveType}
              onChange={(e) => onFieldChange("leaveType", e.target.value)}
              placeholder="Enter leave type"
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Abbreviation
            </label>
            <Input
              value={values.abbreviation}
              onChange={(e) => onFieldChange("abbreviation", e.target.value)}
              placeholder="e.g., AL for Annual Leave"
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Description
            </label>
            <Input
              value={values.description}
              onChange={(e) => onFieldChange("description", e.target.value)}
              placeholder="Enter description for this leave type"
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Maximum Days Per Year
            </label>
            <Input
              value={values.maxDays}
              onChange={(e) => onFieldChange("maxDays", e.target.value)}
              placeholder="Enter maximum days allowed"
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button
            onClick={onSave}
            className="h-11 bg-[#04499E] text-white hover:bg-[#033E87]"
          >
            Save Leave Type
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
