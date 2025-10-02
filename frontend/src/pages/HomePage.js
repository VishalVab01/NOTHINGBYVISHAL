import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection.js";
import TechSection from "../components/TechSection";
import TransparencySection from "../components/TransparencySection";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";
import VerticalScrollSection from "../components/VerticalScrollSection";

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

      {/* Horizontal Scroll Section - Come to Play, White Page, Red Page */}
      <HorizontalScrollContainer />

      {/* Vertical Scroll Section - Image animation from bottom to top */}
      <VerticalScrollSection />
    </div>
  );
};

export default HomePage;