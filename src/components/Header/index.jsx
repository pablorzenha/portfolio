import React from "react";
import CTA from "./CTA";
import me from "../../assets/me.jpeg";
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
          <img src={me} alt="Pablo Araujo" />
        </div>
        <a href="#contact" className="scroll_dowm">
          Role para baixo
        </a>
      </div>
    </header>
  );
};

export default Header;
