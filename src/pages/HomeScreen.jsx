import React from 'react'
import NavBar from '../components/NavBar'
import TextColorBoxes from '../components/TextColorBoxes'
import Steppers from '../components/Steppers'
import maleBussines from "../img/pages.avif"
import shine from "../img/software.png"
import TextBoxes from '../components/TextBoxes'
import Cards from '../components/Cards'
import options from "../img/options.avif"
import flexStart from "../img/flexStart.jpg"
import { Typography } from '@mui/material'
import Popper from '../components/Popper'
import CartPrices from '../components/CartPrices'
import Accordeon from '../components/Accordeon'
import Contact from '../components/Contact'
import WhatsappIcon from '../helpers/WhatsappIcon'
import GifsGallery from '../components/GifsGallery'
import Footer from '../components/Footer'
const HomeScreen = () => {
    const FAQData = [
        { question: "¿Cual es la demora de los servicios?", answer: "La demora aproximada de cada servicio es estimada y esta sujeta a los pedidos/cambios del cliente, siempre intentaremos entregar su pedido a la brevedad. en el momento que nos contacta pactaremos una fecha estimada de entrega donde se cumpliran los plazos." },
        { question: "¿Debo pagar algún adicional?", answer: "Todos nuestros planes son personalizados. El dominio y hosting de tu web/app/landing pueden ser totalmente gratis ya que trabajamos con Vercel. por ende si escoges no pagar por un hosting y dominio el nombre de tu web/app elegido sera \"NombreEscogido.vercel.app\"" },
        { question: "¿Cómo puedo cambiar mi plan?", answer: "Puedes cambiar tu plan en cualquier momento contactándonos directamente. Revisaremos tus necesidades y haremos los ajustes necesarios." },
        { question: "¿Qué incluye el soporte 24/7?", answer: "El soporte 24/7 incluye asistencia técnica a cualquier hora del día, los 7 días de la semana, para resolver cualquier problema o inquietud que puedas tener." },
    ];
    return (
        <div>
            <WhatsappIcon></WhatsappIcon>
            <NavBar></NavBar>
            <TextColorBoxes  textColorBoxesImg2={maleBussines}
                textColorBoxTextDiv={"boxContainerClassText"}
                textColorBoxesTitle={"Potencia tus ventas con nuestros servicios"}
                textColorBoxesP={"Adquirí nuestros productos digitales para darte a conocer y llegar a más clientes.Trae tu idea y la transformamos en realidad."}
                buttonText={"Comenzar"}
                minorText={"Digitalizá tu emprendimiento"}
                refs={"#services"}
                boxContainerClass={"boxContainerClassGray"}>
                
            </TextColorBoxes>
        
            <TextBoxes></TextBoxes>



            <Typography style={{textAlign:"center",marginTop:"80px",fontFamily:"Signika Negative,sans-serif"}} variant='h3'>Sobre Nosotros</Typography>
            <Cards title={"Presupuesto economico y personalizado"}
                cardTextclass={"cardTextCont"}
                buttonText={"Ir a planes →"}
                description={"Elegí el plan que mas se adapte a tu negocio sin moverte de tu hogar, todos nuestros planes cuentan con un servicio post/venta de por vida!"}
                image2={flexStart}
                cardStyleBox={"cardContainer"}
                refs={"#services"}
                ></Cards>

            <Cards title={"Si tenes dudas contactanos!"}
                description={"Ante cualquier consulta no dudes en escribirnos, nuestros operadores van a responderte a la brevedad (Si sos cliente recordá que tenes el servicio 24/7 Disponible)"}
                image={options}
                cardStyleBox={"cardContainer"}
                cardTextclass={"cardTextCont"}
                buttonText={"Ir a contacto →"}
                refs={"#contact"}
                ></Cards>
                <Typography style={{textAlign:"center",fontFamily:"Signika Negative,sans-serif",backgroundColor:"#F6F6F4",padding:"40px"}} variant='h3'>Encontrá el plan adecuado</Typography>
                <CartPrices></CartPrices>
            
            <Contact></Contact>
            <Accordeon 
                title="Preguntas Frecuentes"
                items={FAQData}
            />
            <GifsGallery></GifsGallery>
            <Footer/>
        </div>
    )
}

export default HomeScreen