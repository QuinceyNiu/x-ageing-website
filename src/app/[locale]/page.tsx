import { HeroSection } from "@/components/sections/HeroSection";
import { BusinessCards } from "@/components/sections/BusinessCards";
import { WhyNow } from "@/components/sections/WhyNow";
import { PainPoints } from "@/components/sections/PainPoints";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="scroll-snap-container">
      <HeroSection />
      <BusinessCards />
      <WhyNow />
      <PainPoints />
      <CTASection />
    </div>
  );
}
