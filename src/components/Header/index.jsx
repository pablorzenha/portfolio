import React from "react";
import CTA from "./CTA";
import emoji from "../../assets/bitmojiHeader.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Pablo Araujo</h1>
        <h5 className="text-ligth">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={emoji} alt="Pablo Araujo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
