import React, { useEffect, useState, useRef } from "react";
import { gsap } from 'gsap';
import ScratchCardVideo from "./ScratchCardVideo";

const HeroSection = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const heroRef = useRef(null);
  const centerMessageRef = useRef(null);
  const exploreTextRef = useRef(null);
  const nothingTextRef = useRef(null);

  useEffect(() => {
    // Initialize center message with initial opacity 1 and animate position only
    if (centerMessageRef.current) {
      gsap.set(centerMessageRef.current, { opacity: 1, y: 30 });
      gsap.to(centerMessageRef.current, {
        y: 0,
        duration: 1,
        delay: 3,
        ease: "power2.out"
      });
    }

    // Initialize bottom text animations with 1 second delay and faster animations
    if (exploreTextRef.current && nothingTextRef.current) {
      // Set initial states - both hidden and positioned below
      gsap.set([exploreTextRef.current, nothingTextRef.current], {
        y: 100,
        opacity: 0
      });

      // Animate EXPLORE text first (1 second delay, faster animation)
      gsap.to(exploreTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2, // Faster than original 2s
        delay: 1, // 1 second delay as requested
        ease: "power2.out"
      });

      // Animate NOTHING text slightly after EXPLORE (1.5 second delay total, faster animation)
      gsap.to(nothingTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2, // Faster than original 2s
        delay: 1.5, // 1 second base + 0.5s stagger
        ease: "power2.out"
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show text when hero section is at least 20% visible
          if (entry.intersectionRatio > 0.2) {
            setIsHeroVisible(true);
          } else {
            setIsHeroVisible(false);
          }
        });
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1.0], // Multiple thresholds for smooth transition
        rootMargin: '0px'
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      style={{ 
        height: '100vh', 
        overflow: 'hidden'
      }}>
      {/* Scratch Card Video Background */}
      <ScratchCardVideo />

      {/* Simple center text that should definitely appear */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999999,
        pointerEvents: 'none',
        color: 'white',
        fontSize: '16px',
        fontFamily: 'Nothing, Arial, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)'
      }}>
        WE BELIEVE IN CREATIVITY AND TRANSPARENCY
      </div>

      {/* Bottom Fixed Text - Split Animation - Only visible when in hero section */}
      <div 
        className="bottom-text"
        style={{
          opacity: 1,
          visibility: 'visible',
          transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
        }}
      >
        <div className="bottom-text-content">
          <span ref={exploreTextRef} className="explore-static-gsap">EXPLORE</span>
          <span ref={nothingTextRef} className="nothing-slide-up-gsap">NOTHING</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;