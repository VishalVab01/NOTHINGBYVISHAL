import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
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