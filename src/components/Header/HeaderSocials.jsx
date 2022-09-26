import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="__blank">
        <FaGithub />
      </a>
      <a href="https://instagram.com" target="__blank">
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
