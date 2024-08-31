import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "../styles/cards.css"
import TypingEffect from './TextEffect';
import HoverButton from '../helpers/HoverButton';
const Cards = ({title,description,image,cardStyleBox,image2,cardTextclass,buttonText,refs}) => {
  return (
    <div id="nosotros" className={cardStyleBox} >

    <img src={image} className='imgResponsive'></img>

      <CardContent className={cardTextclass}>
        <Typography style={{fontFamily:"Signika Negative,sans-serif"}} gutterBottom variant="h2" component="div">
        <TypingEffect text={title} speed={100} />
        </Typography>
        <Typography variant="h6" color="text.secondary">
         {description}
        </Typography>
        <a href={refs}>
        <HoverButton  href={refs} text={buttonText} />
        </a>
      </CardContent>
    
      <img src={image2} className='imgResponsive'></img>
  </div>
  )
}

export default Cards