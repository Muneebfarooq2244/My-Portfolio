import React, { useEffect } from "react";
import { ThemeProvider } from "../../ThemeContext";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import { ServiceSection, TabsSection } from "./ServiceSection";
import MyWork from "./MyWork";
import ReviewSlider from "./ReviewSlider";
import Contactus from "./Contactus";
import Proposal from "./Proposal";
import TechStack from "./TechStack";

const Homepage = () => {
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  return (
    <ThemeProvider>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TechStack />
      <TabsSection />
      <Proposal />
      <MyWork />
      <Contactus />
      <ReviewSlider />
    </ThemeProvider>
  );
};

export default Homepage;
