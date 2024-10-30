// src/Background.js
import React from 'react';
import './Background.css';
import logo1 from './logo-1.png'; // Example logo import
import logo2 from './logo-2.png'; // Example logo import
import logo3 from './logo-3.png';

const Background = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="logos">
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <img src={logo1} alt="Logo 1" />
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <img src={logo2} alt="Logo 2" />
        </a>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          <img src={logo3} alt="Logo 3"/>
        </a>
        {/* Add more logos as needed */}
      </div>
    </div>
  );
};

export default Background;
