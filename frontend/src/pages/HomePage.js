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

      {/* Second Section - Image and Text Section */}
      <div style={{ 
        minHeight: '100vh', 
        background: '#000000',
        padding: '80px 0px 40px',
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 1000,
        width: '100vw'
      }}>
        {/* Container for layout */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}>
          {/* Upper Left Image */}
          <div style={{
            width: '320px',
            height: '450px',
            position: 'absolute',
            top: '20px',
            left: '110px'
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

          {/* First line positioned at bottom right of image */}
          <div style={{
            position: 'absolute',
            top: '420px',        // Adjust this value to move up/down (bottom of image)
            left: '455px',       // Adjust this value to move left/right (right edge of image)
            right: 'auto',       // Adjust this value for right positioning
            bottom: 'auto',      // Adjust this value for bottom positioning
            fontFamily: 'Azonix, Arial, sans-serif',
            fontSize: '50px',
            lineHeight: '1.3',
            fontWeight: 'normal',
            color: '#FFFFFF'
          }}>
            <span>A TECH WHERE DESIGN REVEAL</span>
          </div>

          {/* Rest of the text - Full Width below the image */}
          <div style={{
            position: 'absolute',
            top: '480px',       // Below the image
            left: '0px',
            width: '100vw',
            padding: '0px 40px',
            fontFamily: 'Azonix, Arial, sans-serif',
            fontSize: '50px',
            lineHeight: '1.3',
            fontWeight: 'normal'
          }}>
            <p style={{ margin: '0', width: '100%' }}>
              EVERYTHING.&nbsp;&nbsp;EVERY&nbsp;&nbsp;LAYER&nbsp;&nbsp;EXPOSED&nbsp;&nbsp;WITH<br/>&nbsp;&nbsp;PRECISION,  
              EVERY&nbsp;&nbsp;COMPONENT<br/>
              CRAFTED&nbsp;&nbsp;TO&nbsp;&nbsp;BE&nbsp;&nbsp;SEEN,&nbsp;&nbsp;NOT&nbsp;&nbsp;HIDDEN.&nbsp;&nbsp;IT'S&nbsp;&nbsp;A<br></br>&nbsp;&nbsp;DEVICE&nbsp;&nbsp;BUILT&nbsp;&nbsp;TO&nbsp;&nbsp;CELEBRATE<br/>
              <span style={{ color: '#CCCCCC' }}>TRANSPARENCY</span>&nbsp;&nbsp;—  
              TURNING&nbsp;&nbsp;<span style={{ color: '#CCCCCC' }}>COMPLEXITY</span><br/>
              <span style={{ color: '#CCCCCC' }}>INTO&nbsp;&nbsp;CLARITY.</span>
            </p>
            
            {/* Navigation to third page if content is extensive */}
            <div style={{ marginTop: '60px', textAlign: 'center' }}>
              <button 
                onClick={() => navigate('/third')}
                style={{
                  background: 'transparent',
                  border: '2px solid #FFFFFF',
                  color: '#FFFFFF',
                  padding: '15px 30px',
                  fontSize: '16px',
                  fontFamily: 'Azonix, Arial, sans-serif',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#FFFFFF';
                  e.target.style.color = '#000000';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#FFFFFF';
                }}
              >
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;