import React from "react";
import ScratchCardVideo from "../components/ScratchCardVideo";
import ScrollZoomImages from "../components/ScrollZoomImages";

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

      {/* Scroll Zoom Images Background */}
      <ScrollZoomImages />

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