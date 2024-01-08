import React from 'react';
import './Herocard.css';

const Herocard = ({ title, subTitle, mainImage, background,styling }) => {
  return (
    <div className='hero-card-container' style={styling}>
      <div className='hero-card-text'>
        <div className='hero-card-heading'>{title}</div>
        <div className='hero-card-subheading'>{subTitle}</div>
      </div>
      <img className='hero-card-image' src={mainImage} alt='img' />
      <div className='hero-card-background'>
        {background}
      </div>
    </div>
  );
}

export default Herocard;

