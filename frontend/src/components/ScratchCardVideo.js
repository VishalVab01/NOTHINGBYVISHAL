import React, { useRef, useEffect, useState, useCallback } from 'react';

const ScratchCardVideo = () => {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scratchedAreas, setScratchedAreas] = useState(0);

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Fill canvas with black initially
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    console.log('Canvas initialized:', canvas.width, 'x', canvas.height);
  }, []);

  useEffect(() => {
    initializeCanvas();
    window.addEventListener('resize', initializeCanvas);
    return () => window.removeEventListener('resize', initializeCanvas);
  }, [initializeCanvas]);

  const startScratching = (e) => {
    setIsScratching(true);
    const video = videoRef.current;
    
    // Start video when first scratch begins
    if (!isVideoPlaying && video) {
      video.play().then(() => {
        setIsVideoPlaying(true);
        console.log('Video started playing');
      }).catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    
    scratch(e);
  };

  const scratch = (e) => {
    if (!isScratching) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    // Get coordinates
    let x, y;
    if (e.type === 'mousemove' || e.type === 'mousedown') {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    } else if (e.type === 'touchmove' || e.type === 'touchstart') {
      e.preventDefault();
      const touch = e.touches[0];
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    }

    // Create scratch effect - use destination-out to create transparency
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 60, 0, 2 * Math.PI);
    ctx.fill();
    
    // Reset composite operation for future draws
    ctx.globalCompositeOperation = 'source-over';
    
    // Update scratched areas counter
    setScratchedAreas(prev => prev + 1);
    
    console.log('Scratching at:', x, y);
  };

  const stopScratching = () => {
    setIsScratching(false);
  };

  // Handle both mouse and touch events
  const handleMouseDown = (e) => {
    e.preventDefault();
    startScratching(e);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    scratch(e);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    stopScratching();
  };

  const handleTouchStart = (e) => {
    startScratching(e);
  };

  const handleTouchMove = (e) => {
    scratch(e);
  };

  const handleTouchEnd = () => {
    stopScratching();
  };

  return (
    <div className="scratch-card-container">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="scratch-video-background"
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => console.log('Video loaded')}
        onError={(e) => console.error('Video error:', e)}
      >
        <source src="/videos/nothing-phone-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scratch Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="scratch-canvas"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      
      {/* Instructions */}
      {scratchedAreas < 10 && (
        <div className="scratch-instructions">
          <p>Hold and drag to reveal</p>
        </div>
      )}
    </div>
  );
};

export default ScratchCardVideo;