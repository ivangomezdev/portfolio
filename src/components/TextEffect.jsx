import React, { useState, useEffect } from 'react';
import '../styles/textEffect.css'; // Asegúrate de tener este archivo CSS
import { Typography } from '@mui/material';

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(intervalId);
    }, speed);
    
    return () => clearInterval(intervalId);
  }, [text, speed]);
  
  return (
    <div className="typing-effect">
          <Typography style={{ fontFamily:"Signika Negative,sans-serif"}} gutterBottom variant="h4" component="div">
      {displayedText}
      </Typography>
      <span className="cursor"></span>
    </div>
  );
};

export default TypingEffect;