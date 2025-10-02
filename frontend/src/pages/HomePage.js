import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection.js";
import TechSection from "../components/TechSection";
import TransparencySection from "../components/TransparencySection";
import ComeToPlaySection from "../components/ComeToPlaySection";

const HomePage = () => {
  return (
    <div>
      {/* Shared Navbar - will be visible on all sections */}
      <Navbar />
      
      {/* First Section - Hero Section */}
      <HeroSection />

      {/* Second Section - Tech Section */}
      <TechSection />

      {/* Third Section - Transparency Section */}
      <TransparencySection />

      {/* Fifth Section - Come to Play */}
      <ComeToPlaySection />
    </div>
  );
};

export default HomePage;