import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

// Lenis smooth scroll hook for performant scrolling
const useLenis = () => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings for performance
    lenisRef.current = new Lenis({
      duration: 1.2, // Duration of the scroll animation (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function (expo out)
      orientation: 'vertical', // Vertical scrolling
      gestureOrientation: 'vertical', // Gesture orientation
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
      smoothTouch: false, // Disable smooth scrolling for touch (better performance on mobile)
      wheelMultiplier: 1, // Multiplier for wheel events
      touchMultiplier: 2, // Multiplier for touch events
      infinite: false, // Disable infinite scrolling
      normalizeWheel: true, // Normalize wheel events across browsers
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
        duration: 1.2,
      });
    }
  };

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.5 });
    }
  };

  const scrollToBottom = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(document.documentElement.scrollHeight, { duration: 1.5 });
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