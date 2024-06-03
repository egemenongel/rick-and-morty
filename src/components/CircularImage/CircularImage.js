import React from 'react';
import './CircularImage.css';

const CircularImage = ({ src, alt, size = 250 }) => {
  return (
    <div className="circularImageContainer" style={{ width: size, height: size }}>
      <img src={src} alt={alt} className="circularImage" style={{ width: size, height: size }}/>
    </div>
  );
};

export default CircularImage;
