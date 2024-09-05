import React, { useState, useEffect } from 'react';
import whatsapp from "../img/whatsapp.png" // Ajusta la ruta de la imagen
import "./whatsappIcon.css"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router-dom';
const WhatsappIcon = () => {


  return (
    <div className='whatsAppDiv'>
        <ChatBubbleOutlineIcon fontSize='small' />
     <a style={{textDecoration:"none",color:"whitesmoke"}} href="https://wa.me/2616512211" target="_blank" rel="noopener noreferrer" >Representante</a>
      </div>
  );
};

export default WhatsappIcon;
