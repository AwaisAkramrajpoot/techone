export type TimeShiftStatus = "Active" | "Expiring Soon" | "Expired";

export type TimeShiftRow = {
  id: number;
  shiftName: string;
  shiftCode: string;
  shiftTiming: string;
  status: TimeShiftStatus;
};

export const timeShiftDummyRows: TimeShiftRow[] = [
  {
    id: 1,
    shiftName: "Tech Solutions - Morning",
    shiftCode: "Tech Solutions...",
    shiftTiming: "12 to 4",
    status: "Active",
  },
  {
    id: 2,
    shiftName: "Global Enterprises - Day",
    shiftCode: "Global Enterprise",
    shiftTiming: "12 to 4",
    status: "Expiring Soon",
  },
  {
    id: 3,
    shiftName: "Tech Solutions - Night",
    shiftCode: "Tech Solutions...",
    shiftTiming: "12 to 4",
    status: "Active",
  },
];
