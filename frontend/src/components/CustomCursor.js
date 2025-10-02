import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Plus cursor (crosshair) */}
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          pointerEvents: 'none',
          zIndex: 10000,
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
      
      {/* Earbud cursor on the right - using PNG image in original black form */}
      <img
        src="/earbudBlack.png"
        alt=""
        style={{
          position: 'fixed',
          left: position.x + 25, // 25px to the right of the plus cursor
          top: position.y,
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(0, -50%)',
          width: '120px',
          height: '120px',
        }}
      />
    </>
  );
};

export default CustomCursor;