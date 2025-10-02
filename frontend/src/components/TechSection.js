import React, { useEffect, useRef } from "react";

const TechSection = () => {
  const sectionRef = useRef(null);
  const secondLineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !secondLineRef.current) return;

      const secondLineRect = secondLineRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      
      // Check if user has scrolled past the second line
      const isSecondLinePassedViewport = secondLineRect.top <= window.innerHeight * 0.3;

      // Add/remove sticky class based on scroll position
      if (isSecondLinePassedViewport) {
        sectionRef.current.classList.add('tech-sticky');
        // Trigger transparency section animation
        document.body.classList.add('transparency-slide-up');
      } else {
        sectionRef.current.classList.remove('tech-sticky');
        document.body.classList.remove('transparency-slide-up');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef}
      style={{ 
        background: '#000000',
        padding: '80px 0px 150px', // Increased bottom padding significantly
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 100,
        width: '100vw',
        minHeight: '150vh', // Make section much taller to accommodate all content
        transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {/* Container for layout */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        paddingBottom: '300px' // Much more space to ensure text doesn't get cut
      }}>
        {/* Upper Left Image */}
        <div style={{
          width: '320px',
          height: '450px',
          position: 'absolute',
          top: '20px',
          left: '110px'
        }}>
          <img 
            src="https://customer-assets.emergentagent.com/job_9350f6eb-79d9-4589-b813-b1ad49710dfe/artifacts/dh5rqqp0_darkGirl.jpg"
            alt="Tech Design"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* First line positioned at bottom right of image */}
        <div style={{
          position: 'absolute',
          top: '420px',        // Adjust this value to move up/down (bottom of image)
          left: '455px',       // Adjust this value to move left/right (right edge of image)
          right: 'auto',       // Adjust this value for right positioning
          bottom: 'auto',      // Adjust this value for bottom positioning
          fontFamily: 'Azonix-new, Azonix, Arial, sans-serif',
          fontSize: '50px',
          lineHeight: '1.3',
          fontWeight: 'normal',
          color: '#FFFFFF'
        }}>
          <span>A TECH WHERE DESIGN REVEAL</span>
        </div>

        {/* Rest of the text - Full Width below the image */}
        <div 
          ref={secondLineRef}
          style={{
            position: 'absolute',
            top: '480px',       // Below the image
            left: '0px',
            width: '100vw',
            padding: '0px 40px',
            fontFamily: 'Azonix-new, Azonix, Arial, sans-serif',
            fontSize: '50px',
            lineHeight: '1',
            fontWeight: 'normal',
            paddingBottom: '200px' // Much more padding to ensure button has space
          }}
        >
          <p style={{ margin: '0', width: '100%' }}>
            EVERYTHING. EVERY LAYER EXPOSED WITH<br/>PRECISION, EVERY COMPONENT CRAFTED TO BE SEEN, NOT HIDDEN. IT'S A DEVICE BUILT TO CELEBRATE <span style={{ color: '#CCCCCC' }}>TRANSPARENCY</span> — SMTURNING<br/>
            <span style={{ color: '#CCCCCC' }}>COMPLEXITY INTO CLARITY.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechSection;