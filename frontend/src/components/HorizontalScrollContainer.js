import React, { useRef, useEffect, useState } from "react";
import ComeToPlaySection from "./ComeToPlaySection";
import WhitePage from "./WhitePage";
import RedPage from "./RedPage";
import BlackPage from "./BlackPage";

const HorizontalScrollContainer = () => {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const sectionsRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibility, setVisibility] = useState({ opacity: 0, zIndex: -1 });

  useEffect(() => {
    const handleScroll = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();
      const triggerStart = rect.top;
      const triggerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate visibility and scroll progress with smoother transitions
      const fadeStartDistance = windowHeight * 0.2; // Start fading in when 20% of viewport away
      
      if (triggerStart <= fadeStartDistance && triggerStart >= -triggerHeight - fadeStartDistance) {
        // Element is approaching or being scrolled through
        let opacity = 1;
        let zIndex = 1000;
        
        if (triggerStart > 0) {
          // Approaching from above - fade in
          opacity = Math.max(0, 1 - (triggerStart / fadeStartDistance));
        } else if (triggerStart < -triggerHeight + windowHeight) {
          // Moving away below - fade out
          const fadeOutStart = -triggerHeight + windowHeight;
          const fadeDistance = triggerStart - fadeOutStart;
          opacity = Math.max(0, 1 - Math.abs(fadeDistance / fadeStartDistance));
        }
        
        setVisibility({ opacity, zIndex });
        
        // Calculate horizontal scroll progress only when fully visible
        if (triggerStart <= 0 && triggerStart >= -triggerHeight + windowHeight) {
          const scrolled = Math.abs(triggerStart);
          const maxScroll = triggerHeight - windowHeight;
          const progress = scrolled / maxScroll;
          const clampedProgress = Math.min(Math.max(progress, 0), 1);
          setScrollProgress(clampedProgress);
        }
      } else {
        // Completely outside range
        setVisibility({ opacity: 0, zIndex: -1 });
        if (triggerStart > fadeStartDistance) {
          setScrollProgress(0);
        } else {
          setScrollProgress(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply transform based on scroll progress (move from 0 to -300vw)
  const translateX = -scrollProgress * 300; // Move 300vw to reveal all 4 sections

  return (
    <div>
      {/* Trigger element that creates scroll distance */}
      <div 
        ref={triggerRef}
        style={{ 
          height: '250vh', // Reduced scroll distance for horizontal animation
          position: 'relative',
          marginTop: '-100px' // Reduced margin to account for white section
        }}
      >
        {/* Fixed container that gets pinned - only visible when in scroll range */}
        <div 
          ref={containerRef}
          className="horizontal-scroll-container"
          style={{
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: visibility.zIndex,
            opacity: visibility.opacity,
            pointerEvents: visibility.opacity > 0.1 ? 'auto' : 'none',
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <div 
            ref={sectionsRef}
            className="horizontal-sections"
            style={{
              display: 'flex',
              height: '100vh',
              width: '400vw', // 4 sections × 100vw each
              transform: `translateX(${translateX}vw)`,
              transition: 'none', // Smooth but not too slow
              willChange: 'transform'
            }}
          >
            {/* Section 1: Come to Play */}
            <div style={{ width: '100vw', height: '100vh', flexShrink: 0 }}>
              <ComeToPlaySection />
            </div>
            
            {/* Section 2: White Page */}
            <div style={{ width: '100vw', height: '100vh', flexShrink: 0 }}>
              <WhitePage />
            </div>
            
            {/* Section 3: Red Page */}
            <div style={{ width: '100vw', height: '100vh', flexShrink: 0 }}>
              <RedPage />
            </div>
            
            {/* Section 4: Black Page */}
            <div style={{ width: '100vw', height: '100vh', flexShrink: 0 }}>
              <BlackPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;