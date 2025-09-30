import React from "react";
import { useNavigate } from "react-router-dom";
import ScratchCardVideo from "../components/ScratchCardVideo";

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

        {/* Bottom Fixed Text */}
        <div className="bottom-text">
          <div className="bottom-text-content">
            EXPLORENOTHING
          </div>
        </div>
      </div>

      {/* Second Section - Content Section Below */}
      <div style={{ 
        minHeight: '100vh', 
        background: '#000000',
        padding: '80px 40px 40px',
        color: '#FFFFFF',
        position: 'relative',
        zIndex: 1000
      }}>
        {/* Content Area */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Main Heading */}
          <h1 style={{
            fontFamily: 'Nothing, Arial, sans-serif',
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '40px',
            color: '#FFFFFF',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Welcome to Content
          </h1>

          {/* Content Body */}
          <div style={{
            fontFamily: 'Nothing, Arial, sans-serif',
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#FFFFFF',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <p style={{ marginBottom: '24px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <p style={{ marginBottom: '24px' }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <p style={{ marginBottom: '24px' }}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>

            <p style={{ marginBottom: '24px' }}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>

            <p style={{ marginBottom: '24px' }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>

            <p>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;