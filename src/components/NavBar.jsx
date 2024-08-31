import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // O la librería que utilices para el enrutamiento
import '../styles/navBar.css'; // Asegúrate de que el archivo CSS esté correctamente importado
import logo from "../img/logo.png"
import TextChanger from '../helpers/TextChanger';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 50); // Ajusta el valor según cuando quieras que cambie el color
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="navbar-logo"><img src={logo} alt="" /></a>
                <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href='#nosotros'>Nosotros</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
                <p className='navBarTextChanger' style={{marginLeft:"730px"}}><TextChanger/></p>
                <button className={`navbar-toggler ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="navbar-toggler-icon"></div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
