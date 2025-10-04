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
            gap: '1.5rem',
            padding: '2rem 1rem',
            maxWidth: '2200px',
            margin: '0 auto'
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
                maxHeight: '450px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
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
                maxHeight: '450px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
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
                maxHeight: '450px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
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
                maxHeight: '450px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
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
                maxHeight: '450px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a (BLACK)
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
                maxHeight: '450px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a (BLUE)
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
                maxHeight: '450px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
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
                maxHeight: '450px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 3a (WHITE)
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
                maxHeight: '450px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              CMF Phone 2 Pro (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '1rem',
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
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 2a (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '1rem',
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
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 2a (MILK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '1rem',
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
                maxHeight: '450px',
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{
              fontFamily: 'Azonix, Arial, sans-serif',
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              letterSpacing: '0.5px'
            }}>
              Phone 2a Plus (BLACK)
            </h3>
            <p style={{
              fontFamily: 'Nothing, Arial, sans-serif',
              color: '#888888',
              fontSize: '1rem',
              margin: 0
            }}>
              FROM ₹29,999
            </p>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default ShopPage;