export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pt-32 lg:px-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#103C5A_0%,#0B2F49_48%,#0A253C_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_15%,rgba(34,211,238,0.22),transparent_45%)]" />
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#1E8BA4] bg-[#0D3D4FA8] px-5 py-2 text-xs font-semibold text-[#8DE7FA] sm:text-sm">
          <span>Designed for Pakistan HR Operations</span>
        </div>

        <h1 className="mt-8 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
          HRMS for Payroll, Leave, Attendance
          <br />
          <span className="text-[#7DE6E4]">and Employee Lifecycle</span>
          <br />
          <span className="text-[#A8D7FF]">Built for teams that need clarity.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#C5D9EA] sm:text-lg">
          Manage departments, shifts, loans, expenses, increments, bonuses, payroll and reporting in one integrated system.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:text-base">
          <p className="font-medium text-[#A3C9F4]">Suitable for startups, SMEs and multi-branch teams</p>
          <p className="rounded-xl border border-[#2596A9] bg-[#1244558C] px-5 py-2 font-semibold text-[#8CECF6]">
            Setup in days, not months
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="rounded-xl bg-gradient-to-r from-[#0F766E] to-[#0891B2] px-7 py-3 text-base font-semibold text-white transition hover:opacity-95">
            Request a Demo
          </button>
          <button className="rounded-xl border border-[#5E7CA4] bg-[#1C2D46AA] px-7 py-3 text-base font-semibold text-white transition hover:bg-[#233854]">
            Explore Modules
          </button>
        </div>
      </div>
    </section>
  );
}
