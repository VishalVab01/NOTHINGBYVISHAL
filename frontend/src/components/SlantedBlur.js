import React from "react";

const SlantedBlur = () => {
  return (
    <div 
      style={{
        position: 'absolute',
        top: '680px', // Move the entire large shape down to overlap COMPLEXITY
        left: '0', // Flush against left side of screen
        width: '100vw', // Cover entire page width
        height: '400px', // Keep it very big as originally requested
        background: 'rgba(180, 36, 36, 0.1)', // Same background as navbar
        clipPath: 'polygon(0% 70%, 30% 100%, 100% 100%, 100% 0%)', // Top slants one way, bottom slants opposite way (right to left)
        backdropFilter: 'blur(10px) saturate(180%)', // Same blur and saturation as navbar
        WebkitBackdropFilter: 'blur(20px) saturate(180%)', // Safari compatibility
        zIndex: 150, // Above the text
        pointerEvents: 'none' // Allows interaction through the element
      }}
    />
  );
};

export default SlantedBlur;