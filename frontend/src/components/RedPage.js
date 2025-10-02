import React from "react";

const RedPage = () => {
  return (
    <div 
      id="redpage"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'red',
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
        color: 'white',
        textAlign: 'center',
        lineHeight: '0.8',
        letterSpacing: '0.1em',
        userSelect: 'none'
      }}>
        RED PAGE
      </div>
    </div>
  );
};

export default RedPage;