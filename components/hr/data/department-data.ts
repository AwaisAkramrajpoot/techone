export type DepartmentStatus = "Active" | "Expiring Soon" | "Expired";

export type DepartmentRow = {
  id: number;
  company: string;
  branch: string;
  department: string;
  status: DepartmentStatus;
};

export const departmentDummyRows: DepartmentRow[] = [
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
