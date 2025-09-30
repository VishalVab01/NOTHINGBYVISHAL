import React from "react";
import { useNavigate } from "react-router-dom";
import ScratchCardVideo from "../components/ScratchCardVideo";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
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

      {/* Bottom Fixed Text */}
      <div className="bottom-text">
        <div className="bottom-text-content">
          EXPLORENOTHING
        </div>
      </div>
    </div>
  );
};

export default HomePage;