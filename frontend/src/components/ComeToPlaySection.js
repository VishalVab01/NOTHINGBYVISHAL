import React from "react";

const ComeToPlaySection = () => {
  // Image positioning configuration - easily adjustable
  const imageConfig = {
    image1: {
      src: "https://customer-assets.emergentagent.com/job_text-replacer-2/artifacts/8805nl41_img1.jpg",
      width: "25vw",  // Adjust size
      height: "auto",
      left: "15%",    // Adjust horizontal position (percentage from left)
      top: "20%",     // Adjust vertical position (percentage from top)
      zIndex: 400,    // Above the text
      opacity: 0.9    // Adjust transparency
    },
    image2: {
      src: "https://customer-assets.emergentagent.com/job_text-replacer-2/artifacts/1ly8dyxp_img4.jpg", 
      width: "20vw",  // Adjust size
      height: "auto",
      right: "20%",   // Adjust horizontal position (percentage from right)
      bottom: "25%",  // Adjust vertical position (percentage from bottom)
      zIndex: 400,    // Above the text
      opacity: 0.9    // Adjust transparency
    }
  };

  return (
    <div 
      id="cometoplay"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'black',
        zIndex: 300,
        marginTop: '0px', // No margin needed in horizontal container
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* COME Text */}
      <div style={{
        fontFamily: 'Azonix, monospace',
        fontSize: '28vw', // Responsive font size based on viewport width
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'center',
        lineHeight: '0.8',
        letterSpacing: '0.1em',
        userSelect: 'none',
        zIndex: 350
      }}>
        COME
      </div>

      {/* Image 1 - Positioned from left and top */}
      <img 
        src={imageConfig.image1.src}
        alt="Overlay Image 1"
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

      {/* Image 2 - Positioned from right and bottom */}
      <img 
        src={imageConfig.image2.src}
        alt="Overlay Image 2"
        style={{
          position: 'absolute',
          width: imageConfig.image2.width,
          height: imageConfig.image2.height,
          right: imageConfig.image2.right,
          bottom: imageConfig.image2.bottom,
          zIndex: imageConfig.image2.zIndex,
          opacity: imageConfig.image2.opacity,
          objectFit: 'contain',
          pointerEvents: 'none' // Prevents interaction issues
        }}
      />
    </div>
  );
};

export default ComeToPlaySection;