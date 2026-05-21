import React from "react";
import "./footer.css";
import Nosotros from "../../Nosotros/Nosotros";

const Footer = () => {
  return (
    <footer className="footer">
      {/* SECCIÓN SUPERIOR: Las tarjetas se renderizan aquí ocupando todo el ancho horizontal */}
      <div className="footer__top-fullwidth">
        <Nosotros />
      </div>

      {/* SECCIÓN INFERIOR: Las columnas informativas en CSS Grid */}
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">Sobre Nosotros</h3>
          <p className="footer__text">
            TechZone es tu destino para las últimas tecnologías e innovaciones.
          </p>
        </div>

        {/* Sección: Enlaces */}
        <div className="footer__section">
          <h3 className="footer__title">Enlaces Rápidos</h3>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__link">
                Inicio
              </a>
            </li>
            <li className="footer__item">
              <a href="/productos" className="footer__link">
                Productos
              </a>
            </li>
            <li className="footer__item">
              <a href="/contacto" className="footer__link">
                Contacto
              </a>
            </li>
            <li className="footer__item">
              <a href="/blog" className="footer__link">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Sección: Datos de Contacto */}
        <div className="footer__section">
          <h3 className="footer__title">Contacto</h3>
          <p className="footer__text">Email: info@techzone.com</p>
          <p className="footer__text">Teléfono: +1 (555) 123-4567</p>
          <p className="footer__text">
            Dirección: 123 Tech Street, Silicon Valley
          </p>
        </div>

        {/* Sección: Redes Sociales */}
        <div className="footer__section">
          <h3 className="footer__title">Síguenos</h3>
          <div className="social-links">
            <a
              href="https://facebook.com"
              className="social-links__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="social-links__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              className="social-links__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              className="social-links__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; 2024 TechZone. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
