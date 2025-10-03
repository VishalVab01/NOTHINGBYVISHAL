import React from "react";
import Navbar from "../components/Navbar";

const ShopPage = () => {
  return (
    <div className="shop-page-replica" style={{ position: 'relative', minHeight: '100vh', background: '#000000' }}>
      {/* Keep the existing navbar */}
      <Navbar />
      
      {/* Shop Content - Centered Layout */}
      <div className="shop-content-centered" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingLeft: '120px',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}>
        
        {/* Main Text Section */}
        <div 
          className="shop-text-main"
          data-testid="shop-text-section"
        >
          {/* Large Main Heading */}
          <h1 
            className="replica-main-heading"
            data-testid="shop-main-heading"
            style={{
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '5.2rem',
              fontWeight: 'normal',
              lineHeight: '1.1',
              letterSpacing: '0.02em',
              margin: 0,
              textTransform: 'uppercase',
              marginBottom: '2.5rem'
            }}
          >
            REFINE<br />
            YOUR WORLD<br />
            WITH PURE SIMPLICITY
          </h1>
          
          {/* Supporting Description */}
          <p 
            className="replica-description"
            data-testid="shop-description"
            style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginTop: '0',
              marginBottom: '2rem',
              maxWidth: '500px',
              fontWeight: 300
            }}
          >
            A seamless blend of transparency, speed,<br />
            and simplicity — crafted to offer a distraction-free<br />
            experience that lets technology fade into the background.
          </p>
          
          {/* Red CTA Link */}
          <a 
            href="#"
            className="replica-cta-link"
            data-testid="shop-cta-link"
            style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FF4500',
              fontSize: '1.2rem',
              fontWeight: 'normal',
              textDecoration: 'none',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#FF6B35';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = '#FF4500';
              e.target.style.transform = 'translateX(0px)';
            }}
          >
            NOTHINGNEW →
          </a>
        </div>
        
      </div>
      
      {/* Bottom Right Earbud Image */}
      <div 
        className="earbud-graphic"
        style={{
          position: 'fixed',
          bottom: '50px',
          right: '100px',
          width: '120px',
          height: 'auto',
          opacity: 0.6,
          pointerEvents: 'none'
        }}
        data-testid="earbud-graphic"
      >
        <img 
          src="/earbudBlack.png"
          alt="Nothing Earbud"
          style={{
            width: '100%',
            height: 'auto',
            filter: 'brightness(0.8)'
          }}
          onError={(e) => {
            // If image doesn't exist, create a simple SVG placeholder
            e.target.style.display = 'none';
            const svg = document.createElement('div');
            svg.innerHTML = `
              <svg width="120" height="80" viewBox="0 0 120 80" style="opacity: 0.3;">
                <circle cx="30" cy="40" r="20" fill="#333" />
                <circle cx="90" cy="40" r="20" fill="#333" />
                <path d="M50 40 L70 40" stroke="#333" stroke-width="2" />
              </svg>
            `;
            e.target.parentNode.appendChild(svg.firstElementChild);
          }}
        />
      </div>
      
      {/* Product Showcase Section - Overlapping */}
      <div className="product-showcase-section" style={{ 
        background: '#000000',
        minHeight: '100vh',
        paddingTop: '0',
        marginTop: '-5vh',
        position: 'relative',
        zIndex: 5
      }}>
        
        {/* Red Navigation Bar */}
        <div 
          className="product-nav-bar"
          data-testid="product-nav-bar"
          style={{
            background: '#FF0000',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderBottom: '2px solid #FF0000'
          }}
        >
          <button 
            className="nav-category-btn active"
            data-testid="shop-all-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontFamily: 'Azonix, Arial, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              letterSpacing: '1px',
              cursor: 'pointer',
              padding: '10px 20px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#FFD700'}
            onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
          >
            SHOP ALL
          </button>
          
          <button 
            className="nav-category-btn"
            data-testid="phone-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontFamily: 'Azonix, Arial, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              letterSpacing: '1px',
              cursor: 'pointer',
              padding: '10px 20px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#FFD700'}
            onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
          >
            PHONE
          </button>
          
          <button 
            className="nav-category-btn"
            data-testid="cmf-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontFamily: 'Azonix, Arial, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              letterSpacing: '1px',
              cursor: 'pointer',
              padding: '10px 20px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#FFD700'}
            onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
          >
            CMF
          </button>
          
          <button 
            className="nav-category-btn"
            data-testid="audio-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              fontFamily: 'Azonix, Arial, sans-serif',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              letterSpacing: '1px',
              cursor: 'pointer',
              padding: '10px 20px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#FFD700'}
            onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
          >
            AUDIO
          </button>
        </div>
        
        {/* Product Grid */}
        <div 
          className="product-grid"
          data-testid="product-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '3rem',
            padding: '4rem 6rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}
        >
          
          {/* Product Card 1 - Phone 3 (BLACK) */}
          <div 
            className="product-card"
            data-testid="product-card-phone3-black"
            style={{
              background: 'transparent',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
          >
            <div style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1661962399580-80301d32d791?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxOb3RoaW5nJTIwcGhvbmV8ZW58MHx8fHwxNzU5NTA2Njg4fDA&ixlib=rb-4.1.0&q=85"
                alt="Nothing Phone 3 Black"
                style={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'cover',
                  borderRadius: '15px'
                }}
              />
            </div>
            <h3 style={{
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3 (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '1rem',
              margin: 0
            }}>
              FROM ₹79,999
            </p>
          </div>
          
          {/* Product Card 2 - Phone 3 (WHITE) */}
          <div 
            className="product-card"
            data-testid="product-card-phone3-white"
            style={{
              background: 'transparent',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
          >
            <div style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, #f8f8f8, #e8e8e8)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1664700651198-42cf8d382dc3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxOb3RoaW5nJTIwcGhvbmV8ZW58MHx8fHwxNzU5NTA2Njg4fDA&ixlib=rb-4.1.0&q=85"
                alt="Nothing Phone 3 White"
                style={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'cover',
                  borderRadius: '15px'
                }}
              />
            </div>
            <h3 style={{
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3 (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '1rem',
              margin: 0
            }}>
              FROM ₹79,999
            </p>
          </div>
          
          {/* Product Card 3 - Phone 3a Pro (BLACK) */}
          <div 
            className="product-card"
            data-testid="product-card-phone3a-black"
            style={{
              background: 'transparent',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
          >
            <div style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, #0a0a0a, #1f1f1f)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1663868891817-8853b9eb83f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxOb3RoaW5nJTIwcGhvbmV8ZW58MHx8fHwxNzU5NTA2Njg4fDA&ixlib=rb-4.1.0&q=85"
                alt="Nothing Phone 3a Pro Black"
                style={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'cover',
                  borderRadius: '15px'
                }}
              />
            </div>
            <h3 style={{
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a Pro (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '1rem',
              margin: 0
            }}>
              FROM ₹31,999
            </p>
          </div>
          
          {/* Product Card 4 - Phone 3a Pro (GREY) */}
          <div 
            className="product-card"
            data-testid="product-card-phone3a-grey"
            style={{
              background: 'transparent',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0px)';
            }}
          >
            <div style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, #4a4a4a, #6a6a6a)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <img 
                src="https://images.pexels.com/photos/14398223/pexels-photo-14398223.jpeg"
                alt="Nothing Phone 3a Pro Grey"
                style={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'cover',
                  borderRadius: '15px'
                }}
              />
            </div>
            <h3 style={{
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a Pro (GREY)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '1rem',
              margin: 0
            }}>
              FROM ₹31,999
            </p>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default ShopPage;