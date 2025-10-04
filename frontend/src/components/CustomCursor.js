import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [plusPosition, setPlusPosition] = useState({ x: 0, y: 0 });
  const [earbudPosition, setEarbudPosition] = useState({ x: 40, y: 0 });
  const animationFrameRef = useRef();
  const velocityRef = useRef({ x: 0, y: 0 });
  const initializedRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPlusPosition({ x: e.clientX, y: e.clientY });
      
      // Initialize earbud position on first mouse move
      if (!initializedRef.current) {
        setEarbudPosition({ x: e.clientX + 40, y: e.clientY });
        initializedRef.current = true;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Physics animation for earbud cursor
  useEffect(() => {
    const animate = () => {
      setEarbudPosition(prevPosition => {
        // Target position is 40px to the right of plus cursor for more visible separation
        const targetX = plusPosition.x + 40;
        const targetY = plusPosition.y;
        
        // Calculate the difference between current and target position
        const deltaX = targetX - prevPosition.x;
        const deltaY = targetY - prevPosition.y;
        
        // Physics parameters - tuned for dramatic delay and smooth trailing
        const spring = 0.03; // Even lower spring strength for very slow following
        const friction = 0.7; // Lower friction for more bouncy, fluid motion
        
        // Apply spring force to velocity
        velocityRef.current.x += deltaX * spring;
        velocityRef.current.y += deltaY * spring;
        
        // Apply friction to velocity
        velocityRef.current.x *= friction;
        velocityRef.current.y *= friction;
        
        // Update position
        const newX = prevPosition.x + velocityRef.current.x;
        const newY = prevPosition.y + velocityRef.current.y;
        
        return { x: newX, y: newY };
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [plusPosition]);

  return (
    <>
      {/* Plus cursor (crosshair) - follows mouse directly */}
      <div
        style={{
          position: 'fixed',
          left: plusPosition.x,
          top: plusPosition.y,
          pointerEvents: 'none',
          zIndex: 55000,
          transform: 'translate(-50%, -50%)',
          width: '20px',
          height: '20px',
          mixBlendMode: 'difference'
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '2px',
            height: '20px',
            backgroundColor: '#fff',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20px',
            height: '2px',
            backgroundColor: '#fff',
          }}
        />
      </div>
      
      {/* Earbud cursor - follows plus cursor with smooth physics */}
      <img
        src="/earbudBlack.png"
        alt=""
        style={{
          position: 'fixed',
          left: earbudPosition.x,
          top: earbudPosition.y,
          pointerEvents: 'none',
          zIndex: 55000,
          transform: 'translate(0, -50%)',
          width: '120px',
          height: '120px',
          transition: 'none', // Disable CSS transitions as we're using physics
        }}
      />
    </>
  );
};

export default CustomCursor;