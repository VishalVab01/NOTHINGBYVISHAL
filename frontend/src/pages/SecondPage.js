import React from "react";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Navigation Header - same as HomePage */}
      <header className="nothing-header">
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
          <button className="nothing-launch-btn">
            NEW LAUNCH
          </button>
        </div>
      </header>

      {/* Image positioned at top left */}
      <div 
        style={{
          position: 'absolute',
          top: '120px', // Below the header
          left: '20px',
          zIndex: 10
        }}
      >
        <img 
          src="https://customer-assets.emergentagent.com/job_58019e1d-5abc-4ae3-ad3a-fe3baa9a29a2/artifacts/wmdrslcs_darkGirl.jpg"
          alt="Dark Girl"
          style={{
            maxWidth: '400px',
            height: 'auto',
            display: 'block'
          }}
        />
      </div>

      {/* Lorem ipsum text below the image */}
      <div 
        style={{
          position: 'absolute',
          top: '400px', // Below the image
          left: '20px',
          right: '20px',
          zIndex: 10,
          color: 'var(--text-primary)',
          fontFamily: 'Nothing, Arial, sans-serif',
          fontSize: '16px',
          lineHeight: '1.6',
          maxWidth: '800px'
        }}
      >
        <p style={{ marginBottom: '20px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        
        <p style={{ marginBottom: '20px' }}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        
        <p style={{ marginBottom: '20px' }}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>

        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
        </p>
      </div>
    </div>
  );
};

export default SecondPage;