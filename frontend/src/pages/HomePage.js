import React from "react";
import ScratchCardVideo from "../components/ScratchCardVideo";

const HomePage = () => {
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
          <button className="nothing-launch-btn">
            NEW LAUNCH
          </button>
        </div>
      </header>

      {/* Scratch Card Video Background */}
      <ScratchCardVideo />
    </div>
  );
};

export default HomePage;