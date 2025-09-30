import { useEffect } from 'react';

// Enhanced smooth scrolling hook
const useSmoothScroll = () => {
  useEffect(() => {
    // Enhanced smooth scroll for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const href = target.getAttribute('href');
        
        if (href === '#') return;
        
        const element = document.querySelector(href);
        if (element) {
          const headerOffset = 100; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add smooth scroll for wheel events (enhanced)
    let isScrolling = false;
    const handleWheel = (e) => {
      if (isScrolling) return;
      
      // Don't interfere with normal scrolling, just ensure it's smooth
      if (!CSS.supports('scroll-behavior', 'smooth')) {
        isScrolling = true;
        const delta = e.deltaY;
        const currentScroll = window.pageYOffset;
        const targetScroll = currentScroll + (delta * 2);
        
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          isScrolling = false;
        }, 16); // ~60fps
      }
    };

    // Add event listeners
    document.addEventListener('click', handleSmoothScroll);
    
    // Only add wheel listener if scroll-behavior is not supported
    if (!CSS.supports('scroll-behavior', 'smooth')) {
      document.addEventListener('wheel', handleWheel, { passive: false });
    }

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      if (!CSS.supports('scroll-behavior', 'smooth')) {
        document.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  // Function to scroll to specific element
  const scrollToElement = (elementId, offset = 100) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to scroll to bottom
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom
  };
};

export default useSmoothScroll;