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
        marginTop: '-1055px' // Move the image section up
      }}>
        <img 
          src="/nothing_phone_image.jpg"
          alt="Person with Nothing phone"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top', // Shift image to show more of the top part
            display: 'block',
            clipPath: 'polygon(0% 0%, 100% 30%, 100% 75%, 0% 75%)' // Crop from bottom in straight line
          }}
        />
      </div>
    </div>
  );
};

export default TransparencySection;