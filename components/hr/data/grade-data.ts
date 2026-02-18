export type GradeStatus = "Active" | "Expiring Soon" | "Expired";

export type GradeRow = {
  id: number;
  company: string;
  branch: string;
  gradeName: string;
  employees: string;
  status: GradeStatus;
};

export const gradeDummyRows: GradeRow[] = [
  {
    id: 1,
    company: "Tech Solutions Pvt Ltd",
    branch: "Tech Solutions - Main",
    gradeName: "Grade A",
    employees: "#1",
    status: "Active",
  },
  {
    id: 2,
    company: "Global Enterprises",
    branch: "Global Enterprise",
    gradeName: "Grade B",
    employees: "#2",
    status: "Expiring Soon",
  },
  {
    id: 3,
    company: "Tech Solutions Pvt Ltd",
    branch: "Tech Solutions - East",
    gradeName: "Grade C",
    employees: "#3",
    status: "Active",
  },
];
