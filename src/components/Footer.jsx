import React from 'react';
import { Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import '../styles/footer.css'; // Asegúrate de importar el archivo CSS adecuado

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <Typography variant="h6" color="inherit" gutterBottom>
                        Contáctanos
                    </Typography>
                    <Typography variant="body2" color="inherit">
                        Dirección: Calle - 123, Mendoza, Argentina
                    </Typography>
                    <Typography variant="body2" color="inherit">
                        Teléfono: (261) 651-2211
                    </Typography>
                    <Typography variant="body2" color="inherit">
                        Correo: ivansangomez6@gmail.com
                    </Typography>
                </div>

                <div className="footer-section">
                    <Typography variant="h6" color="inherit" gutterBottom>
                        Enlaces
                    </Typography>
                    <ul className="footer-links">
                        <li><Link href="/" color="inherit">Inicio</Link></li>
                        <li><Link href="#services" color="inherit">Servicios</Link></li>
                        <li><Link href="#nosotros" color="inherit">Sobre Nosotros</Link></li>
                        <li><Link href="#" color="inherit">Preguntas Frecuentes</Link></li>
                        <li><Link href="#contact" color="inherit">Contacto</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <Typography variant="h6" color="inherit" gutterBottom>
                        Síguenos
                    </Typography>
                    <div className="footer-socials">
                        <Link href="https://facebook.com" color="inherit" aria-label="Facebook">
                            <Facebook />
                        </Link>
                        <Link href="https://twitter.com" color="inherit" aria-label="Twitter">
                            <Twitter />
                        </Link>
                        <Link href="https://instagram.com" color="inherit" aria-label="Instagram">
                            <Instagram />
                        </Link>
                        <Link href="https://linkedin.com" color="inherit" aria-label="LinkedIn">
                            <LinkedIn />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <Typography variant="body2" color="inherit">
                    &copy; {new Date().getFullYear()} WWebs. Todos los derechos reservados.
                </Typography>
            </div>
        </footer>
    );
}

export default Footer;
