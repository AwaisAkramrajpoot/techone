export type HolidayStatus = "Active" | "Expiring Soon" | "Expired";

export type HolidayRow = {
  id: number;
  holidayName: string;
  holidayCode: string;
  startDate: string;
  endDate: string;
  daysCount: string;
  status: HolidayStatus;
};

export const holidayDummyRows: HolidayRow[] = [
  {
    id: 1,
    holidayName: "Sunday",
    holidayCode: "#61",
    startDate: "13/03/2025",
    endDate: "25/03/2025",
    daysCount: "#1",
    status: "Active",
  },
  {
    id: 2,
    holidayName: "Sunday",
    holidayCode: "#61",
    startDate: "13/03/2025",
    endDate: "25/03/2025",
    daysCount: "#2",
    status: "Expiring Soon",
  },
  {
    id: 3,
    holidayName: "Sunday",
    holidayCode: "#61",
    startDate: "13/03/2025",
    endDate: "25/03/2025",
    daysCount: "#3",
    status: "Active",
  },
];
