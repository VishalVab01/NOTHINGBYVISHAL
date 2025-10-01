import React from "react";
import { useNavigate } from "react-router-dom";
import ScratchCardVideo from "../components/ScratchCardVideo";
import ScatteredImages from "../components/ScatteredImages";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* First Section - Original Home Page Content */}
      <div style={{ 
        height: '100vh', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Navigation Header */}
        <header className="nothing-header">
          {/* Left - Branding */}
          <div className="nothing-nav-left">
            <a href="/" className="nothing-brand">
              NOTHING
            </a>
          </div>

          {/* Center - Explore Button */}
          <div className="nothing-nav-center">
            <button className="nothing-explore-btn">
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

        
        {/* Scratch Card Video Background */}
        <ScratchCardVideo />

        {/* Scattered Images */}
        <ScatteredImages />

        {/* Central Brand Message */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 500,
          textAlign: 'center',
          pointerEvents: 'none',
          userSelect: 'none'
        }}>
          <h2 style={{
            fontFamily: 'Nothing, Arial, sans-serif',
            fontSize: '13px',
            fontWeight: 'normal',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            lineHeight: '1.2',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            margin: 0
          }}>
            WE BELIEVE IN CREATIVITY AND TRANSPARENCY
          </h2>
        </div>

        {/* Bottom Fixed Text - Split Animation */}
        <div className="bottom-text">
          <div className="bottom-text-content">
            <span className="explore-static">EXPLORE</span>
            <span className="nothing-slide-up">NOTHING</span>
          </div>
        </div>
      </div>

      {/* Second Section - Content Section Below */}
      <div style={{ 
        minHeight: '100vh', 
        background: '#000000',
        padding: '80px 60px 40px',
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 1000,
        width: '100vw'
      }}>
        {/* Container for layout */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          position: 'relative',
          width: '100%',
          height: '100%'
        }}>
          {/* Upper Left Image */}
          <div style={{
            width: '350px',
            height: '500px',
            position: 'absolute',
            top: '40px',
            left: '40px'
          }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_9350f6eb-79d9-4589-b813-b1ad49710dfe/artifacts/dh5rqqp0_darkGirl.jpg"
              alt="Tech Design"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

         {/* Second Section - Fullscreen Text Section */}
<div style={{ 
  minHeight: '100vh', 
  background: '#000000',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '700px',
  color: '#FFFFFF',
  textAlign: 'right',
  height: '1200px'
}}>
  <div style={{
    maxWidth: '1000px',
    paddingRight: '0px',   // adjust this value to control gap from right edge
    fontFamily: 'NextGameExtraBold, Arial, sans-serif',
    fontSize: '45px',
    lineHeight: '1.2',
    fontWeight: 'normal'
  }}>
    <p>
      A TECH WHERE DESIGN REVEAL EVERYTHING.  
      EVERY LAYER EXPOSED WITH PRECISION,  
      EVERY COMPONENT CRAFTED TO BE SEEN, NOT HIDDEN.  
      IT'S A DEVICE BUILT TO CELEBRATE <span style={{ color: '#CCCCCC' }}>TRANSPARENCY</span> —  
      TURNING <span style={{ color: '#CCCCCC' }}>COMPLEXITY INTO CLARITY.</span>
    </p>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default HomePage;