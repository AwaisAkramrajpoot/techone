"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { Upload, X } from "lucide-react";

const getDigitsValue = (value: string) => value.replace(/\D/g, "");

export type LeaveDetailsFormValues = {
  department: string;
  employee: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  days: string;
  reason: string;
  contact: string;
  handoverTo: string;
  attachmentName: string;
};

type LeaveDetailsModalProps = {
  isOpen: boolean;
  values: LeaveDetailsFormValues;
  errors: Partial<Record<keyof LeaveDetailsFormValues, string>>;
  onFieldChange: <K extends keyof LeaveDetailsFormValues>(
    field: K,
    value: LeaveDetailsFormValues[K]
  ) => void;
  onClose: () => void;
  onSave: () => void;
  onClear: () => void;
};

export function LeaveDetailsModal({
  isOpen,
  values,
  errors,
  onFieldChange,
  onClose,
  onSave,
  onClear,
}: LeaveDetailsModalProps) {
  const attachmentInputRef = useRef<HTMLInputElement>(null);
  const departmentHeads: Record<string, string[]> = {
    Engineering: ["Kaleem"],
    Operations: ["Aleem"],
    Finance: ["Amir"],
  };
  const headOptions = values.department ? departmentHeads[values.department] ?? [] : [];
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] [&_input::placeholder]:text-[#CCCCCC] [&_textarea::placeholder]:text-[#CCCCCC] [&_select]:w-full [&_select]:min-w-0 [&_select]:max-w-full [&_select]:pr-9 [&_select]:overflow-hidden [&_select]:text-ellipsis [&_select]:whitespace-nowrap [&_option]:max-w-full [&_option]:whitespace-normal [&_option]:break-words max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#1F2937]">Apply for Leave</h2>
          <button type="button" onClick={onClose} className="text-[#111827]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
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
              <option value="">Select Department</option>
              <option value="Engineering">Engineering</option>
              <option value="Operations">Operations</option>
              <option value="Finance">Finance</option>
            </select>
            {errors.department ? (
              <p className="mt-1 text-xs text-red-500">{errors.department}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Employee
            </label>
            <select
              value={values.employee}
              onChange={(e) => onFieldChange("employee", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.employee ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select Employee</option>
              <option value="Kaleem">Kaleem</option>
              <option value="Aleem">Aleem</option>
              <option value="Amir">Amir</option>
            </select>
            {errors.employee ? (
              <p className="mt-1 text-xs text-red-500">{errors.employee}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Leave Type
            </label>
            <select
              value={values.leaveType}
              onChange={(e) => onFieldChange("leaveType", e.target.value)}
              className={`h-11 w-full rounded-md border px-3 text-sm outline-none focus:border-[#04499E] ${
                errors.leaveType ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              <option value="">Select Leave Type</option>
              <option value="Annual Leave">Annual Leave</option>
              <option value="Sick Leave">Sick Leave</option>
            </select>
            {errors.leaveType ? (
              <p className="mt-1 text-xs text-red-500">{errors.leaveType}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Start Date
            </label>
            <Input
              type="date"
              value={values.startDate}
              onChange={(e) => onFieldChange("startDate", e.target.value)}
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.startDate ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.startDate ? (
              <p className="mt-1 text-xs text-red-500">{errors.startDate}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              End Date
            </label>
            <Input
              type="date"
              value={values.endDate}
              onChange={(e) => onFieldChange("endDate", e.target.value)}
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.endDate ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.endDate ? (
              <p className="mt-1 text-xs text-red-500">{errors.endDate}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Duration (Days)
            </label>
            <Input
              value={values.days}
              onChange={(e) => onFieldChange("days", getDigitsValue(e.target.value))}
              placeholder="Enter Days"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.days ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.days ? (
              <p className="mt-1 text-xs text-red-500">{errors.days}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Reason For Leave
            </label>
            <Input
              value={values.reason}
              onChange={(e) => onFieldChange("reason", e.target.value)}
              placeholder="Enter description for this leave type"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.reason ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.reason ? (
              <p className="mt-1 text-xs text-red-500">{errors.reason}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Contact information During Leave
            </label>
            <Input
              value={values.contact}
              onChange={(e) => onFieldChange("contact", getDigitsValue(e.target.value))}
              placeholder="Phone Number"
              className={`h-11 focus-visible:ring-[#04499E] ${
                errors.contact ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            />
            {errors.contact ? (
              <p className="mt-1 text-xs text-red-500">{errors.contact}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Handover To (Optional)
            </label>
            <select
              value={values.handoverTo}
              onChange={(e) => onFieldChange("handoverTo", e.target.value)}
              disabled={!values.department}
              className="h-11 w-full rounded-md border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#04499E]"
            >
              <option value="">
                {values.department ? "Select Department Head" : "Select Department First"}
              </option>
              {headOptions.map((head) => (
                <option key={head} value={head}>
                  {head} (Department Head)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#374151]">
              Attachment
            </label>
            <input
              ref={attachmentInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="hidden"
              onChange={(e) =>
                onFieldChange("attachmentName", e.target.files?.[0]?.name ?? "")
              }
            />
            <button
              type="button"
              onClick={() => attachmentInputRef.current?.click()}
              className="flex h-24 w-full flex-col items-center justify-center rounded-md border border-dashed border-[#D0D5DD] text-[#98A2B3]"
            >
              <Upload className="h-4 w-4" />
              <span className="mt-1 text-xs">
                {values.attachmentName || "Drag & drop receipt or click to upload"}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Button
            onClick={onSave}
            className="h-11 bg-[#04499E] text-white hover:bg-[#033E87]"
          >
            Save Leave Request
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





