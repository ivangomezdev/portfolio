import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import "../styles/cartPrices.css"
import { Typography } from '@mui/material';
import Carrousel from '../helpers/Carrousel';

const CartPrices = () => {
    const content = [
        { style: "CardPriceContainer", title: "Ecommerce", description: "Creamos tu tienda online. Vende todo tipo de productos 24/7 sin limitaciones", priceDescription: "Desde", price: "300", contentText: ["Diseño personalizado", "Creación de LOGO", "Correo incluido", "Soporte 24/7", "Pago unico", "Hosting y Dominio 1 mes GRATIS"] },
        { style: "CardPriceContainerRecommend",titleRecommend:"Recomendado", title: "Landing", description: "Presenta tu producto/servicio y genera leads instantaneos.", priceDescription: "Desde", price: "199", contentText: ["Diseño personalizado", "Creación de LOGO", "Correo incluido", "Soporte 24/7", "Pago unico", "Hosting y Dominio 1 mes GRATIS"] },
        { style: "CardPriceContainer", title: "WebApps", description: "Controladores de stock, gastos, personal y mucho mas", priceDescription: "Desde", price: "399", contentText: ["Diseño personalizado", "Soporte 24/7", "Pago unico", "Soporte 24/7", "Pago unico", "Hosting personalizado y gratuito"] },
        { style: "CardPriceContainer", title: "ADS +", description: "Llega a más clientes con nuestra campaña de Ads", priceDescription: "Desde", price: " -", contentText: ["Campaña personalizada", "Creación de LOGO", "Correo incluido", "Soporte 24/7", "Pago unico", "Hosting y Dominio 1 mes GRATIS"] },
    ]

    return (
        <div id="services" className='cartPricesCont'>
            <Carrousel></Carrousel>
            {content.map((i =>
                <div className={i.style}>
                    <p>{i.titleRecommend}</p>
                    <h1 style={{ marginTop: "-15px", marginBottom: "5px",fontFamily:"Signika Negative,sans-serif" }}>{i.title}</h1>
                    <small style={{fontSize:".8125rem"}}>{i.description}</small>
                    <h4>{i.priceDescription}</h4>
                    <h1 style={{ marginTop: "-20px" }}>${i.price}</h1>
                    <div>
                        {i.contentText.map((i) =>
                            <>
                                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                    <DoneIcon /> <small style={{borderBottom:"1px dotted black",paddingBottom:"2px",display:"inline",fontSize:".8125rem"}}>{i}</small>
                                </div>
                                <hr style={{
                                    border: "0",
                                    height: "1px",
                                    backgroundColor: "rgba(128, 128, 128, 0.442)",
                                    width: "98%"
                                }} />
                            </>
                        )}
                    </div>
                    <button className='CartPricesButton'><a href=''> Pedir ahora</a></button>
                </div>
            ))}
            
        </div>
    )
}

export default CartPrices