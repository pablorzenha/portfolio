import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import "./style.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Pablo Araujo
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/pablo.araujo.33">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/pablo_araujo_/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Pabloaraujoeng">
          <IoLogoTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
