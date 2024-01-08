import React from 'react';
import Image1 from './Herosection/undraw_woman_ffrd 1.svg';
import Image2 from './Herosection/undraw_couple_re_94tl 1.png';
import Image3 from './Herosection/undraw_junior_soccer_6sop 1.png';
const HeroCardData = [
  {
    title: 'Individual',
    subTitle: 'for myself',
    mainImage: Image1,
    background: (
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="97" viewBox="0 0 400 97" fill="none">
        <path d="M0 96.8765V0.876481C152.421 -3.91379 240.312 10.2905 400.5 59.3765V96.8765H0Z" fill="#465A73" fill-opacity="0.5"/>
      </svg>
    ),
    styling:{
      background: '#6D619A'
    }
  },
  {
    title: 'Couples',
    subTitle: 'for me and my partner',
    mainImage: Image2,
    background: (
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="97" viewBox="0 0 400 97" fill="none">
        <path d="M0 96.8765V0.876481C152.421 -3.91379 240.312 10.2905 400.5 59.3765V96.8765H0Z" fill="#3B3358" fillOpacity="0.5"/>
      </svg>
    ),
    styling:{
      background: '#617B9A'
    }
  },
  {
    title: 'Teen',
    subTitle: 'for my child',
    mainImage: Image3,
    background: (
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="97" viewBox="0 0 400 97" fill="none">
        <path d="M0 96.8765V0.876481C152.421 -3.91379 240.312 10.2905 400.5 59.3765V96.8765H0Z" fill="#3B3358" fillOpacity="0.5"/>
      </svg>
    ),
    styling:{
      background: '#9A6F61'
    }
  },
];

export default HeroCardData;
