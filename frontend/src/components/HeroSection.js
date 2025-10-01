import React from "react";
import ScratchCardVideo from "./ScratchCardVideo";
import ScatteredImages from "./ScatteredImages";

const HeroSection = () => {
  return (
    <div style={{ 
      height: '100vh', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Scratch Card Video Background */}
      <ScratchCardVideo />

      {/* Scattered Images */}
      <ScatteredImages />

      {/* Central Brand Message */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 500,
        textAlign: 'center',
        pointerEvents: 'none',
        userSelect: 'none'
      }}>
        <h2 style={{
          fontFamily: 'Nothing, Arial, sans-serif',
          fontSize: '13px',
          fontWeight: 'normal',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          lineHeight: '1.2',
          textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
          margin: 0
        }}>
          WE BELIEVE IN CREATIVITY AND TRANSPARENCY
        </h2>
      </div>

      {/* Bottom Fixed Text - Split Animation */}
      <div className="bottom-text">
        <div className="bottom-text-content">
          <span className="explore-static">EXPLORE</span>
          <span className="nothing-slide-up">NOTHING</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;