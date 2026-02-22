const testimonials = [
  {
    rating: "5/5",
    quote:
      "Before HRMS, monthly payroll took too long and often needed corrections. Now payroll closes on time with clear reports.",
    name: "Faisal Ahmed",
    role: "HR Lead, 45 employees",
  },
  {
    rating: "5/5",
    quote:
      "Leave and attendance are now transparent for managers and staff. Fewer disputes and faster approvals.",
    name: "Ayesha Khan",
    role: "Operations Manager, 80 employees",
  },
  {
    rating: "4.5/5",
    quote:
      "We moved from manual files to digital employee records. Onboarding and document tracking improved significantly.",
    name: "Rehan Malik",
    role: "Admin Head, 55 employees",
  },
  {
    rating: "5/5",
    quote:
      "Loan, advance and deduction tracking is much cleaner now. Finance and HR stay aligned every month.",
    name: "Zainab Noor",
    role: "Finance Manager, 60 employees",
  },
  {
    rating: "5/5",
    quote:
      "Department and shift level control helped us standardize workflows across branches.",
    name: "Tariq Mahmood",
    role: "Business Owner, multi-branch setup",
  },
  {
    rating: "4.5/5",
    quote:
      "The system is easy for non-technical staff. Reporting is faster and follow-ups are simpler.",
    name: "Hassan Raza",
    role: "HR Supervisor, 35 employees",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-transparent px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mx-auto inline-flex rounded-full border border-[#BDD2E7] bg-[#E6F0FA] px-5 py-2 text-xs font-semibold tracking-[0.15em] text-[#1E5B87]">
            CLIENT FEEDBACK
          </p>
          <h2 className="mt-6 text-2xl font-semibold text-[#111A38] sm:text-3xl">What HR Teams Say</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={`${item.name}-${item.role}`} className="rounded-2xl border border-[#D6E0ED] bg-white p-6">
              <p className="text-sm font-semibold text-[#0F766E]">{item.rating}</p>
              <p className="mt-3 text-base leading-relaxed text-[#4E5E7A]">&quot;{item.quote}&quot;</p>
              <p className="mt-4 text-lg font-semibold text-[#182236]">{item.name}</p>
              <p className="mt-1 text-sm text-[#64748B]">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
