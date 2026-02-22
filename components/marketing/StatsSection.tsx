const stats = [
  { label: "Companies", value: "150+" },
  { label: "Employees", value: "3,000+" },
  { label: "Since", value: "2021" },
  { label: "Features", value: "130+" },
];

export function StatsSection() {
  return (
    <section className="px-0 pb-16 pt-10">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-b-[50px] bg-[radial-gradient(circle_at_top,#15506A_0%,#113E53_42%,#0D3344_100%)] px-4 py-16 text-center sm:px-6 lg:px-10">
        <p className="text-sm uppercase tracking-[0.18em] text-[#A9E3F4]">HRMS Snapshot</p>
        <h2 className="mt-4 text-4xl font-semibold text-[#E1F8FF] sm:text-5xl">Xtreme HRMS</h2>
        <p className="mt-3 text-lg font-medium text-[#F0FAFF] sm:text-xl">End-to-end HR operations platform</p>
        <p className="mt-2 text-sm text-[#CDE6F1] sm:text-base">Employee records, payroll, leave, loans, expenses and compliance in one workspace.</p>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-semibold text-white sm:text-4xl">{item.value}</p>
              <p className="mt-2 text-sm text-[#D0EDF7] sm:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
