import React, { useEffect, useRef, useState, useCallback } from 'react';

const FlappyBird = () => {
  const canvasRef = useRef(null);
  const gameStateRef = useRef({
    bird: { x: 100, y: 300, velocity: 0, size: 24, lastJumpTime: 0 }, // Added jump timing
    pipes: [],
    clouds: [],
    score: 0,
    gameStarted: false,
    gameOver: false,
    lastTime: 0
  });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const animationRef = useRef();

  // Game constants
  const GRAVITY = 0.15; // Much slower gravity for easier gameplay
  const JUMP_STRENGTH = -6; // Strong enough jump for easy control
  const MAX_FALL_SPEED = 4; // Terminal velocity to prevent rapid falling
  const PIPE_WIDTH = 80;
  const PIPE_GAP = 200;
  const PIPE_SPEED = 3;

  const resetGame = useCallback(() => {
    const gameState = gameStateRef.current;
    gameState.bird = { x: 100, y: 300, velocity: 0, size: 24, lastJumpTime: 0 }; // Updated with jump timing
    gameState.pipes = [];
    gameState.clouds = [];
    gameState.score = 0;
    gameState.gameStarted = false;
    gameState.gameOver = false;
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
  }, []);

  const jump = useCallback(() => {
    if (!gameStateRef.current.gameStarted) {
      gameStateRef.current.gameStarted = true;
      setGameStarted(true);
    }
    if (!gameStateRef.current.gameOver) {
      const currentTime = Date.now();
      const timeSinceLastJump = currentTime - gameStateRef.current.bird.lastJumpTime;
      
      // Improved jump mechanics - more forgiving
      if (gameStateRef.current.bird.velocity > 1) {
        // If bird is falling fast, give strong lift
        gameStateRef.current.bird.velocity = JUMP_STRENGTH * 1.5;
      } else if (gameStateRef.current.bird.velocity > -2) {
        // If bird is hovering or falling slowly, gentle lift
        gameStateRef.current.bird.velocity = JUMP_STRENGTH;
      } else {
        // If bird is already rising, small boost
        gameStateRef.current.bird.velocity = JUMP_STRENGTH * 0.7;
      }
      
      // Cap upward velocity
      if (gameStateRef.current.bird.velocity < -7) {
        gameStateRef.current.bird.velocity = -7;
      }
      
      gameStateRef.current.bird.lastJumpTime = currentTime;
    }
  }, []);

  const createPipe = (x) => ({
    x,
    topHeight: Math.random() * 300 + 50,
    scored: false
  });

  const createCloud = (x) => ({
    x,
    y: Math.random() * 200 + 50,
    speed: 0.5 + Math.random() * 0.5,
    size: 30 + Math.random() * 20
  });

  // Draw pixelated bird
  const drawPixelatedBird = (ctx, x, y) => {
    const birdX = Math.floor(x);
    const birdY = Math.floor(y);
    
    ctx.fillStyle = '#FFFFFF';
    
    // Bird body (main rectangle)
    ctx.fillRect(birdX, birdY + 6, 20, 12);
    
    // Bird head
    ctx.fillRect(birdX + 16, birdY + 2, 8, 10);
    
    // Beak
    ctx.fillRect(birdX + 24, birdY + 6, 4, 4);
    
    // Wing
    ctx.fillRect(birdX + 2, birdY + 8, 12, 6);
    
    // Tail
    ctx.fillRect(birdX - 4, birdY + 10, 6, 4);
    
    // Eye (black dot)
    ctx.fillStyle = '#000000';
    ctx.fillRect(birdX + 18, birdY + 4, 2, 2);
  };

  // Draw pixelated pipe
  const drawPixelatedPipe = (ctx, x, y, width, height) => {
    const pipeX = Math.floor(x);
    const pipeY = Math.floor(y);
    
    ctx.fillStyle = '#FFFFFF';
    
    // Main pipe body
    ctx.fillRect(pipeX, pipeY, width, height);
    
    // Add pixelated texture lines
    ctx.fillStyle = '#CCCCCC';
    for (let i = 0; i < height; i += 12) {
      ctx.fillRect(pipeX + 4, pipeY + i, 2, 8);
      ctx.fillRect(pipeX + width - 6, pipeY + i, 2, 8);
    }
    
    // Pipe cap
    ctx.fillStyle = '#FFFFFF';
    if (y === 0) { // Top pipe
      ctx.fillRect(pipeX - 4, pipeY + height - 16, width + 8, 16);
    } else { // Bottom pipe
      ctx.fillRect(pipeX - 4, pipeY, width + 8, 16);
    }
  };

  // Draw pixelated cloud
  const drawPixelatedCloud = (ctx, x, y, size) => {
    const cloudX = Math.floor(x);
    const cloudY = Math.floor(y);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    
    // Cloud body (multiple rectangles for puffy effect)
    ctx.fillRect(cloudX, cloudY + size/4, size, size/2);
    ctx.fillRect(cloudX + size/4, cloudY, size/2, size/2);
    ctx.fillRect(cloudX + size/6, cloudY + size/6, size * 2/3, size/3);
    ctx.fillRect(cloudX + size/3, cloudY + size/3, size/3, size/4);
  };

  const gameLoop = useCallback((currentTime) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const gameState = gameStateRef.current;
    
    // Disable anti-aliasing for pixelated effect
    ctx.imageSmoothingEnabled = false;
    
    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (!gameState.gameStarted) {
      // Draw start screen
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '40px Nothing, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '3px';
      ctx.fillText('FLAPPY BIRD', canvas.width / 2, canvas.height / 2 - 50);
      ctx.font = '20px Nothing, Arial, sans-serif';
      ctx.letterSpacing = '2px';
      ctx.fillText('CLICK OR SPACE TO START', canvas.width / 2, canvas.height / 2 + 20);
      
      // Draw pixelated bird
      drawPixelatedBird(ctx, gameState.bird.x, gameState.bird.y);
      
      animationRef.current = requestAnimationFrame(gameLoop);
      return;
    }

    if (gameState.gameOver) {
      // Draw game over screen
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '40px Nothing, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '3px';
      ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 50);
      ctx.font = '20px Nothing, Arial, sans-serif';
      ctx.letterSpacing = '2px';
      ctx.fillText(`SCORE: ${gameState.score}`, canvas.width / 2, canvas.height / 2);
      ctx.fillText('CLICK OR SPACE TO RESTART', canvas.width / 2, canvas.height / 2 + 40);
      return;
    }

    // Update bird physics with much improved mechanics
    gameState.bird.velocity += GRAVITY;
    
    // Apply terminal velocity to prevent rapid falling
    if (gameState.bird.velocity > MAX_FALL_SPEED) {
      gameState.bird.velocity = MAX_FALL_SPEED;
    }
   
    
    // Gentle upward drift when nearly stationary (makes it easier to hover)
    if (Math.abs(gameState.bird.velocity) < 0.5) {
      gameState.bird.velocity -= 0.05; // Very slight upward force
    }
    
    gameState.bird.y += gameState.bird.velocity;

    // Create new pipes
    if (gameState.pipes.length === 0 || gameState.pipes[gameState.pipes.length - 1].x < canvas.width - 300) {
      gameState.pipes.push(createPipe(canvas.width));
    }

   

    // Update pipes
    for (let i = gameState.pipes.length - 1; i >= 0; i--) {
      const pipe = gameState.pipes[i];
      pipe.x -= PIPE_SPEED;

      // Remove pipes that are off screen
      if (pipe.x + PIPE_WIDTH < 0) {
        gameState.pipes.splice(i, 1);
        continue;
      }

      // Check for scoring
      if (!pipe.scored && pipe.x + PIPE_WIDTH < gameState.bird.x) {
        pipe.scored = true;
        gameState.score++;
        setScore(gameState.score);
      }

      // Draw pixelated pipes
      // Top pipe
      drawPixelatedPipe(ctx, pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
      // Bottom pipe
      drawPixelatedPipe(ctx, pipe.x, pipe.topHeight + PIPE_GAP, PIPE_WIDTH, canvas.height - pipe.topHeight - PIPE_GAP);

      // Check collision with pipes (adjusted for bird shape)
      const birdWidth = 28; // Approximate width of pixelated bird
      const birdHeight = 18; // Approximate height of pixelated bird
      if (
        gameState.bird.x < pipe.x + PIPE_WIDTH &&
        gameState.bird.x + birdWidth > pipe.x &&
        (gameState.bird.y < pipe.topHeight || gameState.bird.y + birdHeight > pipe.topHeight + PIPE_GAP)
      ) {
        gameState.gameOver = true;
        setGameOver(true);
        return;
      }
    }

    // Check collision with ground/ceiling
    if (gameState.bird.y + gameState.bird.size > canvas.height || gameState.bird.y < 0) {
      gameState.gameOver = true;
      setGameOver(true);
      return;
    }

    // Draw pixelated bird
    drawPixelatedBird(ctx, gameState.bird.x, gameState.bird.y);

    // Draw score with Nothing font
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '30px Nothing, Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.letterSpacing = '2px';
    ctx.fillText(`SCORE: ${gameState.score}`, 20, 40);

    animationRef.current = requestAnimationFrame(gameLoop);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start game loop
    animationRef.current = requestAnimationFrame(gameLoop);

    // Event listeners
    const handleClick = () => {
      if (gameStateRef.current.gameOver) {
        resetGame();
        animationRef.current = requestAnimationFrame(gameLoop);
      } else {
        jump();
      }
    };

    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        handleClick();
      }
    };

    canvas.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [gameLoop, jump, resetGame]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000, // Ensure game canvas is above all other elements
        imageRendering: 'pixelated', // Make it pixelated
        imageRendering: '-moz-crisp-edges', // Firefox
        imageRendering: 'crisp-edges' // Modern browsers
      }}
    />
  );
};

const RedPageWith3D = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: '#000000', // Changed to black background
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 250, // Higher z-index to overlap transparency section (zIndex: 200)
      marginTop: '-80vh' // Move up to overlap the transparency section completely
    }}>
      {/* Flappy Bird Game - Full Screen */}
      <FlappyBird />
    </div>
  );
};

// 3D model preload removed

export default RedPageWith3D;