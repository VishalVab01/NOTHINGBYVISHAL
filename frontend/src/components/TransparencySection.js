import React, { useRef } from "react";
import SlantedBlur from "./SlantedBlur";

const TransparencySection = () => {
  const sectionRef = useRef(null);

  return (
    <div 
      ref={sectionRef}
      className="transparency-wrapper"
      style={{ 
        position: 'relative',
        width: '100vw',
        transform: 'translateY(0)',
        transition: 'none', // Removed fixed transition for smooth scroll-based animation
        zIndex: 200 // Higher z-index to slide over tech section
      }}
    >
      {/* Original transparency section content */}
      <div style={{ 
        minHeight: '100vh',
        background: '#000000', // Plain black background - nothing else as requested
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 1, // Lower z-index to not interfere with blur shape
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '200px' // Add margin to ensure it appears below blur shape area
      }}>
        <div style={{
          textAlign: 'center',
          width: '100%'
        }}>
          {/* Main TRANSPARENCY Heading - only this, nothing else */}
          <h1 style={{
            fontFamily: 'Azonix-new, Azonix, Arial, sans-serif',
            fontSize: 'clamp(60px, 8vw, 120px)',
            lineHeight: '1.1',
            fontWeight: 'normal',
            color: '#FF6B35', // Orange color
            margin: '0',
            textTransform: 'uppercase',
            letterSpacing: '8px'
          }}>
            TRANSPARENCY
          </h1>
        </div>
      </div>

      {/* SlantedBlur component moved from TechSection */}
      <SlantedBlur />
      
      {/* Fourth Section - Full Screen Image at Bottom moved from HomePage */}
      <div style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 99, // High z-index to ensure it appears above other elements
        marginTop: '-962px' // Move the image section up
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
    </div>
  );
};

export default TransparencySection;