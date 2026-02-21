"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
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
  const startTimeRef = useRef<HTMLInputElement>(null);
  const endTimeRef = useRef<HTMLInputElement>(null);
  const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const selectedDays = values.applyDay
    ? values.applyDay.split(",").map((day) => day.trim()).filter(Boolean)
    : [];

  const toggleDay = (day: string) => {
    const exists = selectedDays.includes(day);
    const nextDays = exists
      ? selectedDays.filter((selectedDay) => selectedDay !== day)
      : [...selectedDays, day];

    onFieldChange("applyDay", nextDays.join(", "));
  };

  const openTimePicker = (input: HTMLInputElement | null) => {
    if (!input) return;
    if ("showPicker" in input) {
      input.showPicker();
      return;
    }
    input.focus();
    input.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4 py-6">
      <div className="max-h-[calc(100vh-3rem)] w-full font-[poppins] [&_input::placeholder]:text-[#CCCCCC] [&_textarea::placeholder]:text-[#CCCCCC] [&_select]:w-full [&_select]:min-w-0 [&_select]:max-w-full [&_select]:pr-9 [&_select]:overflow-hidden [&_select]:text-ellipsis [&_select]:whitespace-nowrap [&_option]:max-w-full [&_option]:whitespace-normal [&_option]:break-words max-w-3xl overflow-y-auto rounded-md bg-white p-4 shadow-lg sm:p-6">
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
                <div className="relative">
                  <Input
                    ref={startTimeRef}
                    type="time"
                    value={values.startTime}
                    onChange={(e) => onFieldChange("startTime", e.target.value)}
                    className={`time-input-single-icon h-11 pr-10 focus-visible:ring-[#04499E] ${
                      errors.startTime ? "border-red-500" : "border-[#E5E7EB]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => openTimePicker(startTimeRef.current)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    aria-label="Open start time picker"
                  >
                    <Image src="/svgs/timeclock.svg" alt="" width={16} height={16} />
                  </button>
                </div>
                {errors.startTime ? (
                  <p className="mt-1 text-xs text-red-500">{errors.startTime}</p>
                ) : null}
              </div>
              <div>
                <div className="relative">
                  <Input
                    ref={endTimeRef}
                    type="time"
                    value={values.endTime}
                    onChange={(e) => onFieldChange("endTime", e.target.value)}
                    className={`time-input-single-icon h-11 pr-10 focus-visible:ring-[#04499E] ${
                      errors.endTime ? "border-red-500" : "border-[#E5E7EB]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => openTimePicker(endTimeRef.current)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    aria-label="Open end time picker"
                  >
                    <Image src="/svgs/timeclock.svg" alt="" width={16} height={16} />
                  </button>
                </div>
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
              Apply Days
            </label>
            <div
              className={`grid grid-cols-2 gap-2 rounded-md border p-3 sm:grid-cols-3 ${
                errors.applyDay ? "border-red-500" : "border-[#E5E7EB]"
              }`}
            >
              {dayOptions.map((day) => (
                <label key={day} className="inline-flex items-center gap-2 text-sm text-[#374151]">
                  <input
                    type="checkbox"
                    checked={selectedDays.includes(day)}
                    onChange={() => toggleDay(day)}
                    className="h-4 w-4 rounded border-[#D0D5DD] accent-[#04499E]"
                  />
                  {day}
                </label>
              ))}
            </div>
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





