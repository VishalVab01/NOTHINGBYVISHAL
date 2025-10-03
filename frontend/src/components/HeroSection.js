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
    // Initialize center message hidden and animate both opacity and position after 3 second delay
    if (centerMessageRef.current) {
      gsap.set(centerMessageRef.current, { opacity: 0, y: 30 });
      gsap.to(centerMessageRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 3,
        ease: "power2.out",
        onComplete: () => {
          // After initial animation, the parallax scroll effect takes over
        }
      });
    }

    // Initialize bottom text animations with 1 second delay and faster animations
    if (exploreTextRef.current && nothingTextRef.current) {
      // Set initial states - both hidden and positioned way below (off-screen)
      gsap.set([exploreTextRef.current, nothingTextRef.current], {
        y: 300, // Increased to 300px to ensure text starts completely off-screen on all devices
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

  // Parallax effect for center text
  useEffect(() => {
    const handleScroll = () => {
      if (!centerMessageRef.current) return;
      
      // Get scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Calculate parallax offset (text moves faster than scroll)
      const parallaxSpeed = 1.5; // Multiplier for how fast the text moves
      const parallaxOffset = scrollTop * parallaxSpeed;
      
      // Calculate opacity based on scroll position
      // Fade out as the text moves up
      const maxScroll = windowHeight * 0.8; // Text fully fades by 80% of viewport height
      const opacity = Math.max(0, 1 - (scrollTop / maxScroll));
      
      // Apply transforms with GSAP for smooth animation
      gsap.set(centerMessageRef.current, {
        y: -parallaxOffset,
        opacity: opacity,
        ease: "none"
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once to set initial state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fade out effect for bottom EXPLORENOTHING text
  useEffect(() => {
    const handleBottomTextScroll = () => {
      if (!exploreTextRef.current || !nothingTextRef.current) return;
      
      // Get scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Calculate opacity based on scroll position
      // Start fading out after scrolling 20% of viewport height
      const fadeStartScroll = windowHeight * 0.2;
      // Complete fade out by 100% of viewport height
      const fadeEndScroll = windowHeight * 1.0;
      
      let opacity = 1;
      
      if (scrollTop > fadeStartScroll) {
        const fadeRange = fadeEndScroll - fadeStartScroll;
        const scrollInRange = scrollTop - fadeStartScroll;
        opacity = Math.max(0, 1 - (scrollInRange / fadeRange));
      }
      
      // Apply opacity with GSAP for smooth animation
      gsap.set([exploreTextRef.current, nothingTextRef.current], {
        opacity: opacity,
        ease: "none"
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleBottomTextScroll, { passive: true });
    
    // Call once to set initial state
    handleBottomTextScroll();

    return () => {
      window.removeEventListener('scroll', handleBottomTextScroll);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      style={{ 
        position: 'relative',
        height: '100vh', 
        overflow: 'hidden'
      }}>
      {/* Scratch Card Video Background */}
      <ScratchCardVideo />

      {/* Center text with parallax effect */}
      <div 
        ref={centerMessageRef}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 5,
          pointerEvents: 'none',
          color: 'white',
          fontSize: '16px',
          fontFamily: 'Nothing, Arial, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.7)',
          willChange: 'transform, opacity' // Optimize for animation performance
        }}
      >
        WE BELIEVE IN CREATIVITY AND{' '}
        <span style={{
          fontSize: '20px',
          fontWeight: 'bold'
        }}>
          TRANSPARENCY
        </span>
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