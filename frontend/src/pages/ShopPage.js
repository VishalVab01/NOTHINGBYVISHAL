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
              fontFamily: 'Nothing, Arial, sans-serif',
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
              fontSize: '0.9rem',
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
              fontSize: '1rem',
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
              fontFamily: 'Nothing, Arial, sans-serif',
              fontSize: '1rem',
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
              fontFamily: 'Nothing, Arial, sans-serif',
              fontSize: '1rem',
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
              fontFamily: 'Nothing, Arial, sans-serif',
              fontSize: '1rem',
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
              fontFamily: 'Nothing, Arial, sans-serif',
              fontSize: '1rem',
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
            padding: '4rem 3rem',
            maxWidth: '3200px',
            margin: '0 auto',
            width: '100%'
          }}
        >
          
          {/* Product Image 1 - Phone 3 (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-phone3-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_4603d84d-4972-4b1a-9d61-dc820b08f492/artifacts/jjm3gynr_Phone3Black.png"
              alt="Nothing Phone 3 Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3 (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹79,999
            </p>
          </div>
          
          {/* Product Image 2 - Phone 3 (WHITE) */}
          <div 
            className="product-image"
            data-testid="product-image-phone3-white"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_4603d84d-4972-4b1a-9d61-dc820b08f492/artifacts/b2ymn780_Phone3White.png"
              alt="Nothing Phone 3 White"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3 (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹79,999
            </p>
          </div>
          
          {/* Product Image 3 - Phone 3a Pro (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-phone3a-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_4603d84d-4972-4b1a-9d61-dc820b08f492/artifacts/jawoei6i_Phone3aProBlack.png"
              alt="Nothing Phone 3a Pro Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a Pro (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹31,999
            </p>
          </div>
          
          {/* Product Image 4 - Phone 3a Pro (GREY) */}
          <div 
            className="product-image"
            data-testid="product-image-phone3a-grey"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_4603d84d-4972-4b1a-9d61-dc820b08f492/artifacts/r2ql0kd7_Phone3aProGrey.png"
              alt="Nothing Phone 3a Pro Grey"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a Pro (GREY)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹31,999
            </p>
          </div>
          
          {/* Product Image 5 - Phone 3a (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-phone3a-black2"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_product-display-16/artifacts/i9vlfaid_Phone3aBlack.png"
              alt="Nothing Phone 3a Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹31,999
            </p>
          </div>
          
          {/* Product Image 6 - Phone 3a (BLUE) */}
          <div 
            className="product-image"
            data-testid="product-image-phone3a-blue"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_product-display-16/artifacts/8c9fc1oz_Phone3aBlue.png"
              alt="Nothing Phone 3a Blue"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a (BLUE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹31,999
            </p>
          </div>
          
          {/* Product Image 7 - Phone 3a Pro (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-phone3a-pro-black2"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_product-display-16/artifacts/fm33ta3t_Phone3aProBlack.png"
              alt="Nothing Phone 3a Pro Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a Pro (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹31,999
            </p>
          </div>
          
          {/* Product Image 8 - Phone 3a (WHITE) */}
          <div 
            className="product-image"
            data-testid="product-image-phone3a-white2"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_product-display-16/artifacts/o31sfl0g_Phone3aWhite.png"
              alt="Nothing Phone 3a White"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹31,999
            </p>
          </div>
          
          {/* Product Image 9 - CMF Phone 2 Pro (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-phone2-pro-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_product-display-16/artifacts/1gdxshsw_CMFPhone2ProBlack.png"
              alt="CMF Phone 2 Pro Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Phone 2 Pro (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹25,999
            </p>
          </div>
          
          {/* Product Image 10 - Phone 2a (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-phone2a-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_product-display-16/artifacts/nwd2e5qi_Phone2aBlack.png"
              alt="Nothing Phone 2a Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 2a (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹29,999
            </p>
          </div>
          
          {/* Product Image 11 - Phone 2a (MILK) */}
          <div 
            className="product-image"
            data-testid="product-image-phone2a-milk"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_product-display-16/artifacts/7getz41t_Phone2aMilk.png"
              alt="Nothing Phone 2a Milk"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 2a (MILK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹29,999
            </p>
          </div>
          
          {/* Product Image 12 - Phone 2a Plus (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-phone2a-plus-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_product-display-16/artifacts/2g07i5fn_Phone2aPlusBlack.png"
              alt="Nothing Phone 2a Plus Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 2a Plus (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹29,999
            </p>
          </div>

          {/* Product Image 13 - CMF Phone 1 (GREEN) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-phone1-green"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_a44d3fd5-d0f6-4cb5-b6cb-c46c2ba7d0ed/artifacts/dlychm3a_CMFPhone1Green.png"
              alt="CMF Phone 1 Green"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Phone 1 (GREEN)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹25,999
            </p>
          </div>

          {/* Product Image 14 - CMF Phone 2 Pro (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-phone2-pro-black-new"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_a44d3fd5-d0f6-4cb5-b6cb-c46c2ba7d0ed/artifacts/tcfqxjwg_CMFPhone2ProBlack.png"
              alt="CMF Phone 2 Pro Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Phone 2 Pro (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹25,999
            </p>
          </div>

          {/* Product Image 15 - CMF Phone 2 Pro (ORANGE) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-phone2-pro-orange"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_a44d3fd5-d0f6-4cb5-b6cb-c46c2ba7d0ed/artifacts/b3x2m29v_CMFPhone2ProOrange.png"
              alt="CMF Phone 2 Pro Orange"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Phone 2 Pro (ORANGE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹25,999
            </p>
          </div>

          {/* Product Image 16 - CMF Phone 2 Pro (WHITE) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-phone2-pro-white"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_a44d3fd5-d0f6-4cb5-b6cb-c46c2ba7d0ed/artifacts/8uk5vewh_CMFPhone2ProWhite.png"
              alt="CMF Phone 2 Pro White"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Phone 2 Pro (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹25,999
            </p>
          </div>

          {/* Product Image 17 - CMF Phone 1 (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-phone1-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/qygxyfoz_CMFPhone1Black.png"
              alt="CMF Phone 1 Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Phone 1 (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹25,999
            </p>
          </div>

          {/* Product Image 18 - CMF Phone 2 Pro (GREEN) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-phone2-pro-green"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/xm5yo1zl_CMFPhone2ProGreen.png"
              alt="CMF Phone 2 Pro Green"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Phone 2 Pro (GREEN)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹25,999
            </p>
          </div>

          {/* Product Image 19 - Ear (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-ear-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/n76vffsj_EarBlack.png"
              alt="Nothing Ear Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Ear (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹7,999
            </p>
          </div>

          {/* Product Image 20 - Ear (WHITE) */}
          <div 
            className="product-image"
            data-testid="product-image-ear-white"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/qvze1hxk_EarWhite.png"
              alt="Nothing Ear White"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Ear (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹7,999
            </p>
          </div>

          {/* Product Image 21 - Ear (a) (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-ear-a-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/pryxvxh6_EaraBlack.png"
              alt="Nothing Ear (a) Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Ear (a) (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹7,999
            </p>
          </div>

          {/* Product Image 22 - Ear (a) (WHITE) */}
          <div 
            className="product-image"
            data-testid="product-image-ear-a-white"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/z5y37fbn_EaraWhite.png"
              alt="Nothing Ear (a) White"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Ear (a) (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹7,999
            </p>
          </div>

          {/* Product Image 23 - Ear (a) (YELLOW) */}
          <div 
            className="product-image"
            data-testid="product-image-ear-a-yellow"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/v598jld7_EaraYellow.png"
              alt="Nothing Ear (a) Yellow"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Ear (a) (YELLOW)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹7,999
            </p>
          </div>

          {/* Product Image 24 - Headphones 1 (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-headphones1-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/h5m8od0c_Headphone1Black.png"
              alt="Nothing Headphones 1 Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Headphones 1 (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹9,999
            </p>
          </div>

          {/* Product Image 25 - CMF Buds Pro 2 (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-buds-pro2-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/5o7mohxs_CMFBudsPro2Black.png"
              alt="CMF Buds Pro 2 Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Buds Pro 2 (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹8,999
            </p>
          </div>

          {/* Product Image 26 - CMF Buds Pro 2 (WHITE) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-buds-pro2-white"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/cfrv4a1c_CMFBudsPro2White.png"
              alt="CMF Buds Pro 2 White"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Buds Pro 2 (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹8,999
            </p>
          </div>

          {/* Product Image 27 - Ear Open (WHITE) */}
          <div 
            className="product-image"
            data-testid="product-image-ear-open-white"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/g2qh2k5s_EarOpenWhite.png"
              alt="Nothing Ear Open White"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Ear Open (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹7,999
            </p>
          </div>

          {/* Product Image 28 - Headphones 1 (WHITE) */}
          <div 
            className="product-image"
            data-testid="product-image-headphones1-white"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/3fynvfi8_Headphone1White.png"
              alt="Nothing Headphones 1 White"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Headphones 1 (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹9,999
            </p>
          </div>

          {/* Product Image 29 - CMF Buds 2 Plus (BLUE) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-buds2-plus-blue"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/8kjp72kr_CMFBuds2PlusBlue.png"
              alt="CMF Buds 2 Plus Blue"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Buds 2 Plus (BLUE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹8,999
            </p>
          </div>

          {/* Product Image 30 - CMF Buds 2 Plus (WHITE) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-buds2-plus-white"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/cegen9ro_CMFBuds2PlusWhite.png"
              alt="CMF Buds 2 Plus White"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Buds 2 Plus (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹8,999
            </p>
          </div>

          {/* Product Image 31 - CMF Buds Pro 2 (BLUE) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-buds-pro2-blue"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/pvl7q2dv_CMFBudsPro2Blue.png"
              alt="CMF Buds Pro 2 Blue"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Buds Pro 2 (BLUE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹8,999
            </p>
          </div>

          {/* Product Image 32 - CMF Buds Pro 2 (ORANGE) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-buds-pro2-orange"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/e49xv5ze_CMFBudsPro2Orange.png"
              alt="CMF Buds Pro 2 Orange"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Buds Pro 2 (ORANGE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹8,999
            </p>
          </div>

          {/* Product Image 33 - CMF Buds 2a (BLACK) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-buds2a-black"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/o7t8a0ey_CMFBuds2aBlack.png"
              alt="CMF Buds 2a Black"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Buds 2a (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹7,999
            </p>
          </div>

          {/* Product Image 34 - CMF Buds 2a (ORANGE) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-buds2a-orange"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/kao3ao5y_CMFBuds2aOrange.png"
              alt="CMF Buds 2a Orange"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Buds 2a (ORANGE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹7,999
            </p>
          </div>

          {/* Product Image 35 - CMF Buds 2a (WHITE) */}
          <div 
            className="product-image"
            data-testid="product-image-cmf-buds2a-white"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('img').style.transform = 'scale(1)';
            }}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_shop-additions/artifacts/p0xipxil_CMFBuds2aWhite.png"
              alt="CMF Buds 2a White"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '750px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Buds 2a (WHITE)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '0.9rem',
              margin: 0
            }}>
              FROM ₹7,999
            </p>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default ShopPage;