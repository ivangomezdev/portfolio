import React, { useState, useEffect } from 'react';
import "./textChanger.css"

const TextChanger = () => {
    // Array de textos a mostrar
    const texts = [
        "SPA ⚛",
        "LANDINGS 🤳",
        "ADS 🚀",
        "WEB-APPS 👩‍💻",
    ];

    // Estado para el índice del texto actual
    const [currentIndex, setCurrentIndex] = useState(0);

    // Efecto para cambiar el texto cada ciertos segundos
    useEffect(() => {
        // Intervalo de cambio de texto en milisegundos
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000); // Cambia cada 3 segundos (3000 milisegundos)

        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className='textChangerCont'>
            <p style={{color:"#1891CD",fontWeight:"bold"}}>{texts[currentIndex]}</p>
        </div>
    );
};

export default TextChanger;
