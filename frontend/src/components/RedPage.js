import React from "react";

const RedPage = () => {
  // Image positioning configuration - easily adjustable
  const imageConfig = {
    image1: {
      src: "https://customer-assets.emergentagent.com/job_text-replacer-2/artifacts/vlz3i8jt_img2.jpg",
      width: "22vw",  // Adjust size
      height: "auto",
      left: "20%",    // Adjust horizontal position (percentage from left)
      top: "25%",     // Adjust vertical position (percentage from top)
      zIndex: 400,    // Above the text
      opacity: 0.9    // Adjust transparency
    }
  };

  return (
    <div 
      id="redpage"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* PLAY Text */}
      <div style={{
        fontFamily: 'Azonix, monospace',
        fontSize: '28vw',
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'center',
        lineHeight: '0.8',
        letterSpacing: '0.1em',
        userSelect: 'none',
        zIndex: 350
      }}>
        PLAY
      </div>

      {/* Image 1 - Overlapping PLAY text */}
      <img 
        src={imageConfig.image1.src}
        alt="Overlay Image"
        style={{
          position: 'absolute',
          width: imageConfig.image1.width,
          height: imageConfig.image1.height,
          left: imageConfig.image1.left,
          top: imageConfig.image1.top,
          zIndex: imageConfig.image1.zIndex,
          opacity: imageConfig.image1.opacity,
          objectFit: 'contain',
          pointerEvents: 'none' // Prevents interaction issues
        }}
      />
    </div>
  );
};

export default RedPage;