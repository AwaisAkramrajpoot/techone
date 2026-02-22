import { Mail, MapPin, Phone } from "lucide-react";

const productLinks = ["Modules", "Pricing", "Implementation", "Case Studies"];
const companyLinks = ["About", "Contact", "Support", "Book Demo"];

export function FinalCtaFooterSection() {
  return (
    <section>
      <div className="bg-[radial-gradient(circle_at_top,#155D76_0%,#124B63_50%,#0E374A_100%)] px-4 py-14 text-center sm:px-6 lg:px-10">
        <p className="text-xs font-bold tracking-[0.16em] text-[#D8F4FF]">READY TO SIMPLIFY HR OPERATIONS?</p>
        <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Move HR from Manual to Managed</h3>
        <p className="mx-auto mt-4 max-w-3xl text-base text-[#D7E4FF] sm:text-lg">
          Built for HR, admin and finance teams who need clear workflows and reliable records.
        </p>
        <button className="mt-8 rounded-xl bg-white px-8 py-3 text-base font-semibold text-[#0F766E] transition hover:bg-[#F3F6FF]">
          Talk to Sales
        </button>
      </div>

      <footer id="contact" className="scroll-mt-28 bg-[#082B33] px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 text-[#A5B0CF] md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F766E] to-[#0891B2] text-lg font-semibold text-white">
                H
              </div>
              <span className="text-3xl font-semibold text-white">HRMS</span>
            </div>
            <p className="text-sm leading-relaxed">
              Unified HR management for employee records, payroll, attendance, leaves, advances and reporting.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-white">PRODUCT</p>
            <ul className="mt-4 space-y-2 text-sm">
              {productLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-white">COMPANY</p>
            <ul className="mt-4 space-y-2 text-sm">
              {companyLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-white">GET IN TOUCH</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4" />
                Karachi, Pakistan
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +92 300 0000000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@hrms.local
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[#1A2B4D] pt-5 text-xs text-[#8B96B6] sm:flex-row">
          <p>Copyright 2026 HRMS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Refund Policy</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
