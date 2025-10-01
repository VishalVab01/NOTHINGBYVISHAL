import React, { useEffect, useState, useRef } from "react";
import ScratchCardVideo from "./ScratchCardVideo";
import ScatteredImages from "./ScatteredImages";

const HeroSection = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show text when hero section is at least 20% visible
          if (entry.intersectionRatio > 0.2) {
            setIsHeroVisible(true);
          } else {
            setIsHeroVisible(false);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1.0], // Multiple thresholds for smooth transition
        rootMargin: '0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      style={{ 
        height: '100vh', 
        position: 'relative',
        overflow: 'hidden'
      }}>
      {/* Scratch Card Video Background */}
      <ScratchCardVideo />

      {/* Scattered Images */}
      <ScatteredImages />

      {/* Central Brand Message - Only visible when in hero section */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 500,
        textAlign: 'center',
        pointerEvents: 'none',
        userSelect: 'none',
        opacity: isHeroVisible ? 1 : 0,
        visibility: isHeroVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
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

      {/* Bottom Fixed Text - Split Animation - Only visible when in hero section */}
      <div 
        className="bottom-text"
        style={{
          opacity: isHeroVisible ? 1 : 0,
          visibility: isHeroVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
        }}
      >
        <div className="bottom-text-content">
          <span className="explore-static">EXPLORE</span>
          <span className="nothing-slide-up">NOTHING</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;