export type IncrementStatus = "Approved" | "Pending" | "Recommended";

export type IncrementRow = {
  id: number;
  employee: string;
  currentSalary: string;
  newSalary: string;
  incrementAmount: string;
  incrementPercent: string;
  tenure: string;
  effectiveDate: string;
  status: IncrementStatus;
};

export const incrementDummyRows: IncrementRow[] = [
  {
    id: 1,
    employee: "Kaleem",
    currentSalary: "23,000",
    newSalary: "25,000",
    incrementAmount: "25,000",
    incrementPercent: "24.7%",
    tenure: "4.5 year",
    effectiveDate: "Oct 15, 2023",
    status: "Approved",
  },
  {
    id: 2,
    employee: "Amir",
    currentSalary: "34,000",
    newSalary: "20,000",
    incrementAmount: "25,000",
    incrementPercent: "24.7%",
    tenure: "3.5 year",
    effectiveDate: "Oct 18, 2023",
    status: "Pending",
  },
  {
    id: 3,
    employee: "waseem",
    currentSalary: "23,000",
    newSalary: "12,000",
    incrementAmount: "25,000",
    incrementPercent: "24.7%",
    tenure: "4.9 year",
    effectiveDate: "Oct 12, 2023",
    status: "Approved",
  },
  {
    id: 4,
    employee: "Amir",
    currentSalary: "45,000",
    newSalary: "45,000",
    incrementAmount: "25,000",
    incrementPercent: "24.7%",
    tenure: "3.1 year",
    effectiveDate: "Oct 15, 2023",
    status: "Recommended",
  },
];
