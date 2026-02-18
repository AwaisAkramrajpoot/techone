"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, X, Pencil, Trash2, Ban, ArrowLeft } from "lucide-react";
import { useHrLayout } from "@/components/hr/HrLayoutContext";

type StatusType = "Active" | "Expiring Soon" | "Expired";

type DepartmentRow = {
  id: number;
  company: string;
  branch: string;
  department: string;
  status: StatusType;
};

const dummyRows: DepartmentRow[] = [
  {
    id: 1,
    company: "Tech Solutions Pvt Ltd",
    branch: "Tech Solutions - Main",
    department: "Engineering",
    status: "Active",
  },
  {
    id: 2,
    company: "Global Enterprises",
    branch: "Global Enterprise",
    department: "Operations",
    status: "Expiring Soon",
  },
  {
    id: 3,
    company: "Tech Solutions Pvt Ltd",
    branch: "Tech Solutions - East",
    department: "Finance",
    status: "Active",
  },
];

export function DepartmentView() {
  const hrLayout = useHrLayout();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState<DepartmentRow[]>([]);
  const [company, setCompany] = useState("");
  const [branch, setBranch] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [search, setSearch] = useState("");

  const statusClass = (status: StatusType) => {
    if (status === "Active") return "bg-[#DFF4FF] text-[#2EA8DF]";
    if (status === "Expiring Soon") return "bg-[#FFE8CC] text-[#FF8A00]";
    return "bg-[#FFD9EC] text-[#D63384]";
  };

  const filteredRows = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(
      (row) =>
        row.company.toLowerCase().includes(term) ||
        row.branch.toLowerCase().includes(term) ||
        row.department.toLowerCase().includes(term)
    );
  }, [rows, search]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCompany("");
    setBranch("");
    setDepartmentName("");
    setIsActive(true);
  };

  const handleSave = () => {
    if (!company || !branch || !departmentName) return;

    const seed = rows.length === 0 ? dummyRows : [];
    const nextId = [...seed, ...rows].length + 1;

    const newRow: DepartmentRow = {
      id: nextId,
      company,
      branch,
      department: departmentName,
      status: isActive ? "Active" : "Expired",
    };

    setRows([...seed, ...rows, newRow]);
    closeModal();
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
          <h1 className="text-3xl font-semibold text-[#0C4BA7]">
            Department Management
          </h1>
          <p className="mt-1 text-sm text-[#667085]">
            Organize teams for clarity and efficiency
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button className="bg-[#04499E] hover:bg-[#033E87]" onClick={openModal}>
            <Plus className="mr-1.5 h-4 w-4" />
            Add Department
          </Button>
          <Button
            variant="outline"
            className="border-[#04499E] text-[#04499E] hover:bg-[#EEF5FF]"
          >
            Report
          </Button>
          <Button
            variant="outline"
            className="border-[#04499E] text-[#04499E] hover:bg-[#EEF5FF]"
          >
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
            <p className="text-3xl text-[#D0D5DD]">!</p>
            <p className="mt-2 text-3xl font-medium text-[#D0D5DD]">
              Add Company First!
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-[#EEF1F6] bg-white p-3">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#F8FAFC] text-left text-[#111827]">
                  <th className="px-3 py-3 font-semibold">Company name</th>
                  <th className="px-3 py-3 font-semibold">Branch Name</th>
                  <th className="px-3 py-3 font-semibold">Department Name</th>
                  <th className="px-3 py-3 font-semibold">Status</th>
                  <th className="px-3 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={index % 2 ? "bg-[#F8FAFC]" : "bg-white"}
                  >
                    <td className="px-3 py-3 text-[#374151]">{row.company}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.branch}</td>
                    <td className="px-3 py-3 text-[#374151]">{row.department}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${statusClass(
                          row.status
                        )}`}
                      >
                        {row.status}
                      </span>
                    </td>
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-4">
          <div className="w-full max-w-3xl rounded-md bg-white p-4 shadow-lg sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[#1F2937]">
                Add New Department
              </h2>
              <button type="button" onClick={closeModal} className="text-[#111827]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Company
                </label>
                <select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="h-11 w-full rounded-md border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#04499E]"
                >
                  <option value="">Select company</option>
                  <option value="Tech Solutions Pvt Ltd">
                    Tech Solutions Pvt Ltd
                  </option>
                  <option value="Global Enterprises">Global Enterprises</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Branch
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
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
                <Input
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  placeholder="Enter department name"
                  className="h-11 border-[#E5E7EB] focus-visible:ring-[#04499E]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#374151]">
                  Status
                </label>
                <button
                  type="button"
                  onClick={() => setIsActive((prev) => !prev)}
                  className={`relative h-6 w-11 rounded-full transition ${
                    isActive ? "bg-[#04499E]" : "bg-[#CBD5E1]"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                      isActive ? "left-5" : "left-0.5"
                    }`}
                  />
                </button>
                <span className="ml-2 text-sm text-[#374151]">
                  {isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Button
                onClick={handleSave}
                className="h-11 bg-[#04499E] text-white hover:bg-[#033E87]"
              >
                Save
              </Button>
              <Button
                variant="outline"
                onClick={closeModal}
                className="h-11 border-[#8AAEDA] bg-[#8AAEDA] text-white hover:bg-[#7A9ECB]"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
