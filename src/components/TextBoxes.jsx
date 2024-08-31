import React, { useState, useEffect } from 'react';
import "../styles/textBoxes.css";
import { Typography } from '@mui/material';

const TextBoxes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const rotationInterval = 2000; // Tiempo de rotación en milisegundos

  const contain = [
    {
      title: "Landing Pgs",
      subtitle: "Capta futuros clientes y genera Leads, que no se te escapen las ventas",
      color: "white"
    },
    {
      title: "Ecommerce",
      subtitle: "Obtene tu tienda virtual personalizada y vende tus productos sin moverte de tu hogar",
      color: "white"
    },
    {
      title: "WebApps",
      subtitle: "Lo que necesites para tu negocio o emprendimiento nosotros lo hacemos realidad!",
      color: "white"
    },
    {
      title: "ADs Service",
      subtitle: "Pone tu producto en lo mas alto, publicidad? al mejor precio!",
      color: "white"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % contain.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [contain.length]);

  return (
    <div className='textBoxesCont'>
      {contain.map((item, index) => (
        <div
          key={index}
          className={`textBox ${index === activeIndex ? 'active' : ''}`}
          style={{ color: item.color }}
        >
          <Typography variant='h3'>{item.title}</Typography>
          <Typography variant='h6'>{item.subtitle}</Typography>
        </div>
      ))}
    </div>
  );
}

export default TextBoxes;