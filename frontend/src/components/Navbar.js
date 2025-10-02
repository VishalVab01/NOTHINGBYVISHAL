import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Animation states
  const [animationPhase, setAnimationPhase] = useState('collapsed');

  useEffect(() => {
    // Start animation sequence on component mount
    const timer1 = setTimeout(() => {
      setAnimationPhase('expanding');
    }, 1000); // Wait 1 second before starting expansion

    const timer2 = setTimeout(() => {
      setAnimationPhase('buttons-visible');
    }, 2800); // Show buttons after smooth expansion completes

    // Cleanup timers on unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <header className={`nothing-header ${animationPhase}`}>
      {/* Left - Branding */}
      <div className="nothing-nav-left">
        <a href="/" className="nothing-brand">
          NOTHING
        </a>
      </div>

      {/* Center - Explore Button */}
      <div className="nothing-nav-center">
        <button 
          className="nothing-explore-btn"
          onClick={() => navigate('/')}
        >
          EXPLORE NOTHING
        </button>
      </div>

      {/* Right - New Launch Button */}
      <div className="nothing-nav-right">
        <button 
          className="nothing-launch-btn"
          onClick={() => navigate('/second')}
        >
          NEW LAUNCH
        </button>
      </div>
    </header>
  );
};

export default Navbar;