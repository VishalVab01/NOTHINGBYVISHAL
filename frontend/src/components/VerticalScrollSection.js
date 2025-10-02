import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const VerticalScrollSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animationPhase, setAnimationPhase] = useState('normal'); // 'normal', 'scaling', 'scaled'

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const imageElement = imageRef.current;
      if (!section || !imageElement) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when section is in view
      if (sectionTop <= windowHeight && sectionTop >= -sectionHeight) {
        // Progress from 0 (bottom of screen) to 1 (top of screen)
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollProgress(progress);

        // Handle different animation phases
        if (animationPhase === 'normal' && progress > 0.3) {
          // Get actual image position on screen
          const imageRect = imageElement.getBoundingClientRect();
          const imageTop = imageRect.top;
          const navbarBottom = 120; // 20px top + 80px height + buffer = 120px from top
          
          // Check if image top edge is near or touching navbar bottom edge
          if (imageTop <= navbarBottom) {
            // Trigger scaling animation
            setAnimationPhase('scaling');
            
            gsap.to(imageElement, {
              scale: 3.0,
              y: windowHeight * 0.3, // Move down to center area
              duration: 1.2,
              ease: "power2.out",
              onComplete: () => {
                setAnimationPhase('scaled');
              }
            });
          }
        }
        
        // Reset animation if user scrolls back up significantly
        if (progress < 0.2 && (animationPhase === 'scaling' || animationPhase === 'scaled')) {
          setAnimationPhase('normal');
          gsap.to(imageElement, {
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.inOut"
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationPhase]);

  return (
    <div 
      ref={sectionRef}
      style={{
        width: '100vw',
        height: '200vh', // Tall section to allow for scroll animation
        position: 'relative',
        backgroundColor: '#1a1a1a', // Dark gray background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '10vh 5vw',
        overflow: 'hidden'
      }}
    >
      {/* Animated Header Image - Scales up when reaching navbar */}
      <img 
        ref={imageRef}
        src="https://customer-assets.emergentagent.com/job_text-replacer-2/artifacts/4iyxgzit_2GuysPhone3.jpg"
        alt="Experience Header"
        style={{
          width: '25vw',
          height: 'auto',
          marginBottom: '3rem',
          borderRadius: '15px',
          boxShadow: animationPhase === 'scaled' 
            ? '0 30px 80px rgba(0,0,0,0.9)' 
            : '0 15px 40px rgba(0,0,0,0.6)',
          zIndex: animationPhase === 'scaled' ? 35 : 10,
          transformOrigin: 'center center',
          willChange: 'transform',
          transition: 'box-shadow 0.3s ease'
        }}
      />

      {/* Single Lorem Ipsum Paragraph - Stays in place */}
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        color: 'white',
        fontSize: '1.2rem',
        lineHeight: '1.8',
        marginBottom: '5vh',
        fontFamily: 'Arial, sans-serif',
        zIndex: 5 // Lower z-index so scaled image appears above
      }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur.
        </p>
      </div>

      {/* Vertical Navigation Buttons - Appears when image is scaled */}
      {scrollProgress > 0.4 && ( // Show buttons when scroll progress is more than 40%
        <div style={{
          position: 'fixed',
          top: '55%', // Moved higher up
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          zIndex: 50,
          opacity: 1, // Always fully visible when container is shown
          transition: 'opacity 0.5s ease'
        }}>
          {['HOME', 'NOTHING NEW', 'CMF', 'SHOP'].map((label, index) => (
            <button
              key={label}
              className="vertical-nav-btn"
              style={{
                background: 'rgba(255, 255, 255, 0.1)', // Slight background for visibility
                border: 'none',
                color: '#FFFFFF',
                fontFamily: 'Nothing, Arial, monospace',
                fontSize: '10.0rem', // Increased font size
                fontWeight: 'normal',
                cursor: 'pointer',
                padding: '30px 50px', // Increased padding to match larger font
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                position: 'absolute',
                opacity: 1,
                transformOrigin: 'center',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FF0000';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'scale(1)';
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Additional content for extended scroll */}
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        color: 'white',
        fontSize: '1.1rem',
        lineHeight: '1.7',
        marginTop: '50vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h3 style={{
          fontSize: '2rem',
          marginBottom: '1.5rem',
          fontFamily: 'Azonix, monospace',
          letterSpacing: '0.1em',
          color: '#888'
        }}>
          DISCOVER MORE
        </h3>
        
        <p style={{ marginBottom: '2rem', color: '#ccc' }}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        
        <p style={{ color: '#ccc' }}>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
          dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
  );
};

export default VerticalScrollSection;