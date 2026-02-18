export type OvertimeStatus = "Approved" | "Pending" | "Completed";

export type OvertimeRow = {
  id: number;
  employee: string;
  date: string;
  hours: string;
  type: string;
  rr: string;
  otr: string;
  cost: string;
  reason: string;
  status: OvertimeStatus;
};

export const overtimeDummyRows: OvertimeRow[] = [
  {
    id: 1,
    employee: "Kaleem",
    date: "Oct 15, 2023",
    hours: "8 hrs",
    type: "Weekly 1.5x rate",
    rr: "25.00/hr",
    otr: "25.00/hr",
    cost: "25,000",
    reason: "Project deadline",
    status: "Approved",
  },
  {
    id: 2,
    employee: "Amir",
    date: "Oct 18, 2023",
    hours: "12 hrs",
    type: "Weekly 1.5x rate",
    rr: "25.00/hr",
    otr: "25.00/hr",
    cost: "20,000",
    reason: "Project deadline",
    status: "Pending",
  },
  {
    id: 3,
    employee: "waseem",
    date: "Oct 12, 2023",
    hours: "9 hrs",
    type: "Weekly 1.5x rate",
    rr: "25.00/hr",
    otr: "25.00/hr",
    cost: "12,000",
    reason: "Project deadline",
    status: "Approved",
  },
  {
    id: 4,
    employee: "Amir",
    date: "Oct 15, 2023",
    hours: "2 hrs",
    type: "Weekly 1.5x rate",
    rr: "25.00/hr",
    otr: "25.00/hr",
    cost: "45,000",
    reason: "Project deadline",
    status: "Completed",
  },
];
