import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScatteredImages.css';

// Register ScrollTrigger plugin and attach to window for debugging
gsap.registerPlugin(ScrollTrigger);

// Make GSAP available globally for debugging
if (typeof window !== 'undefined') {
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
}


const ScatteredImages = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  // Image URLs from uploaded assets
  const images = [
    // Left side images (2 images)
    {
      url: "https://customer-assets.emergentagent.com/job_smooth-scroll-17/artifacts/fumq7h3r_Screenshot%202025-10-01%20021056.png",
      position: { top: '20%', left: '5%', rotate: '-12deg' },
      side: 'left'
    },
    {
      url: "https://customer-assets.emergentagent.com/job_smooth-scroll-17/artifacts/w15cm22k_Screenshot%202025-10-01%20021120.png",
      position: { top: '65%', left: '8%', rotate: '15deg' },
      side: 'left'
    },
    // Right side images (3 images)
    {
      url: "https://customer-assets.emergentagent.com/job_smooth-scroll-17/artifacts/jvmwbxaj_Screenshot%202025-10-01%20021130.png",
      position: { top: '15%', right: '12%', rotate: '8deg' },
      side: 'right'
    },
    {
      url: "https://customer-assets.emergentagent.com/job_smooth-scroll-17/artifacts/fn5fp6c5_Screenshot%202025-10-01%20021144.png",
      position: { top: '45%', right: '8%', rotate: '-8deg' },
      side: 'right'
    },
    {
      url: "https://customer-assets.emergentagent.com/job_smooth-scroll-17/artifacts/8khxffu5_Screenshot%202025-10-01%20021200.png",
      position: { top: '75%', right: '15%', rotate: '5deg' },
      side: 'right'
    }
  ];

  useEffect(() => {
    if (!containerRef.current) {
      console.warn('ScatteredImages: Container ref not available');
      return;
    }

    console.log('ScatteredImages: Initializing GSAP animations for', images.length, 'images');

    try {
      // Clear any existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Create timeline for each image
      imageRefs.current.forEach((imageRef, index) => {
        if (!imageRef) {
          console.warn(`ScatteredImages: Image ref ${index} not available`);
          return;
        }

        const image = images[index];
        const isLeftSide = image.side === 'left';
        
        console.log(`Setting up animation for image ${index} (${isLeftSide ? 'left' : 'right'} side)`);

        // Set initial state
        gsap.set(imageRef, {
          scale: 1,
          x: 0,
          y: 0,
          rotation: parseFloat(image.position.rotate),
          transformOrigin: 'center center'
        });

        // Create scroll-triggered animation
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current.parentElement, // The first section
            start: "top top",
            end: "bottom top",
            scrub: 1.5, // Smooth scrubbing effect
            onUpdate: (self) => {
              const progress = self.progress;
              
              // Calculate scale (grows from 1 to 2.5 as we scroll)
              const scale = 1 + (progress * 1.5);
              
              // Calculate horizontal movement
              const moveDistance = progress * (isLeftSide ? -400 : 400);
              
              // Calculate opacity (stays 1 until 70% progress, then fades out)
              const opacity = progress < 0.7 ? 1 : 1 - ((progress - 0.7) / 0.3);
              
              // Dynamic z-index: increase during animation to ensure overlap
              // Higher z-index for images that move more (especially bottom right image)
              const baseZIndex = 1500;
              const dynamicZIndex = baseZIndex + Math.floor(progress * 100) + (index * 10);
              
              // Apply transformations
              gsap.set(imageRef, {
                scale: scale,
                x: moveDistance,
                opacity: Math.max(0, opacity),
                rotation: parseFloat(image.position.rotate) + (progress * (isLeftSide ? -30 : 30)),
                zIndex: dynamicZIndex
              });
            }
          }
        });
      });

      console.log('ScatteredImages: All animations initialized successfully');
      console.log('Active ScrollTriggers:', ScrollTrigger.getAll().length);

    } catch (error) {
      console.error('ScatteredImages: Error initializing animations:', error);
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [images]);

  return (
    <div ref={containerRef} className="scattered-images-container">
      {images.map((image, index) => (
        <div
          key={index}
          ref={el => imageRefs.current[index] = el}
          className={`scattered-image scattered-image-${index + 1}`}
          style={{
            position: 'absolute',
            ...image.position,
            transform: `rotate(${image.position.rotate})`,
            zIndex: 1500 + (index * 10), // Higher base z-index, with stacking order
            '--rotate': image.position.rotate,
            '--float-delay': `${index * 0.5}s`
          }}
        >
          <div className="image-wrapper">
            <img
              src={image.url}
              alt={`Nothing showcase ${index + 1}`}
              className="scattered-img"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScatteredImages;