import { useEffect, useRef, useCallback } from 'react';

// Custom hook for very slow scroll animation with smooth transitions
const useSlowScrollAnimation = () => {
  const scrollAnimationRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);

  // Configuration for scroll animation
  const config = {
    // 60% of normal scroll speed for smooth animation
    scrollSpeed: 0.8, // Faster for 60% effective speed
    // Less friction for more responsive feel
    friction: 0.82, // Lower friction for better responsiveness
    // Minimum movement threshold
    threshold: 0.5, // Higher threshold to avoid micro-movements
    // Special slow zone for page transition (around 100vh)
    transitionZoneStart: window.innerHeight * 0.7, // 70vh 
    transitionZoneEnd: window.innerHeight * 1.3,   // 130vh 
    transitionScrollSpeed: 0.6, // 60% speed in transition zone (same as overall)
  };

  // Smooth scroll animation function using requestAnimationFrame
  const animate = useCallback(() => {
    const current = currentScrollRef.current;
    const target = targetScrollRef.current;
    const diff = target - current;

    // Check if we're in the transition zone (where page overlap happens)
    const inTransitionZone = current >= config.transitionZoneStart && 
                            current <= config.transitionZoneEnd;
    
    // Use different speed based on zone
    const speed = inTransitionZone ? config.transitionScrollSpeed : config.scrollSpeed;
    
    if (Math.abs(diff) > config.threshold) {
      // Apply easing with different speeds
      currentScrollRef.current += diff * speed;
      
      // Apply the scroll to the window
      window.scrollTo(0, currentScrollRef.current);
      
      // Continue animation
      scrollAnimationRef.current = requestAnimationFrame(animate);
    } else {
      // Animation complete
      currentScrollRef.current = target;
      window.scrollTo(0, target);
      isAnimatingRef.current = false;
      
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
        scrollAnimationRef.current = null;
      }
    }
  }, [config.friction, config.threshold, config.scrollSpeed, config.transitionScrollSpeed, config.transitionZoneStart, config.transitionZoneEnd]);

  // Start scroll animation to target position
  const scrollTo = useCallback((targetY, options = {}) => {
    const { duration = null, easing = 'easeOut' } = options;
    
    // Cancel any existing animation
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }
    
    // Set new target
    targetScrollRef.current = Math.max(0, Math.min(targetY, document.documentElement.scrollHeight - window.innerHeight));
    currentScrollRef.current = window.pageYOffset;
    
    // Start animation
    isAnimatingRef.current = true;
    scrollAnimationRef.current = requestAnimationFrame(animate);
  }, [animate]);

  // Handle wheel events for custom scroll behavior
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    
    // Don't start new animation if one is in progress
    if (isAnimatingRef.current) {
      return;
    }
    
    // Get scroll delta (normalized across different devices)
    let deltaY = e.deltaY;
    
    // Normalize different scroll types
    if (e.deltaMode === 1) {
      // DOM_DELTA_LINE
      deltaY *= 16;
    } else if (e.deltaMode === 2) {
      // DOM_DELTA_PAGE
      deltaY *= window.innerHeight;
    }
    
    // Apply scroll multiplier for 60% normal speed
    const scrollMultiplier = 0.6; // 60% of normal speed
    deltaY *= scrollMultiplier;
    
    // Get current position
    const currentY = window.pageYOffset;
    
    // Calculate new target position
    let newTarget = currentY + deltaY;
    
    // Constrain to document bounds
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    newTarget = Math.max(0, Math.min(newTarget, maxScroll));
    
    // Start smooth animation to target
    scrollTo(newTarget);
  }, [scrollTo]);

  // Handle touch events for mobile (with slow animation)
  const handleTouchStart = useRef({ y: 0, time: 0 });
  const handleTouchMove = useCallback((e) => {
    if (isAnimatingRef.current) {
      e.preventDefault();
      return;
    }
    
    const touch = e.touches[0];
    const deltaY = handleTouchStart.current.y - touch.clientY;
    const deltaTime = Date.now() - handleTouchStart.current.time;
    
    if (deltaTime < 16) return; // Throttle touch events
    
    // Apply touch scroll with slow animation
    const currentY = window.pageYOffset;
    const scrollMultiplier = 0.7; // Adjusted for 60% speed on touch
    let newTarget = currentY + (deltaY * scrollMultiplier);
    
    // Constrain bounds
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    newTarget = Math.max(0, Math.min(newTarget, maxScroll));
    
    scrollTo(newTarget);
    
    // Update touch reference
    handleTouchStart.current = { y: touch.clientY, time: Date.now() };
    e.preventDefault();
  }, [scrollTo]);

  const handleTouchStartEvent = useCallback((e) => {
    const touch = e.touches[0];
    handleTouchStart.current = { y: touch.clientY, time: Date.now() };
  }, []);

  // Keyboard scroll handling
  const handleKeyDown = useCallback((e) => {
    if (isAnimatingRef.current) return;
    
    const currentY = window.pageYOffset;
    const viewport = window.innerHeight;
    let newTarget = currentY;
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        newTarget = currentY + viewport * 0.1; // Small increment
        break;
      case 'ArrowUp':
        e.preventDefault();
        newTarget = currentY - viewport * 0.1; // Small decrement
        break;
      case 'PageDown':
        e.preventDefault();
        newTarget = currentY + viewport * 0.8; // Larger increment
        break;
      case 'PageUp':
        e.preventDefault();
        newTarget = currentY - viewport * 0.8; // Larger decrement
        break;
      case 'Home':
        e.preventDefault();
        newTarget = 0;
        break;
      case 'End':
        e.preventDefault();
        newTarget = document.documentElement.scrollHeight - window.innerHeight;
        break;
      default:
        return; // Don't handle other keys
    }
    
    scrollTo(newTarget);
  }, [scrollTo]);

  // Initialize and cleanup
  useEffect(() => {
    // Initialize current scroll position
    currentScrollRef.current = window.pageYOffset;
    targetScrollRef.current = window.pageYOffset;
    
    // Add event listeners with passive: false to allow preventDefault
    const wheelOptions = { passive: false, capture: true };
    const touchOptions = { passive: false };
    
    document.addEventListener('wheel', handleWheel, wheelOptions);
    document.addEventListener('touchstart', handleTouchStartEvent, touchOptions);
    document.addEventListener('touchmove', handleTouchMove, touchOptions);
    document.addEventListener('keydown', handleKeyDown);
    
    // Disable default scroll behavior
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    return () => {
      // Cleanup
      document.removeEventListener('wheel', handleWheel, wheelOptions);
      document.removeEventListener('touchstart', handleTouchStartEvent, touchOptions);
      document.removeEventListener('touchmove', handleTouchMove, touchOptions);
      document.removeEventListener('keydown', handleKeyDown);
      
      // Cancel any ongoing animation
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
      
      // Restore default scroll behavior
      document.documentElement.style.scrollBehavior = 'smooth';
      document.body.style.scrollBehavior = 'smooth';
    };
  }, [handleWheel, handleTouchMove, handleTouchStartEvent, handleKeyDown]);

  // Expose scroll function for external use
  const scrollToElement = useCallback((elementId, offset = 100) => {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const targetY = window.pageYOffset + rect.top - offset;
      scrollTo(targetY);
    }
  }, [scrollTo]);

  const scrollToTop = useCallback(() => {
    scrollTo(0);
  }, [scrollTo]);

  const scrollToBottom = useCallback(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    scrollTo(maxScroll);
  }, [scrollTo]);

  return {
    scrollTo,
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    isAnimating: () => isAnimatingRef.current
  };
};

export default useSlowScrollAnimation;