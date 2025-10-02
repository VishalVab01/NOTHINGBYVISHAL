import React from "react";

const WhitePage = () => {
  return (
    <div 
      id="whitepage"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{
        fontFamily: 'Azonix, monospace',
        fontSize: '8vw',
        fontWeight: 'normal',
        color: 'black',
        textAlign: 'center',
        lineHeight: '0.8',
        letterSpacing: '0.1em',
        userSelect: 'none'
      }}>
        WHITE PAGE
      </div>
    </div>
  );
};

export default WhitePage;