import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection.js";
import TechSection from "../components/TechSection";
import TransparencySection from "../components/TransparencySection";

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

      {/* Fourth Section - Full Screen Image at Bottom */}
      <div style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 99, // High z-index to ensure it appears above other elements
        marginTop: '-1116px' // Move the image section up
      }}>
        <img 
          src="/nothing_phone_image.jpg"
          alt="Person with Nothing phone"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            clipPath: 'polygon(0% 20%, 100% 50%, 100% 100%, 0% 100%)' // Slanted cut to complement blur shape
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;