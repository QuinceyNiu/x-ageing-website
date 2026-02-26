import { HeroSection } from "@/components/sections/HeroSection";
import { BusinessCards } from "@/components/sections/BusinessCards";
import { WhyNow } from "@/components/sections/WhyNow";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="scroll-snap-container">
      <HeroSection />
      <BusinessCards />
      <WhyNow />
      <CTASection />
    </div>
  );
}
