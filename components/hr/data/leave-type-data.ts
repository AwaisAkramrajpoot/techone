export type LeaveTypeStatus = "Active" | "Expiring Soon" | "Expired";

export type LeaveTypeRow = {
  id: number;
  leaveType: string;
  subtitle: string;
  abbreviation: string;
  maxDays: string;
  paid: boolean;
  status: LeaveTypeStatus;
};

export const leaveTypeDummyRows: LeaveTypeRow[] = [
  {
    id: 1,
    leaveType: "Annual Leave",
    subtitle: "Paid time off for vacation",
    abbreviation: "AL",
    maxDays: "15 days",
    paid: true,
    status: "Active",
  },
  {
    id: 2,
    leaveType: "Sick Leave",
    subtitle: "Paid time off for vacation",
    abbreviation: "SL",
    maxDays: "10 days",
    paid: true,
    status: "Active",
  },
  {
    id: 3,
    leaveType: "Annual Leave",
    subtitle: "Paid time off for vacation",
    abbreviation: "AL",
    maxDays: "90 days",
    paid: true,
    status: "Active",
  },
];
