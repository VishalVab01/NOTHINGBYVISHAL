import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection.js";
import TechSection from "../components/TechSection";
import TransparencySection from "../components/TransparencySection";
import HorizontalScrollContainer from "../components/HorizontalScrollContainer";
import VerticalScrollSection from "../components/VerticalScrollSection";
import TranslucentPage from "../components/TranslucentPage";
import ScatteredImages from "../components/ScatteredImages";

const HomePage = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Shared Navbar - will be visible on all sections */}
      <Navbar />
      
      {/* Scattered Images - Rendered at top level to avoid stacking context issues */}
      <ScatteredImages />
      
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

      {/* Translucent Page - Semi-transparent section */}
      <TranslucentPage />
    </div>
  );
};

export default HomePage;