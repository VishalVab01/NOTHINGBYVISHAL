import React from "react";

const TranslucentPage = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.1), rgba(128, 128, 128, 0.15))', // Gradient translucent background
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5vh 5vw',
      backdropFilter: 'blur(5px)', 
      marginTop: '-250px', // More noticeable blur effect
      zIndex: 1000, // Very high z-index to ensure it's above everything
    }}>
      {/* Vertical Navigation Buttons */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        zIndex: 10001,
      }}>
        {['HOME', 'NOTHINGNEW', 'CMF', 'SHOP'].map((label, index) => (
          <button
            key={label}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontFamily: 'Nothing, Arial, monospace',
              fontSize: '2.5rem',
              fontWeight: 'normal',
              cursor: 'pointer',
              padding: '20px 40px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              position: 'relative',
              opacity: 1,
              transformOrigin: 'center',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#FF0000';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#FFFFFF';
              e.target.style.transform = 'scale(1)';
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TranslucentPage;