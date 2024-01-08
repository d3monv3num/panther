import React from 'react';
import './Herosection.css';
import Herocard from '../Herocard/Herocard';
import HeroCardData from '../HeroCardData';
const Herosection = () => {
  return (
    <div className='hero-section-container'>
      <div className='hero-heading'>You deserve to be happy.</div>
      <div className='hero-subheading'>What type of therapy are you looking for?</div>
      <div className='cards-container'>
        {HeroCardData.map((data, index) => (
          <Herocard key={index} {...data}/>
        ))}
      </div>
    </div>
  );
}

export default Herosection;
