import { FaqSection } from "@/components/marketing/FaqSection";
import { FinalCtaFooterSection } from "@/components/marketing/FinalCtaFooterSection";
import { FeaturesSection } from "@/components/marketing/FeaturesSection";
import { GuaranteeAndStepsSection } from "@/components/marketing/GuaranteeAndStepsSection";
import { HeroSection } from "@/components/marketing/HeroSection";
import { LandingNavbar } from "@/components/marketing/LandingNavbar";
import { PricingSection } from "@/components/marketing/PricingSection";
import { ProblemsSection } from "@/components/marketing/ProblemsSection";
import { StatsSection } from "@/components/marketing/StatsSection";
import { TestimonialsSection } from "@/components/marketing/TestimonialsSection";

export function MarketingLandingPage() {
  return (
    <>
      <LandingNavbar />
      <div id="top" className="marketing-home relative min-h-screen overflow-x-hidden font-[poppins] text-[#0E2238]">
      <div className="animate-fade-up">
        <HeroSection />
      </div>
      <div className="animate-fade-up [animation-delay:0.08s]">
        <ProblemsSection />
      </div>
      <div className="animate-fade-up [animation-delay:0.12s]">
        <StatsSection />
      </div>
      <div className="animate-fade-up [animation-delay:0.16s]">
        <FeaturesSection />
      </div>
      <div className="animate-fade-up [animation-delay:0.2s]">
        <TestimonialsSection />
      </div>
      <div className="animate-fade-up [animation-delay:0.24s]">
        <PricingSection />
      </div>
      <div className="animate-fade-up [animation-delay:0.28s]">
        <GuaranteeAndStepsSection />
      </div>
      <div className="animate-fade-up [animation-delay:0.32s]">
        <FaqSection />
      </div>
      <div className="animate-fade-up [animation-delay:0.36s]">
        <FinalCtaFooterSection />
      </div>
      </div>
    </>
  );
}
