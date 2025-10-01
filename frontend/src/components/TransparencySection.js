import React from "react";

const TransparencySection = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#000000',
      padding: '80px 40px 40px',
      color: '#FFFFFF',
      position: 'relative',
      zIndex: 100,
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '1200px',
        width: '100%'
      }}>
        {/* Main TRANSPARENCY Heading */}
        <h1 style={{
          fontFamily: 'Azonix-new, Azonix, Arial, sans-serif',
          fontSize: '120px',
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