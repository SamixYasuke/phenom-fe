import AccordionComponent from "@/components/AccordionSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NotYourWorry from "@/components/NotYourWorry";
import PhenomLoan from "@/components/PhenomLoan";
import WhatIsPhenomAbout from "@/components/WhatIsPhenomAbout";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatIsPhenomAbout />
      <NotYourWorry />
      <FeatureSection />
      <PhenomLoan />
      <AccordionComponent />
    </div>
  );
};

export default Home;
