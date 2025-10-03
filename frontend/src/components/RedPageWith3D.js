import React from 'react';


const RedPageWith3D = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#FF0000', // Red background
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 250, // Higher z-index to overlap transparency section (zIndex: 200)
      marginTop: '-80vh' // Move up to overlap the transparency section completely
    }}>
      {/* Content area - 3D model removed */}
      <div style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Empty content area - can add other content here if needed */}
      </div>
      {/* Text overlay removed */}
    </div>
  );
};

// 3D model preload removed

export default RedPageWith3D;