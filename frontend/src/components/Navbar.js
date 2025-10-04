import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Animation states
  const [animationPhase, setAnimationPhase] = useState('collapsed');
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  
  // Refs for GSAP animations
  const expandedMenuRef = useRef(null);
  const menuContentRef = useRef(null);

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

  const handleExploreClick = () => {
    setIsMenuExpanded(true);
    
    // GSAP animation for smooth vertical expansion
    if (expandedMenuRef.current && menuContentRef.current) {
      // Set initial state - menu starts from navbar position with 0 height
      gsap.set(expandedMenuRef.current, {
        top: '20px', // Start from navbar position
        left: '20px',
        right: '20px', 
        height: '80px', // Start with navbar height
        borderRadius: '50px', // Start with navbar border radius
        opacity: 1,
        display: 'block'
      });
      
      // Hide content initially
      gsap.set(menuContentRef.current, {
        opacity: 0,
        y: 50
      });
      
      // Animate expansion to full screen
      gsap.to(expandedMenuRef.current, {
        top: '0px',
        left: '0px', 
        right: '0px',
        height: '100vh',
        borderRadius: '0px', // Smooth transition to no border radius
        duration: 0.8,
        ease: "power2.inOut"
      });
      
      // Animate content appearance after expansion starts
      gsap.to(menuContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleCloseMenu = () => {
    if (expandedMenuRef.current && menuContentRef.current) {
      // Animate content disappearance first
      gsap.to(menuContentRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.4,
        ease: "power2.in"
      });
      
      // Animate menu collapse back to navbar size and position
      gsap.to(expandedMenuRef.current, {
        top: '20px',
        left: '20px',
        right: '20px',
        height: '80px',
        borderRadius: '50px',
        duration: 0.6,
        delay: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          setIsMenuExpanded(false);
          gsap.set(expandedMenuRef.current, { display: 'none' });
        }
      });
    }
  };

  return (
    <>
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
            onClick={handleExploreClick}
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

    {/* Expanded Menu Overlay - Always rendered but hidden */}
    <div 
      ref={expandedMenuRef}
      className="expanded-menu-overlay"
      style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        right: '20px',
        width: 'auto',
        height: '80px',
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 50000, // Higher than scattered images
        borderRadius: '50px',
        overflow: 'hidden',
        display: 'none', // Initially hidden
        cursor: 'default' // Ensure cursor is visible
      }}
    >
      {/* Menu Content Container */}
      <div 
        ref={menuContentRef}
        style={{
          opacity: 0,
          height: '100%',
          cursor: 'default' // Ensure cursor is visible
        }}
      >
        {/* Close Button */}
        <button 
          onClick={handleCloseMenu}
          style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            background: 'transparent',
            border: 'none',
            color: '#FF0000',
            fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
            fontSize: '1.2rem',
            fontWeight: 'normal',
            cursor: 'pointer',
            letterSpacing: '1px'
          }}
          data-testid="close-menu-btn"
        >
          CLOSE
        </button>

        {/* Menu Content */}
        <div 
          style={{
            display: 'flex',
            height: '100%',
            padding: '8rem 4rem 4rem 4rem'
          }}
        >
        {/* Left Column - Main Navigation */}
        <div style={{ flex: '1', marginRight: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <button 
              onClick={() => { navigate('/'); handleCloseMenu(); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
                fontSize: '2.5rem',
                fontWeight: 'normal',
                cursor: 'pointer',
                textAlign: 'left',
                letterSpacing: '2px',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#FF0000'}
              onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
              data-testid="menu-home-btn"
            >
              HOME
            </button>

            <button 
              onClick={() => { navigate('/'); handleCloseMenu(); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
                fontSize: '2.5rem',
                fontWeight: 'normal',
                cursor: 'pointer',
                textAlign: 'left',
                letterSpacing: '2px',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#FF0000'}
              onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
              data-testid="menu-nothing-new-btn"
            >
              NOTHING NEW
            </button>

            <button 
              onClick={() => { navigate('/shop'); handleCloseMenu(); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
                fontSize: '2.5rem',
                fontWeight: 'normal',
                cursor: 'pointer',
                textAlign: 'left',
                letterSpacing: '2px',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#FF0000'}
              onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
              data-testid="menu-shop-btn"
            >
              SHOP
            </button>

            <button 
              onClick={() => { navigate('/'); handleCloseMenu(); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
                fontSize: '2.5rem',
                fontWeight: 'normal',
                cursor: 'pointer',
                textAlign: 'left',
                letterSpacing: '2px',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#FF0000'}
              onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
              data-testid="menu-cmf-btn"
            >
              CMF
            </button>
          </div>
        </div>

        {/* Right Section - Product Categories */}
        <div style={{ flex: '2', display: 'flex', gap: '6rem' }}>
          
          {/* Phone Category */}
          <div style={{ flex: '1' }}>
            <h2 style={{
              fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 'normal',
              color: '#FFFFFF',
              marginBottom: '2rem',
              letterSpacing: '1px'
            }}>
              PHONE
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'NOTHING PHONE (3)',
                'NOTHING PHONE 3A PRO',
                'NOTHING PHONE 3A',
                'NOTHING PHONE 2A PLUS',
                'NOTHING PHONE 2A'
              ].map((phone, index) => (
                <button 
                  key={index}
                  onClick={() => { navigate('/shop'); handleCloseMenu(); }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    letterSpacing: '0.5px',
                    transition: 'color 0.3s ease',
                    opacity: 0.8
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#FF0000';
                    e.target.style.opacity = '1';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = '#FFFFFF';
                    e.target.style.opacity = '0.8';
                  }}
                  data-testid={`phone-${index}`}
                >
                  {phone}
                </button>
              ))}
            </div>
          </div>

          {/* Audio Category */}
          <div style={{ flex: '1' }}>
            <h2 style={{
              fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 'normal',
              color: '#FFFFFF',
              marginBottom: '2rem',
              letterSpacing: '1px'
            }}>
              AUDIO
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'NOTHING HEADPHONE 1',
                'NOTHING EAR',
                'CMF BUDS PRO 2',
                'CMF BUDS 2 PLUS',
                'NOTHING EAR OPEN'
              ].map((audio, index) => (
                <button 
                  key={index}
                  onClick={() => { navigate('/shop'); handleCloseMenu(); }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    letterSpacing: '0.5px',
                    transition: 'color 0.3s ease',
                    opacity: 0.8
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#FF0000';
                    e.target.style.opacity = '1';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = '#FFFFFF';
                    e.target.style.opacity = '0.8';
                  }}
                  data-testid={`audio-${index}`}
                >
                  {audio}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* Background NOTHING Text */}
        <div 
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '0',
            right: '0',
            width: '100%',
            fontSize: 'clamp(8rem, 15vw, 20rem)',
            fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
            fontWeight: 'normal',
            color: '#FF0000',
            letterSpacing: '0.5rem',
            opacity: 0.15,
            pointerEvents: 'none',
            zIndex: -1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'visible'
          }}
        >
          NOTHING
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;