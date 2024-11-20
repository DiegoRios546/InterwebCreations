import React, { useState } from "react";
import "./Estilos/Navbar.css";
import logo from "../Componentes/Imagenes/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
        <img src={logo} alt="Interweb Creations Logo" className="logo-image" />
        <span>Interweb Creations</span>
      </div>
      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <li className="navbar-item">Inicio</li>
        <li className="navbar-item">Nosotros</li>
        <li className="navbar-item">Servicios</li>
        <li className="navbar-item">Proyectos</li>
        <li className="navbar-item">Contacto</li>
      </ul>
      <button className="navbar-login">
        <span className="login-text">Iniciar Sesión</span>
        <i className="login-icon fa fa-user"></i>
      </button>
    </nav>
  );
};

export default Navbar;
