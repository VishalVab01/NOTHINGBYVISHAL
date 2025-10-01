import React from "react";
import ScratchCardVideo from "../components/ScratchCardVideo";
import ScatteredImages from "../components/ScatteredImages";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      {/* Shared Navbar - will be visible on all sections */}
      <Navbar />
      
      {/* First Section - Original Home Page Content */}
      <div style={{ 
        height: '100vh', 
        position: 'relative',
        overflow: 'hidden'
      }}>

        
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
        background: '#000000',
        padding: '80px 0px 150px', // Increased bottom padding significantly
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 100,
        width: '100vw',
        minHeight: '150vh' // Make section much taller to accommodate all content
      }}>
        {/* Container for layout */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          paddingBottom: '300px' // Much more space to ensure text doesn't get cut
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
            fontFamily: 'Azonix-new, Azonix, Arial, sans-serif',
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
            fontFamily: 'Azonix-new, Azonix, Arial, sans-serif',
            fontSize: '50px',
            lineHeight: '1',
            fontWeight: 'normal',
            paddingBottom: '200px' // Much more padding to ensure button has space
          }}>
            <p style={{ margin: '0', width: '100%' }}>
              EVERYTHING.&nbsp;&nbsp;EVERY&nbsp;&nbsp;LAYER&nbsp;&nbsp;EXPOSED&nbsp;&nbsp;WITH<br/>&nbsp;&nbsp;PRECISION,  
              EVERY&nbsp;&nbsp;COMPONENT<br/>
              CRAFTED&nbsp;&nbsp;TO&nbsp;&nbsp;BE&nbsp;&nbsp;SEEN,&nbsp;&nbsp;NOT&nbsp;&nbsp;HIDDEN.&nbsp;&nbsp;IT'S&nbsp;&nbsp;A<br></br>&nbsp;&nbsp;DEVICE&nbsp;&nbsp;BUILT&nbsp;&nbsp;TO&nbsp;&nbsp;CELEBRATE<br/>
              <span style={{ color: '#CCCCCC' }}>TRANSPARENCY</span>&nbsp;&nbsp;—  
              TURNING&nbsp;&nbsp;<span style={{ color: '#CCCCCC' }}>COMPLEXITY</span><br/>
              <span style={{ color: '#CCCCCC' }}>INTO&nbsp;&nbsp;CLARITY.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Third Section - TRANSPARENCY */}
      <div style={{ 
        minHeight: '100vh', 
        background: '#000000',
        padding: '80px 40px 40px',
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 100,
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '1200px',
          width: '100%'
        }}>
          {/* Main TRANSPARENCY Heading */}
          <h1 style={{
            fontFamily: 'Azonix-new, Azonix, Arial, sans-serif',
            fontSize: '120px',
            lineHeight: '1.1',
            fontWeight: 'normal',
            color: '#FF6B35', // Orange color
            margin: '0',
            textTransform: 'uppercase',
            letterSpacing: '8px'
          }}>
            TRANSPARENCY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;