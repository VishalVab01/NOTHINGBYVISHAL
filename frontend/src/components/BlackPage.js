import React from "react";

const BlackPage = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000000', // Plain black background
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Optional: You can add content here if needed */}
      <div style={{
        textAlign: 'center',
        color: '#ffffff',
        opacity: 0.1, // Very subtle, almost invisible
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2rem',
        letterSpacing: '2px'
      }}>
        {/* Minimal content to maintain the plain black aesthetic */}
      </div>
    </div>
  );
};

export default BlackPage;