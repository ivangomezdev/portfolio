import React from 'react';
import Slider from 'react-slick';
import { Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import './carrousel.css'; // Asegúrate de importar el archivo CSS adecuado
import { Padding } from '@mui/icons-material';

const Carrousel = () => {
    const content = [
        { title: "Ecommerce", description: "Creamos tu tienda online. Vende todo tipo de productos 24/7 sin limitaciones", priceDescription: "Desde", price: "300", contentText: ["Diseño personalizado", "Creación de LOGO", "Correo incluido", "Soporte 24/7", "Pago único", "Hosting y Dominio 1 mes GRATIS"] },
        { title: "Landing", description: "Presenta tu producto/servicio y genera leads instantáneos.", priceDescription: "Desde", price: "199", contentText: ["Diseño personalizado", "Creación de LOGO", "Correo incluido", "Soporte 24/7", "Pago único", "Hosting y Dominio 1 mes GRATIS"] },
        { title: "WebApps", description: "Controladores de stock, gastos, personal y mucho más", priceDescription: "Desde", price: "399", contentText: ["Diseño personalizado", "Soporte 24/7", "Pago único", "Hosting personalizado y gratuito"] },
        { title: "ADS +", description: "Llega a más clientes con nuestra campaña de Ads", priceDescription: "Desde", price: " -", contentText: ["Campaña personalizada", "Creación de LOGO", "Correo incluido", "Soporte 24/7", "Pago único", "Hosting y Dominio 1 mes GRATIS"] },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='CarrouselCont'>
            <Slider {...settings}>
                {content.map((item, index) => (
                    <div className="CardPriceContainer" key={index}>
                        <h1 style={{ fontFamily: "Signika Negative,sans-serif" }}>{item.title}</h1>
                        <small>{item.description}</small>
                        <h4>{item.priceDescription}</h4>
                        <h1>${item.price}</h1>
                        <div>
                            {item.contentText.map((text, idx) => (
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }} key={idx}>
                                    <DoneIcon /> <small>{text}</small>
                                </div>
                            ))}
                        </div>
                        <button className='CartPricesButton'>Pedir ahora</button>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carrousel;
