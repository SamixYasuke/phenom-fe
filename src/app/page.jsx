"use client";
import { useEffect, useState } from "react";
import AccordionComponent from "@/components/AccordionSection";
import ContactUsSection from "@/components/ContactUsSection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import NotYourWorry from "@/components/NotYourWorry";
import PhenomLoan from "@/components/PhenomLoan";
import WhatIsPhenomAbout from "@/components/WhatIsPhenomAbout";

const Home = () => {
  const [socialLinks, setSocialLinks] = useState([]);
  const [couponLink, setCouponLink] = useState("#");

  useEffect(() => {
    const fetchSocialMediaLinks = async () => {
      try {
        const res = await fetch("/api/social-links");
        const couponres = await fetch("/api/coupons");
        const data = await res.json();
        const couponData = await couponres.json();
        console.log(data);
        setCouponLink(couponData);
        if (Array.isArray(data)) {
          setSocialLinks(data);
        } else {
          setSocialLinks([]);
        }
      } catch (error) {
        console.error("Error fetching social media links:", error);
        setSocialLinks([]);
        setCouponLink("#");
      }
    };

    fetchSocialMediaLinks();
  }, []);
  return (
    <div>
      <HeroSection />
      <WhatIsPhenomAbout />
      <ContactUsSection socialLinks={socialLinks} couponLink={couponLink} />
      <NotYourWorry />
      <FeatureSection />
      <PhenomLoan />
      <AccordionComponent />
    </div>
  );
};

export default Home;
