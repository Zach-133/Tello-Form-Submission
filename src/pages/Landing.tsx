import AnnouncementBanner from "@/components/landing/AnnouncementBanner";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import InterviewMockup from "@/components/landing/InterviewMockup";
import ScoresheetMockup from "@/components/landing/ScoresheetMockup";
import ProgressTrackerSection from "@/components/landing/ProgressTrackerSection";
import PricingSection from "@/components/landing/PricingSection";
import WaitlistSection from "@/components/landing/WaitlistSection";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div className="bg-background">
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <InterviewMockup />
      <ScoresheetMockup />
      <ProgressTrackerSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Landing;
