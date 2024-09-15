import './MenuLateral.css'
import React, { useState } from 'react';


function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu
  
    const toggleMenu = () => {
      setIsOpen(!isOpen); // Alterna o estado do menu
    };
  
    return (
      <div className="hamburger-menu">
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
  
        <nav className={`menu ${isOpen ? 'show' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default HamburgerMenu;