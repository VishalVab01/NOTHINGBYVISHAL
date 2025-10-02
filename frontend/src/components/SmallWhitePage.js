import React from "react";

const SmallWhitePage = () => {
  return (
    <section 
      className="small-white-page bg-white w-full min-h-screen flex items-center justify-center relative z-10"
      style={{ 
        minHeight: '30vh', // Making it smaller as requested
        backgroundColor: '#000000ff',
        position: 'relative',
        zIndex: 9999, // Maximum z-index to ensure white page appears above all other content
        marginTop: '-590px' // Increased negative margin to create overlap with transparency section
      }}
    >
      <div className="text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
            Clean Space
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmallWhitePage;