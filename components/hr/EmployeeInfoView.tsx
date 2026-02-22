"use client";

import Image from "next/image";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, ArrowLeft, Upload, FileUp, Download } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  employeeInfoDummyRows,
  type EmployeeInfoRow,
} from "@/components/hr/data/employee-info-data";
import { EmployeeRegistrationModal } from "@/components/hr/modals/EmployeeRegistrationModal";

export function EmployeeInfoView() {
  const hrLayout = useHrLayout();
  const bulkUploadInputRef = useRef<HTMLInputElement>(null);
  const importInputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<EmployeeInfoRow[]>([]);
  const [employeeCardPreview, setEmployeeCardPreview] = useState<{
    name: string;
    designation: string;
    picture: string;
  } | null>(null);
  const [search, setSearch] = useState("");

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) =>
        row.name.toLowerCase().includes(term) ||
        row.fatherName.toLowerCase().includes(term) ||
        row.cnic.toLowerCase().includes(term) ||
        row.phone.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const handleSubmitEmployee = (payload: {
    name: string;
    fatherName: string;
    cnic: string;
    address: string;
    phone: string;
    designation: string;
    picture: string;
  }) => {
    const seed = rows.length === 0 ? employeeInfoDummyRows : [];
    const nextId = [...seed, ...rows].length + 1;
    const newRow: EmployeeInfoRow = {
      id: nextId,
      name: payload.name,
      fatherName: payload.fatherName,
      cnic: payload.cnic,
      address: payload.address,
      phone: payload.phone,
      designation: payload.designation,
      picture: payload.picture,
    };

    setRows([...seed, ...rows, newRow]);
    setEmployeeCardPreview({
      name: payload.name,
      designation: payload.designation || "Designation",
      picture: payload.picture,
    });
    setIsModalOpen(false);
    hrLayout?.setShowInnerSidebar(false);
  };

  useEffect(() => {
    hrLayout?.setShowInnerSidebar(true);
  }, []);

  return (
    <section className="min-h-[560px] flex-1 font-[poppins]">
      {hrLayout && !hrLayout.showInnerSidebar && (
        <button
          type="button"
          onClick={() => hrLayout.setShowInnerSidebar(true)}
          className="mb-2 inline-flex items-center text-[#6B7280] hover:text-[#374151]"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}

      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[#0C4BA7] font-[inter]">Employee Info</h1>
          <p className="mt-1 max-w-[560px] text-sm leading-6 text-[#667085]">
            Welcome back! Here&apos;s what&apos;s happening  at your workplace today.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <input
            ref={bulkUploadInputRef}
            type="file"
            accept=".xlsx,.xls,.csv"
            className="hidden"
          />
          <input
            ref={importInputRef}
            type="file"
            accept=".xlsx,.xls,.csv"
            className="hidden"
          />
          <Button
            className="h-9 px-3 text-sm bg-[#04499E] hover:bg-[#033E87] text-white"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Employee
          </Button>
          <Button
            className="h-9 px-3 text-sm bg-[#04499E] hover:bg-[#033E87] text-white gap-1"
          >
            <Image src="/svgs/report.svg" alt="" width={18} height={18} />
            Report
          </Button>
          <Button
            type="button"
            className="h-9 px-3 text-sm bg-[#04499E] hover:bg-[#033E87] text-white gap-1"
            onClick={() => bulkUploadInputRef.current?.click()}
          >
            <Upload className="h-3.5 w-3.5" />
            Bulk Upload
          </Button>
          <Button
            type="button"
            className="h-9 px-3 text-sm bg-[#04499E] hover:bg-[#033E87] text-white gap-1"
            onClick={() => importInputRef.current?.click()}
          >
            <FileUp className="h-3.5 w-3.5" />
            Import
          </Button>
          <Button
            className="h-9 px-3 text-sm bg-[#04499E] hover:bg-[#033E87] text-white gap-1"
          >
            <Image src="/svgs/export.svg" alt="" width={18} height={18} />
            Export
          </Button>
          <a
            href="/templates/employee-bulk-template.csv"
            download
            className="inline-flex h-9 items-center gap-1 rounded-md bg-[#04499E] px-3 text-sm text-white hover:bg-[#033E87]"
          >
            <Download className="h-3.5 w-3.5" />
            Sample
          </a>
        </div>
      </div>

      <div className="mt-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies, user, licences..."
            className="h-11 border-[#EAECF0] bg-[#F8FAFC] pl-9"
          />
        </div>
      </div>

      <div className="mt-5 rounded-md border border-[#D1D5DB] bg-white p-4">
        <h3 className="text-base font-semibold text-[#1F2937]">Employee Card</h3>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#04499E] text-sm font-semibold text-white">
            {(employeeCardPreview?.name || "E")
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0]?.toUpperCase())
              .join("") || "E"}
          </div>
          <div>
            <p className="text-sm font-medium text-[#111827]">
              {employeeCardPreview?.name || "Employee Name"}
            </p>
            <p className="text-xs text-[#6B7280]">
              {employeeCardPreview?.designation || "Designation"}
            </p>
            <p className="text-xs text-[#6B7280]">
              {employeeCardPreview?.picture
                ? `Image: ${employeeCardPreview.picture}`
                : "No image selected"}
            </p>
          </div>
        </div>
        <Button
          type="button"
          className="mt-3 h-9 bg-[#04499E] text-white hover:bg-[#033E87]"
          disabled={!employeeCardPreview}
        >
          Create Employee Card
        </Button>
      </div>

      {filteredRows.length === 0 ? (
        <div className="flex min-h-[360px] items-center justify-center">
          <div className="text-center">
                        <Image
              src="/svgs/warning.svg"
              alt=""
              width={88}
              height={88}
              className="mx-auto"
            />
            <p className="mt-2 text-2xl font-sm text-[#D0D5DD]">
              Add Employee First!
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-[#EEF1F6] bg-white p-3">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#111827]">
                  <th className="px-3 py-3 font-semibold">Name</th>
                  <th className="px-3 py-3 font-semibold">Father Name</th>
                  <th className="px-3 py-3 font-semibold">CNIC</th>
                  <th className="px-3 py-3 font-semibold">Address</th>
                  <th className="px-3 py-3 font-semibold">Phone</th>
                  <th className="px-3 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={index % 2 ? "bg-[#F8FAFC]" : "bg-white"}
                  >
                    <td className="px-3 py-3 text-[#374151]">{row.name}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.fatherName}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.cnic}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.address}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.phone}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <Image src='/svgs/edit.svg' alt="" width={16} height={16} />
                        <Image src='/svgs/delete.svg' alt="" width={16} height={16} />
                        <Image src='/svgs/alert.svg' alt="" width={16} height={16} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <EmployeeRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitEmployee}
      />
    </section>
  );
}











