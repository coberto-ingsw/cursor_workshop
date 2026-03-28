import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaFooter } from "@/components/FinalCtaFooter";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteHeader } from "@/components/SiteHeader";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div id="top" className="min-h-dvh bg-zinc-50 dark:bg-zinc-950">
      <SiteHeader />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaFooter />
      </main>
    </div>
  );
}
