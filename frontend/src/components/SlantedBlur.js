import React from "react";

const SlantedBlur = () => {
  return (
    <div 
      style={{
        position: 'absolute', // Use absolute positioning to cover entire page content
        top: '0', // Start from the very top
        left: '0', // Flush against left side of screen  
        width: '100vw', // Cover entire page width
        height: '110vh', // Cover entire page content (much taller than viewport)
        background: 'rgba(180, 36, 36, 0.1)', // Same background as navbar
        clipPath: 'polygon(0% 20%, 100% 5%, 100% 95%, 0% 80%)', // Top slants right-to-left (right higher), bottom slants left-to-right (left higher)
        backdropFilter: 'blur(10px) saturate(180%)', // Same blur and saturation as navbar
        WebkitBackdropFilter: 'blur(20px) saturate(180%)', // Safari compatibility
        zIndex: 150, // Above the text
        pointerEvents: 'none' // Allows interaction through the element
      }}
    />
  );
};

export default SlantedBlur;
