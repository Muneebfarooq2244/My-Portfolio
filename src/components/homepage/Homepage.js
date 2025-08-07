import React, { useEffect } from "react";
import { ThemeProvider } from "../../ThemeContext";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import { ServiceSection, TabsSection } from "./ServiceSection";
import MyWork from "./MyWork";
import Testimonials from "./Testimonials";
import Contactus from "./Contactus";
import Proposal from "./Proposal";


const Homepage = () => {
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  return (
    <ThemeProvider>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TabsSection />
      <Proposal/>
      <MyWork />
      <Contactus/>
      <Testimonials />
    </ThemeProvider>
  );
};

export default Homepage;
