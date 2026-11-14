import HeroSection from "@/components/home/HeroSection";
import QuickAccess from "@/components/home/QuickAccess";
import BranchesSection from "@/components/home/BranchesSection";
import SpecialitySection from "@/components/home/SpecialitySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InsurancePartners from "@/components/home/InsurancePartners";
import LatestArticles from "@/components/home/LatestArticles";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickAccess />
      <SpecialitySection />
      <BranchesSection />
      <TestimonialsSection />
      <InsurancePartners />
      <LatestArticles />
    </>
  );
}
