import React from 'react';
import "../styles/textColorBoxes.css";
import { Typography } from '@mui/material';
import { a } from '@react-spring/web';

const TextColorBoxes = ({
  minorText,
  boxContainerClass,
  textColorBoxesImg2,
  textColorBoxesTitle,
  textColorBoxesImg,
  textColorBoxesP,
  textColorBoxTextDiv,
  buttonText,
  refs
}) => {
  return (
    <div className={boxContainerClass}>
      <div  className={textColorBoxTextDiv}>

        <div className='minorTextContainer'>
          {buttonText && <p className='minorText'>{minorText}</p>}
        </div>

        <Typography className='textColorBoxTitle' variant="h3">{textColorBoxesTitle}</Typography>
        <Typography className='textColorBoxP' color={"gray"} variant="h5">{textColorBoxesP}</Typography>
        
        <div className='buttonContainer'>
          {buttonText && <a href={refs}> <button className='button'> {buttonText}</button> </a>}
        </div>
      </div>
      <img className='textColorBoxImg' src={textColorBoxesImg2} alt="Additional visual representation" />
    </div>
  );
};

export default TextColorBoxes;