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
  const nothingTextRef = useRef(null);
  
  // Refs for menu items animation
  const homeButtonRef = useRef(null);
  const nothingNewButtonRef = useRef(null);
  const shopButtonRef = useRef(null);
  const cmfButtonRef = useRef(null);
  const phoneColumnRef = useRef(null);
  const audioColumnRef = useRef(null);

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
      
      // Animate expansion to 95% of screen with rounded corners
      gsap.to(expandedMenuRef.current, {
        top: '2.5vh',
        left: '2.5vw', 
        right: '2.5vw',
        height: '95vh',
        borderRadius: '30px', // Keep rounded corners
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
      
      // Set initial state for menu buttons (hidden and positioned down)
      const menuButtons = [homeButtonRef.current, nothingNewButtonRef.current, shopButtonRef.current, cmfButtonRef.current].filter(Boolean);
      gsap.set(menuButtons, {
        opacity: 0,
        y: 50
      });
      
      // Set initial state for Phone and Audio columns (hidden and positioned down)
      const columnElements = [phoneColumnRef.current, audioColumnRef.current].filter(Boolean);
      gsap.set(columnElements, {
        opacity: 0,
        y: 50
      });
      
      // Animate menu buttons with staggered fade-in from bottom (0.2s delay between each)
      gsap.to(menuButtons, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.9, // Start after menu content appears
        stagger: 0.2, // 0.2 second delay between each menu item
        ease: "power2.out"
      });
      
      // Animate Phone and Audio columns after menu buttons complete (pause = 0.3s)
      // Menu animation: 0.9s delay + (4 buttons × 0.2s stagger) + 0.6s duration = 2.3s
      // Add 0.3s pause = 2.6s total delay
      gsap.to(columnElements, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 2.6, // Short pause after menu buttons finish
        stagger: 0.1, // Small delay between Phone and Audio columns
        ease: "power2.out"
      });
      
      // Animate NOTHING letters sliding up with stagger
      if (nothingTextRef.current) {
        const letters = nothingTextRef.current.querySelectorAll('[class*="nothing-letter-"]');
        gsap.fromTo(letters, 
          {
            opacity: 0,
            y: 100
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.8, // Start after menu content appears
            stagger: 0.1, // 0.1 second delay between each letter
            ease: "power2.out"
          }
        );
      }
    }
  };

  const handleCloseMenu = () => {
    if (expandedMenuRef.current && menuContentRef.current) {
      // Animate Phone and Audio columns disappearing first (reverse order)
      const columnElements = [phoneColumnRef.current, audioColumnRef.current].filter(Boolean);
      gsap.to(columnElements, {
        opacity: 0,
        y: 50,
        duration: 0.4,
        stagger: 0.05, // Quick stagger for closing
        ease: "power2.in"
      });
      
      // Animate menu buttons disappearing (reverse stagger)
      const menuButtons = [homeButtonRef.current, nothingNewButtonRef.current, shopButtonRef.current, cmfButtonRef.current].filter(Boolean);
      gsap.to(menuButtons, {
        opacity: 0,
        y: 50,
        duration: 0.4,
        delay: 0.1, // Start slightly after columns
        stagger: 0.05, // Faster reverse stagger
        ease: "power2.in"
      });
      
      // Animate NOTHING letters sliding down
      if (nothingTextRef.current) {
        const letters = nothingTextRef.current.querySelectorAll('[class*="nothing-letter-"]');
        gsap.to(letters, {
          opacity: 0,
          y: 100,
          duration: 0.6,
          stagger: 0.05, // Faster stagger for closing
          ease: "power2.in"
        });
      }
      
      // Animate content disappearance
      gsap.to(menuContentRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.4,
        delay: 0.2,
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
        delay: 0.4,
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
      <div className="nothing-nav-center" style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000'
      }}>
        <button 
          className="nothing-explore-btn"
          onClick={handleExploreClick}
        >
          EXPLORE NOTHING
        </button>
      </div>

      {/* Right - Shop and New Launch Buttons */}
      <div className="nothing-nav-right">
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
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
          <button 
            className="nothing-launch-btn"
            onClick={() => navigate('/second')}
          >
            NEW LAUNCH
          </button>
        </div>
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
        background: 'rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(128, 128, 128, 0.3)',
        backdropFilter: 'blur(25px) saturate(180%)',
        WebkitBackdropFilter: 'blur(25px) saturate(180%)',
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
          {/* Menu spacing control: Change 'gap' value to adjust space between menu items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0rem' }}>
            <button 
              ref={homeButtonRef}
              onClick={() => { navigate('/'); handleCloseMenu(); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
                fontSize: '3.5rem',
                fontWeight: 'normal',
                cursor: 'pointer',
                textAlign: 'left',
                letterSpacing: '2px',
                transition: 'all 0.2s ease',
                opacity: 0, // Initial hidden state
                transform: 'scale(1)',
                textShadow: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#FF0000';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'scale(1)';
                e.target.style.textShadow = 'none';
              }}
              data-testid="menu-home-btn"
            >
              HOME
            </button>

            <button 
              ref={nothingNewButtonRef}
              onClick={() => { navigate('/'); handleCloseMenu(); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
                fontSize: '4rem',
                fontWeight: 'normal',
                cursor: 'pointer',
                textAlign: 'left',
                letterSpacing: '2px',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap', // Prevent line breaks
                opacity: 0, // Initial hidden state
                transform: 'scale(1)',
                textShadow: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#FF0000';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'scale(1)';
                e.target.style.textShadow = 'none';
              }}
              data-testid="menu-nothing-new-btn"
            >
              NOTHING NEW
            </button>

            <button 
              ref={shopButtonRef}
              onClick={() => { navigate('/shop'); handleCloseMenu(); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
                fontSize: '4rem',
                fontWeight: 'normal',
                cursor: 'pointer',
                textAlign: 'left',
                letterSpacing: '2px',
                transition: 'all 0.2s ease',
                opacity: 0, // Initial hidden state
                transform: 'scale(1)',
                textShadow: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#FF0000';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'scale(1)';
                e.target.style.textShadow = 'none';
              }}
              data-testid="menu-shop-btn"
            >
              SHOP
            </button>

            <button 
              ref={cmfButtonRef}
              onClick={() => { navigate('/'); handleCloseMenu(); }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
                fontSize: '4rem',
                fontWeight: 'normal',
                cursor: 'pointer',
                textAlign: 'left',
                letterSpacing: '2px',
                transition: 'all 0.2s ease',
                opacity: 0, // Initial hidden state
                transform: 'scale(1)',
                textShadow: 'none'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#FF0000';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'scale(1)';
                e.target.style.textShadow = 'none';
              }}
              data-testid="menu-cmf-btn"
            >
              CMF
            </button>
          </div>
        </div>

        {/* Right Section - Product Categories */}
        <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '3rem', marginLeft: '10rem', marginTop: '-2rem' }}>
          
          {/* Phone Category */}
          <div ref={phoneColumnRef} style={{ width: '100%', display: 'flex', gap: '3rem', opacity: 0 }}>
            <h2 style={{
              fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 'normal',
              color: '#FFFFFF',
              letterSpacing: '1px',
              minWidth: '120px',
              display: 'flex',
              alignItems: 'flex-start',
              paddingTop: '2rem' // Center with options list
            }}>
              PHONE
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1', width: '100%' }}>
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
                    opacity: 0.8,
                    whiteSpace: 'nowrap' // Prevent line breaks for phone options
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
          <div ref={audioColumnRef} style={{ width: '100%', display: 'flex', gap: '3rem', opacity: 0 }}>
            <h2 style={{
              fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 'normal',
              color: '#FFFFFF',
              letterSpacing: '1px',
              minWidth: '120px',
              display: 'flex',
              alignItems: 'flex-start',
              paddingTop: '2rem' // Center with options list
            }}>
              AUDIO
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1', width: '100%' }}>
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
                    opacity: 0.8,
                    whiteSpace: 'nowrap' // Prevent line breaks for audio options
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

        {/* Background NOTHING Text - Letter by Letter Animation */}
        <div 
          ref={nothingTextRef}
          style={{
            position: 'absolute',
            bottom: '-9rem',
            left: '0',
            right: '0',
            width: '100%',
            fontSize: 'clamp(11rem, 18vw, 23rem)',
            fontFamily: 'Azonix, Azonix-new, Arial, sans-serif',
            fontWeight: 'normal',
            color: '#e12828ff',
            letterSpacing: '0.5rem',
            opacity: 1,
            pointerEvents: 'none',
            zIndex: -1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            overflow: 'visible'
          }}
        >
          {/* Split NOTHING into individual letters for animation */}
          {"NOTHING".split("").map((letter, index) => (
            <span 
              key={index}
              className={`nothing-letter-${index}`}
              style={{
                display: 'inline-block',
                opacity: 0,
                transform: 'translateY(100px)'
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;