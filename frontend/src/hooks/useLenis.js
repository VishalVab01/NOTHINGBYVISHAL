import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

// Lenis smooth scroll hook optimized for enhanced smoothness and performance
const useLenis = () => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings for enhanced smoothness
    lenisRef.current = new Lenis({
      duration: 1.5, // Slightly longer duration for smoother feel (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function (expo out)
      orientation: 'vertical', // Vertical scrolling
      gestureOrientation: 'vertical', // Gesture orientation
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
      smoothTouch: false, // Disable smooth scrolling for touch (better performance on mobile)
      wheelMultiplier: 0.8, // Reduced multiplier for finer control and smoother scrolling
      touchMultiplier: 1.5, // Reduced touch multiplier for better mobile experience
      infinite: false, // Disable infinite scrolling
      normalizeWheel: true, // Normalize wheel events across browsers
      lerp: 0.05, // Lower lerp value for increased smoothness (0.02-0.1 range)
    });

    // Animation function
    function raf(time) {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    // Start the animation loop
    rafRef.current = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisRef.current?.destroy();
    };
  }, []);

  // Expose useful Lenis methods
  const scrollTo = (target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  const scrollToElement = (elementId, offset = 100) => {
    const element = document.getElementById(elementId);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: -offset,
        duration: 1.8, // Increased duration for smoother element navigation
      });
    }
  };

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 2.0 }); // Smoother scroll to top
    }
  };

  const scrollToBottom = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(document.documentElement.scrollHeight, { duration: 2.0 }); // Smoother scroll to bottom
    }
  };

  const stop = () => {
    lenisRef.current?.stop();
  };

  const start = () => {
    lenisRef.current?.start();
  };

  return {
    lenis: lenisRef.current,
    scrollTo,
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    stop,
    start,
  };
};

export default useLenis;