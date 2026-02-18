"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type GradeFormValues = {
  company: string;
  branch: string;
  department: string;
  designation: string;
  gradeName: string;
  employees: string;
};

type GradeModalProps = {
  isOpen: boolean;
  values: GradeFormValues;
  onFieldChange: <K extends keyof GradeFormValues>(
    field: K,
    value: GradeFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function GradeModal({
  isOpen,
  values,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: GradeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4">
      <div className="w-full max-w-4xl rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Add New Grade</h2>
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
              <option value="">Select branch</option>
              <option value="Tech Solutions - Main">Tech Solutions - Main</option>
              <option value="Tech Solutions - East">Tech Solutions - East</option>
              <option value="Global Enterprise">Global Enterprise</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Department Name
            </label>
            <select
              value={values.department}
              onChange={(e) => onFieldChange("department", e.target.value)}
              className="h-11 w-full rounded-md border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#04499E]"
            >
              <option value="">Select Department</option>
              <option value="Engineering">Engineering</option>
              <option value="Operations">Operations</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Designation
            </label>
            <select
              value={values.designation}
              onChange={(e) => onFieldChange("designation", e.target.value)}
              className="h-11 w-full rounded-md border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#04499E]"
            >
              <option value="">Select designation</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Operations Manager">Operations Manager</option>
              <option value="Finance Analyst">Finance Analyst</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Grade Name
            </label>
            <Input
              value={values.gradeName}
              onChange={(e) => onFieldChange("gradeName", e.target.value)}
              placeholder="Enter grade name"
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Number of Employees
            </label>
            <Input
              value={values.employees}
              onChange={(e) => onFieldChange("employees", e.target.value)}
              placeholder="Enter number of employees"
              className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button
            onClick={onSave}
            className="h-11 bg-[#04499E] text-white hover:bg-[#033E87]"
          >
            Add Grade
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
