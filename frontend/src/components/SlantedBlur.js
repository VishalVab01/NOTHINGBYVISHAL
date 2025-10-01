import React from "react";

const SlantedBlur = () => {
  return (
    <div 
      style={{
        position: 'absolute',
        top: '660px', // Move the entire large shape down further
        left: '0', // Flush against left side of screen
        width: '100vw', // Cover entire page width
        height: '590px', // Increased height to create more gap between the slanted lines
        background: 'rgba(180, 36, 36, 0.1)', // Same background as navbar
        clipPath: 'polygon(0% 40%, 100% 0%, 100% 70%, 0% 90%)', // Top line slants down-right, bottom line slants with right side higher than left side
        backdropFilter: 'blur(10px) saturate(180%)', // Same blur and saturation as navbar
        WebkitBackdropFilter: 'blur(20px) saturate(180%)', // Safari compatibility
        zIndex: 150, // Above the text
        pointerEvents: 'none' // Allows interaction through the element
      }}
    />
  );
};

export default SlantedBlur;
