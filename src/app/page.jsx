import AccordionComponent from "@/components/AccordionSection";
import ContactUsSection from "@/components/ContactUsSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import NotYourWorry from "@/components/NotYourWorry";
import PhenomLoan from "@/components/PhenomLoan";
import WhatIsPhenomAbout from "@/components/WhatIsPhenomAbout";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatIsPhenomAbout />
      <ContactUsSection />
      <NotYourWorry />
      <FeatureSection />
      <PhenomLoan />
      <AccordionComponent />
    </div>
  );
};

export default Home;
