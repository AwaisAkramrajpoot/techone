export type LeaveDetailsStatus = "Active" | "Expiring Soon" | "Expired";

export type LeaveDetailsRow = {
  id: number;
  employee: string;
  leaveType: string;
  duration: string;
  attachmentLabel: string;
  dateRange: string;
  status: LeaveDetailsStatus;
};

export const leaveDetailsDummyRows: LeaveDetailsRow[] = [
  {
    id: 1,
    employee: "Kaleem",
    leaveType: "Annual Leave",
    duration: "15 days",
    attachmentLabel: "View",
    dateRange: "25/03/2025",
    status: "Active",
  },
  {
    id: 2,
    employee: "Aleem",
    leaveType: "Sick Leave",
    duration: "10 days",
    attachmentLabel: "View",
    dateRange: "25/03/2025",
    status: "Expiring Soon",
  },
  {
    id: 3,
    employee: "Amir",
    leaveType: "Annual Leave",
    duration: "90 days",
    attachmentLabel: "View",
    dateRange: "25/03/2025",
    status: "Active",
  },
];
