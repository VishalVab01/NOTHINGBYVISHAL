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

      {/* Center - Navigation Buttons */}
      <div className="nothing-nav-center">
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <button 
            className="nothing-explore-btn"
            onClick={() => navigate('/')}
          >
            EXPLORE NOTHING
          </button>
          <button 
            className="nothing-shop-btn"
            onClick={() => navigate('/shop')}
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '0px',
              padding: '14px 24px',
              fontFamily: 'Nothing, Arial, sans-serif',
              fontSize: '18px',
              fontWeight: 'normal',
              cursor: 'pointer',
              transition: 'all 0.5s ease-in-out',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: '1px',
              opacity: animationPhase === 'buttons-visible' ? 1 : 0,
              transform: animationPhase === 'buttons-visible' ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.15s'
            }}
            onMouseOver={(e) => e.target.style.color = '#FF0000'}
            onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
          >
            SHOP
          </button>
        </div>
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