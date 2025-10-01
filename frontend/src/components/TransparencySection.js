import React from "react";

const TransparencySection = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: '#000000', // Plain black background - nothing else as requested
      color: '#FFFFFF',
      position: 'relative',
      zIndex: 1, // Lower z-index to not interfere with blur shape
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '200px' // Add margin to ensure it appears below blur shape area
    }}>
      <div style={{
        textAlign: 'center',
        width: '100%'
      }}>
        {/* Main TRANSPARENCY Heading - only this, nothing else */}
        <h1 style={{
          fontFamily: 'Azonix-new, Azonix, Arial, sans-serif',
          fontSize: 'clamp(60px, 8vw, 120px)',
          lineHeight: '1.1',
          fontWeight: 'normal',
          color: '#FF6B35', // Orange color
          margin: '0',
          textTransform: 'uppercase',
          letterSpacing: '8px'
        }}>
          TRANSPARENCY
        </h1>
      </div>
    </div>
  );
};

export default TransparencySection;