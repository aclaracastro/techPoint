import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="TechPoint Logo" href='#Header' className="imgLogo" />
        </div>
        <div className="contacts">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
          <div className="numero">
            <span>(21) 9 9995-6202 </span>
            <span> | </span>
            <span>(21) 9 9995-3526</span>
          </div>
       
        <AccountCircleIcon className="circuloIcon"/>

        <nav className="nav">        
          <a href="#cadastrar/entrar" className="nav-item"  >
            Cadastrar/Entrar
          </a> 
          <a href="#produtos" className="nav-item">
            Produtos
          </a>
          <a href="#portfolio" className="nav-item">
            Localização
          </a>
          <a href="#contato" className="nav-item">
            Contato
          </a>
        </nav>
      </div>

    </header>
  );
};

export default Header;
