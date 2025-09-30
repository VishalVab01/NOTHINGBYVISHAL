import React, { useEffect, useRef, useState } from 'react';

const ScrollZoomImages = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Image URLs from vision expert
  const images = [
    {
      url: "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaG5vbG9neXxlbnwwfHx8YmxhY2t8MTc1OTIzNTY2NHww&ixlib=rb-4.1.0&q=85",
      alt: "Abstract geometric pattern"
    },
    {
      url: "https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0fGVufDB8fHxibGFja3wxNzU5MjM1NjY5fDA&ixlib=rb-4.1.0&q=85",
      alt: "Abstract minimalist form"
    },
    {
      url: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxkYXJrJTIwdGVjaG5vbG9neXxlbnwwfHx8YmxhY2t8MTc1OTIzNTY2NHww&ixlib=rb-4.1.0&q=85",
      alt: "Digital visualization"
    },
    {
      url: "https://images.unsplash.com/photo-1504418682362-6ad6257cb2fb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0fGVufDB8fHxibGFja3wxNzU5MjM1NjY5fDA&ixlib=rb-4.1.0&q=85",
      alt: "Falling tube lights"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate zoom and position based on scroll
  const getImageStyles = (index) => {
    const baseScale = 2.0; // Increased base scale for more visibility
    const scrollFactor = scrollY * 0.002; // Increased scroll factor
    const staggerDelay = index * 0.1;
    
    // Different zoom speeds for each image
    const zoomSpeed = 0.8 + (index * 0.2);
    const scale = baseScale - (scrollFactor * zoomSpeed) - staggerDelay;
    
    // Parallax effect
    const translateY = scrollY * (0.05 + index * 0.02);
    
    // Ensure minimum visibility
    const finalScale = Math.max(0.5, scale);
    const finalOpacity = Math.max(0.4, Math.min(1, scale));
    
    return {
      transform: `scale(${finalScale}) translateY(${translateY}px)`,
      opacity: finalOpacity,
      transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
    };
  };

  return (
    <div ref={containerRef} className="scroll-zoom-container">
      {images.map((image, index) => (
        <div key={index} className={`scroll-zoom-image-wrapper image-${index + 1}`}>
          <div 
            className="scroll-zoom-image"
            style={getImageStyles(index)}
          >
            <img 
              src={img.url} 
              alt={image.alt}
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollZoomImages;