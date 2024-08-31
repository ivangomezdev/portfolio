// GifsGallery.js
import React from 'react';
import Ecommerce from "../img/ecommerce.gif";
import Ejet from "../img/ejet.gif";
import Stock from "../img/stock.gif";
import Verduleria from "../img/verduleria.gif";
import ReporteDiario from "../img/Reportediario.gif";
import '../styles/gifsGallery.css'; // Importa el archivo CSS
import { Typography } from '@mui/material';
import LOGOS from "../img/LOGOS.png"

const GifsGallery = () => {
    const gifs = [
        { src: Ecommerce, alt: "gif1", description: "Ecommerce ejemplo" },
        { src: Ejet, alt: "gif2", description: "Landing Ejemplo" },
        { src: Stock, alt: "gif3", description: "WebApp Stock ejemplo (diseño básico)" },
        { src: ReporteDiario, alt: "gif4", description: "Reporte de ventas (WebApp) para empresa de ventas" },
        { src: Verduleria, alt: "gif5", description: "WebApp De costos" },
        { src: LOGOS, alt:"LOGO", description:"Logos"}
    ];

    return (
        <div className='gifsGalleryContainer'>
            <Typography style={{ fontFamily: "Signika Negative,sans-serif",color:"white",marginBottom:"20px"}} variant='h4'>Elegido por nuestros clientes</Typography>
            <div className='gifsDiv'>
                {gifs.map((gif, index) => (
                    <div key={index} className='gifContainer'>
                        <img src={gif.src} alt={gif.alt} className='gifItem' />
                        <div className='tooltip'>{gif.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GifsGallery;