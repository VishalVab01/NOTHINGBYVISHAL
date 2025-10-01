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
        marginTop: '-958px' // Move the image section up
      }}>
        <img 
          src="/nothing_phone_image.jpg"
          alt="Person with Nothing phone"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            clipPath: 'polygon(0% 0%, 100% 30%, 100% 100%, 0% 100%)' // Keep the 30% slant on right side
          }}
        />
      </div>

      {/* Fifth Section - Come to Play */}
      <div 
        id="cometoplay"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',
          backgroundColor: 'black',
          zIndex: 100,
          marginTop: '-250px', // Adjust this value to move the section up
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <div style={{
          fontFamily: 'Azonix, monospace',
          fontSize: '28vw', // Responsive font size based on viewport width
          fontWeight: 'normal',
          color: 'white',
          textAlign: 'center',
          lineHeight: '0.8',
          letterSpacing: '0.1em',
          userSelect: 'none'
        }}>
          COME
        </div>
      </div>
    </div>
  );
};

export default HomePage;