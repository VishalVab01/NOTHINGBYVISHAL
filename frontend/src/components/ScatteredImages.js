import React from 'react';
import './ScatteredImages.css';

const ScatteredImages = () => {
  // Image URLs from uploaded assets
  const images = [
    {
      url: "https://customer-assets.emergentagent.com/job_smooth-scroll-17/artifacts/fumq7h3r_Screenshot%202025-10-01%20021056.png",
      position: { top: '15%', left: '8%', rotate: '-12deg' }
    },
    {
      url: "https://customer-assets.emergentagent.com/job_smooth-scroll-17/artifacts/w15cm22k_Screenshot%202025-10-01%20021120.png",
      position: { top: '25%', right: '12%', rotate: '8deg' }
    },
    {
      url: "https://customer-assets.emergentagent.com/job_smooth-scroll-17/artifacts/jvmwbxaj_Screenshot%202025-10-01%20021130.png",
      position: { top: '60%', left: '15%', rotate: '15deg' }
    },
    {
      url: "https://customer-assets.emergentagent.com/job_smooth-scroll-17/artifacts/fn5fp6c5_Screenshot%202025-10-01%20021144.png",
      position: { top: '45%', right: '8%', rotate: '-8deg' }
    },
    {
      url: "https://customer-assets.emergentagent.com/job_smooth-scroll-17/artifacts/8khxffu5_Screenshot%202025-10-01%20021200.png",
      position: { bottom: '20%', left: '45%', rotate: '5deg' }
    }
  ];

  return (
    <div className="scattered-images-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`scattered-image scattered-image-${index + 1}`}
          style={{
            position: 'absolute',
            ...image.position,
            transform: `rotate(${image.position.rotate})`,
            zIndex: 2,
            '--rotate': image.position.rotate,
            '--float-delay': `${index * 0.5}s`
          }}
        >
          <div className="image-wrapper">
            <img
              src={image.url}
              alt={`Nothing showcase ${index + 1}`}
              className="scattered-img"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScatteredImages;