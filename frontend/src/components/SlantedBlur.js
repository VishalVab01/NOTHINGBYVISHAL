import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SlantedBlur = () => {
  const lettersRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (lettersRef.current.length > 0) {
      // Set initial state for all letters - hidden and positioned off-screen to the right
      gsap.set(lettersRef.current, {
        x: 200, // Start far to the right
        opacity: 0,
        scale: 0.8
      });

      // Create scroll trigger for scroll down animation (main animation)
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 50%", // Original trigger point for scroll down
        end: "bottom 30%", 
        onEnter: () => {
          // Animate letters in from right to left (scroll down)
          gsap.to(lettersRef.current, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.05, // Fast stagger - each letter follows 0.05s after previous
            ease: "power3.out"
          });
        },
        onLeave: () => {
          // Animate letters out from left to right (scroll down past trigger)
          gsap.to(lettersRef.current, {
            x: -200, // Exit to the left
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.04, // Slightly faster exit
            ease: "power3.in"
          });
        }
      });

      // Create separate scroll trigger for scroll up animation (opposite animation) - triggers at 60%
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%", // Trigger at 60% for scroll up animations
        end: "bottom 10%",
        onEnterBack: () => {
          // Animate letters in from left to right (scroll up back into view)
          gsap.fromTo(lettersRef.current, 
            {
              x: -200, // Start from left
              opacity: 0,
              scale: 0.8
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              stagger: -0.05, // Negative stagger for reverse order (right to left letters animate first)
              ease: "power3.out"
            }
          );
        },
        onLeaveBack: () => {
          // Animate letters out from right to left (scroll up past trigger)
          gsap.to(lettersRef.current, {
            x: 200, // Exit to the right
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            stagger: -0.04, // Negative stagger for reverse order
            ease: "power3.in"
          });
        }
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Split "TRANSPARENCY" into individual letters
  const text = "TRANSPARENCY";
  const letters = text.split('');

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute', // Use absolute positioning to cover entire page content
        top: '-760px', // Start from the very top
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
      {/* TRANSPARENCY text with individual letter animations */}
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
        textAlign: 'center',
        display: 'flex', // Use flex to position letters inline
        justifyContent: 'center'
      }}>
        {letters.map((letter, index) => (
          <span
            key={index}
            ref={el => lettersRef.current[index] = el}
            style={{
              display: 'inline-block',
              minWidth: letter === ' ' ? '0.5em' : 'auto' // Handle spaces
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default SlantedBlur;
