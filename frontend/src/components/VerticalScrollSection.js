import React, { useRef, useEffect, useState } from "react";

const VerticalScrollSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when section is in view
      if (sectionTop <= windowHeight && sectionTop >= -sectionHeight) {
        // Progress from 0 (bottom of screen) to 1 (top of screen)
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate image position (starts from bottom, moves to top)
  const imageTransformY = 120 - (scrollProgress * 140); // Moves from 120% to -20%

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
      {/* Header Image (replacing EXPERIENCE text) */}
      <img 
        src="https://customer-assets.emergentagent.com/job_text-replacer-2/artifacts/4iyxgzit_2GuysPhone3.jpg"
        alt="Experience Header"
        style={{
          width: '25vw',
          height: 'auto',
          marginBottom: '3rem',
          borderRadius: '15px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
          zIndex: 10
        }}
      />

      {/* Single Lorem Ipsum Paragraph */}
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        color: 'white',
        fontSize: '1.2rem',
        lineHeight: '1.8',
        marginBottom: '5vh',
        fontFamily: 'Arial, sans-serif',
        zIndex: 10
      }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur.
        </p>
      </div>

      {/* Animated Image - Moves from bottom to top */}
      <img 
        src="https://customer-assets.emergentagent.com/job_text-replacer-2/artifacts/4iyxgzit_2GuysPhone3.jpg"
        alt="Animated Phone Experience"
        style={{
          position: 'absolute',
          width: '18vw', // Small size as requested
          height: 'auto',
          left: '50%',
          top: `${imageTransformY}%`,
          transform: 'translateX(-50%)',
          zIndex: 25,
          objectFit: 'contain',
          opacity: scrollProgress > 0.05 ? 0.9 : 0, // Fade in when scrolling starts
          borderRadius: '12px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.7)',
          transition: 'opacity 0.3s ease'
        }}
      />

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