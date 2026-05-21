import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoImg from "./logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logoImg} alt="TechZone Logo" />
        </Link>
      </div>

      <nav className="nav">
        <Link to="/" className="navLink">
          Inicio
        </Link>
        <Link to="/productos" className="navLink">
          Productos
        </Link>
        <Link to="/nosotros" className="navLink">
          Nosotros
        </Link>
        <Link to="/contacto" className="navLink">
          Contacto
        </Link>
        <button className="actionButton">Login</button>
      </nav>
    </header>
  );
};

export default Header;
