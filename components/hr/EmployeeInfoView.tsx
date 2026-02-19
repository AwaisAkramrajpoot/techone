"use client";

import Image from "next/image";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Pencil, Trash2, Ban, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";
import {
  employeeInfoDummyRows,
  type EmployeeInfoRow,
} from "@/components/hr/data/employee-info-data";
import { EmployeeRegistrationModal } from "@/components/hr/modals/EmployeeRegistrationModal";

export function EmployeeInfoView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<EmployeeInfoRow[]>([]);
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
    };

    setRows([...seed, ...rows, newRow]);
    setIsModalOpen(false);
    hrLayout?.setShowInnerSidebar(false);
  };

  useEffect(() => {
    hrLayout?.setShowInnerSidebar(true);
  }, []);

  return (
    <section className="min-h-[560px] flex-1">
      {hrLayout && !hrLayout.showInnerSidebar && (
        <button
          type="button"
          onClick={() => hrLayout.setShowInnerSidebar(true)}
          className="mb-2 inline-flex items-center text-[#6B7280] hover:text-[#374151]"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      )}

      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-[#0C4BA7]">Employee Info</h1>
          <p className="mt-1 text-sm text-[#667085]">
            Welcome back! Here&apos;s what&apos;s happening at your workplace today.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            className="bg-[#04499E] hover:bg-[#033E87] text-white"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="mr-1.5 h-4 w-4" />
            Add Employee
          </Button>
          <Button
            className="bg-[#04499E] hover:bg-[#033E87] text-white gap-1"
          >
            <Image src="/svgs/report.svg" alt="" width={18} height={18} />
            Report
          </Button>
          <Button
            className="bg-[#04499E] hover:bg-[#033E87] text-white gap-1"
          >
            <Image src="/svgs/export.svg" alt="" width={18} height={18} />
            Export
          </Button>
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
            <p className="mt-2 text-3xl font-medium text-[#D0D5DD]">
              Add Company First!
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
                        <Pencil className="h-4 w-4 cursor-pointer text-[#0B63CE]" />
                        <Trash2 className="h-4 w-4 cursor-pointer text-[#E11D48]" />
                        <Ban className="h-4 w-4 cursor-pointer text-[#2EA8DF]" />
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




