import React from "react";
import me from "../../assets/me.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./style.css";

function About() {
  return (
    <section id="about">
      <h5>Vamos conhecer um pouco</h5>
      <h2>sobre mim</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiência</h5>
              <small>Pair programming na Kenzie Academy,</small>
              <br />
              <small>Streaming na Twitch e gamer,</small>
              <br />
              <small>5+ anos em gerência de vendas.</small>
            </article>

            {/* <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small></small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projetos</h5>
              <small>10+ projetos completos</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad harum
            incidunt neque voluptatibus expedita provident, voluptates
            consectetur tempora libero at magnam sequi nemo ratione alias
            necessitatibus quo placeat consequuntur dolorum!
          </p>
          <a href="#contact" className="btn btn-primary">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
