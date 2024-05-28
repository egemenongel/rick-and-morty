import React from 'react';
import './CircularImage.css';

const CircularImage = ({ src, alt, size = 250 }) => {
  return (
    <div className="circular-image-container" style={{ width: size, height: size }}>
      <img src={src} alt={alt} className="circular-image" style={{ width: size, height: size }}/>
    </div>
  );
};

export default CircularImage;
