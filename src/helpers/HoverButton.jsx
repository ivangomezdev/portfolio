import React, { useState } from 'react';
import './hoverButton.css'; // Asegúrate de tener este archivo CSS

const HoverButton = ({ text,href}) => {
    const [isActive, setIsActive] = useState(false);

    return (
  
      <button 
        className={`animated-button ${isActive ? 'active' : ''}`}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <span  className="button-text">{text}</span>
      </button>
      
     
    );
};

export default HoverButton;