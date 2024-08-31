import React, { useRef, useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import experts from '../img/experts.jpg'; // Asegúrate de ajustar la ruta de la imagen
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import "../styles/contacts.css"
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();
  const [fullState,setFullState] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fg4ok95', 'template_i2gli6n', form.current, {
        publicKey: '-WZJlHhTkQspsUUUz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFullState("OK")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact' style={{ backgroundColor: "#FBEECA", padding: '50px 0' }}>
      <div style={{ maxWidth: '1200px', margin: "auto", display: 'flex', justifyContent:"space-between" }}>
        <div className='contactForm' style={{ maxWidth: '600px', flex: '1', marginRight: '20px' }}>
          <Typography style={{ fontFamily: "Signika Negative,sans-serif" }} variant="h4" gutterBottom>
            Formulario de Contacto
          </Typography>
          { fullState !== "OK" ? 

              <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                label="Nombre"
                variant="outlined"
                type='text'
                required
                name="user_name"
                fullWidth
                style={{ marginBottom: '20px' }}
              />
              <TextField
                label="Apellido"
                variant="outlined"
                name="lastName"
                fullWidth
                style={{ marginBottom: '20px' }}
              />
              <TextField
                label="Correo electrónico"
                variant="outlined"
                type='email'
                required
                name="user_email"
                fullWidth
                style={{ marginBottom: '20px' }}
              />
              <TextField
                label="Número de teléfono"
                variant="outlined"
                name="message"
                required
                fullWidth
                style={{ marginBottom: '20px' }}
              />
              <Button
                type="submit"
                variant="contained"
                color="warning"
                value="send"
                fullWidth
              >
                Enviar
              </Button>
            </form>
         
           : <div className="mensaje-exito">
           <span className="checkmark">✓</span>
           <p>Envío realizado correctamente</p>
         </div>  }
         </div>
         <img className='imgContact' src={experts} alt="Experts" style={{ maxWidth: "550px", flex: '1' }} />
      </div>
    </div>
  );
};

export default Contact;