"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export type DesignationFormValues = {
  company: string;
  branch: string;
  department: string;
  designationName: string;
  isActive: boolean;
};

type DesignationModalProps = {
  isOpen: boolean;
  values: DesignationFormValues;
  errors: Partial<Record<keyof DesignationFormValues, string>>;
  onFieldChange: <K extends keyof DesignationFormValues>(
    field: K,
    value: DesignationFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
};

export function DesignationModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
}: DesignationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] [&_input::placeholder]:text-[#CCCCCC] [&_textarea::placeholder]:text-[#CCCCCC] [&_select]:w-full [&_select]:min-w-0 [&_select]:max-w-full [&_select]:pr-9 [&_select]:overflow-hidden [&_select]:text-ellipsis [&_select]:whitespace-nowrap [&_option]:max-w-full [&_option]:whitespace-normal [&_option]:break-words max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">
            Add New Designation
          </h2>
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
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.company ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select company</option>
              <option value="Tech Solutions Pvt Ltd">Tech Solutions Pvt Ltd</option>
              <option value="Global Enterprises">Global Enterprises</option>
            </select>
            {errors.company ? (
              <p className="mt-1 text-xs text-red-500">{errors.company}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Branch
            </label>
            <select
              value={values.branch}
              onChange={(e) => onFieldChange("branch", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.branch ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select branch</option>
              <option value="Tech Solutions - Main">Tech Solutions - Main</option>
              <option value="Tech Solutions - East">Tech Solutions - East</option>
              <option value="Global Enterprise">Global Enterprise</option>
            </select>
            {errors.branch ? (
              <p className="mt-1 text-xs text-red-500">{errors.branch}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Department
            </label>
            <select
              value={values.department}
              onChange={(e) => onFieldChange("department", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.department ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select department</option>
              <option value="Human Resource">Human Resource</option>
              <option value="Finance">Finance</option>
              <option value="Operations">Operations</option>
            </select>
            {errors.department ? (
              <p className="mt-1 text-xs text-red-500">{errors.department}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Designation Name
            </label>
            <Input
              value={values.designationName}
              onChange={(e) => onFieldChange("designationName", e.target.value)}
              placeholder="Enter designation name"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.designationName ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.designationName ? (
              <p className="mt-1 text-xs text-red-500">{errors.designationName}</p>
            ) : null}
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
            Save
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="h-11 border-[#8AAEDA] bg-[#8AAEDA] text-white hover:bg-[#7A9ECB]"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}



