import React from "react";

const ComeToPlaySection = () => {
  return (
    <div 
      id="cometoplay"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'black',
        zIndex: 300,
        marginTop: '-630px', // Adjust this value to move the section up
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div style={{
        fontFamily: 'Azonix, monospace',
        fontSize: '28vw', // Responsive font size based on viewport width
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'center',
        lineHeight: '0.8',
        letterSpacing: '0.1em',
        userSelect: 'none'
      }}>
        COME
      </div>
    </div>
  );
};

export default ComeToPlaySection;