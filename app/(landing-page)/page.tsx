import {
  HeroSection,
  SocialProofSection,
  HowItWorksSection,
  BeforeAfterSection,
  FeaturesSection,
  TestimonialsSection,
  PricingSection,
  FooterSection,
} from './sections';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <BeforeAfterSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
}
