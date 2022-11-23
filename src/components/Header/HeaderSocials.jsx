import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaYoutube } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/pablo-araujo-441402167/"
        target="__blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/pablorzenha" target="__blank">
        <FaGithub />
      </a>
      <a href="https://www.youtube.com/@pabloaraujo1893" target="__blank">
        <FaYoutube />
      </a>
    </div>
  );
}

export default HeaderSocials;
