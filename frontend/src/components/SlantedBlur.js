import React from "react";

const SlantedBlur = () => {
  return (
    <div 
      style={{
        position: 'absolute', // Use absolute positioning to cover entire page content
        top: '630px', // Start from the very top
        left: '0', // Flush against left side of screen  
        width: '100vw', // Cover entire page width
        height: '110vh', // Cover entire page content (much taller than viewport)
        background: 'rgba(58, 58, 58, 0.1)', // Same background as navbar
        clipPath: 'polygon(0% 32%, 100% 5%, 100% 95%, 0% 68%)', // Top slants right-to-left (right higher), bottom slants left-to-right (left higher)
        backdropFilter: 'blur(10px) saturate(180%)', // Same blur and saturation as navbar
        WebkitBackdropFilter: 'blur(20px) saturate(180%)', // Safari compatibility
        zIndex: 150, // Above the text
        pointerEvents: 'none', // Allows interaction through the element
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* TRANSPARENCY text in the middle of blur shape */}
      <h1 style={{
        fontFamily: 'Azonix-new, Azonix, Arial, sans-serif',
        fontSize: 'clamp(60px, 8vw, 120px)',
        lineHeight: '1.1',
        fontWeight: 'normal',
        color: '#FF6B35', // Orange color as requested
        margin: '0',
        textTransform: 'uppercase',
        letterSpacing: '8px',
        pointerEvents: 'auto', // Re-enable pointer events for the text
        textAlign: 'center'
      }}>
        TRANSPARENCY
      </h1>
    </div>
  );
};

export default SlantedBlur;
